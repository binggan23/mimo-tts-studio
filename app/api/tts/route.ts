import { NextRequest, NextResponse } from 'next/server'
import { TTSRequest, buildMessages } from '@/lib/tts'
import { splitText } from '@/lib/text-splitter'
import { getConfig } from '@/lib/config'

export async function POST(request: NextRequest) {
  try {
    const config = getConfig()
    const body: TTSRequest = await request.json()

    if (!body.text || !body.text.trim()) {
      return NextResponse.json({ error: '请输入要合成的文本' }, { status: 400 })
    }

    const segments = splitText(body.text)
    const allPCMChunks: ArrayBuffer[] = []

    for (let i = 0; i < segments.length; i++) {
      const { messages, audio } = buildMessages({
        ...body,
        text: segments[i],
      })

      console.log(`[TTS] segment ${i + 1}/${segments.length}: "${segments[i].slice(0, 30)}..."`)

      const response = await fetch(config.TTSurl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.TTSapikey}`,
        },
        body: JSON.stringify({
          model: body.model,
          messages,
          audio,
          stream: false,
        }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error(`[TTS] API error (segment ${i + 1}):`, response.status, errorText)
        return NextResponse.json(
          { error: `API 调用失败: ${response.status}`, details: errorText },
          { status: response.status }
        )
      }

      const result = await response.json()
      const audioData = result.choices?.[0]?.message?.audio?.data

      if (audioData) {
        const binaryString = atob(audioData)
        const bytes = new Uint8Array(binaryString.length)
        for (let j = 0; j < binaryString.length; j++) {
          bytes[j] = binaryString.charCodeAt(j)
        }
        allPCMChunks.push(bytes.buffer)
        console.log(`[TTS] segment ${i + 1}: received ${bytes.length} bytes`)
      } else {
        console.error(`[TTS] segment ${i + 1}: no audio data in response`, JSON.stringify(result).slice(0, 300))
      }

      if (i < segments.length - 1) {
        const silenceSamples = Math.floor((24000 * 200) / 1000)
        const silenceBytes = silenceSamples * 2
        const silence = new ArrayBuffer(silenceBytes)
        allPCMChunks.push(silence)
      }
    }

    if (allPCMChunks.length === 0) {
      return NextResponse.json({ error: '未收到音频数据，请检查参数后重试' }, { status: 500 })
    }

    const totalLength = allPCMChunks.reduce((acc, chunk) => acc + chunk.byteLength, 0)
    const pcmData = new Uint8Array(totalLength)
    let offset = 0
    for (const chunk of allPCMChunks) {
      pcmData.set(new Uint8Array(chunk), offset)
      offset += chunk.byteLength
    }

    const wavBuffer = buildWav(pcmData.buffer)

    return new NextResponse(wavBuffer, {
      headers: {
        'Content-Type': 'audio/wav',
        'Content-Disposition': 'attachment; filename="mimo-tts.wav"',
      },
    })
  } catch (error) {
    console.error('[TTS] error:', error)
    return NextResponse.json({ error: '服务器内部错误' }, { status: 500 })
  }
}

function buildWav(pcmData: ArrayBuffer): ArrayBuffer {
  const SAMPLE_RATE = 24000
  const CHANNELS = 1
  const BITS_PER_SAMPLE = 16
  const dataLength = pcmData.byteLength
  const headerLength = 44
  const buffer = new ArrayBuffer(headerLength + dataLength)
  const view = new DataView(buffer)

  writeString(view, 0, 'RIFF')
  view.setUint32(4, 36 + dataLength, true)
  writeString(view, 8, 'WAVE')

  writeString(view, 12, 'fmt ')
  view.setUint32(16, 16, true)
  view.setUint16(20, 1, true)
  view.setUint16(22, CHANNELS, true)
  view.setUint32(24, SAMPLE_RATE, true)
  view.setUint32(28, SAMPLE_RATE * CHANNELS * (BITS_PER_SAMPLE / 8), true)
  view.setUint16(32, CHANNELS * (BITS_PER_SAMPLE / 8), true)
  view.setUint16(34, BITS_PER_SAMPLE, true)

  writeString(view, 36, 'data')
  view.setUint32(40, dataLength, true)

  const wavArray = new Uint8Array(buffer)
  wavArray.set(new Uint8Array(pcmData), headerLength)

  return buffer
}

function writeString(view: DataView, offset: number, str: string) {
  for (let i = 0; i < str.length; i++) {
    view.setUint8(offset + i, str.charCodeAt(i))
  }
}
