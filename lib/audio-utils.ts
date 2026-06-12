/**
 * 音频工具：PCM16 → WAV 转换
 * 用于将小米 TTS API 返回的 PCM16 流拼接并转换为可播放/下载的 WAV 文件
 */

const SAMPLE_RATE = 24000 // 小米 TTS 默认采样率
const CHANNELS = 1
const BITS_PER_SAMPLE = 16

/**
 * 将多个 PCM16 ArrayBuffer 拼接为一个
 */
export function concatPCM16(chunks: ArrayBuffer[]): ArrayBuffer {
  const totalLength = chunks.reduce((acc, chunk) => acc + chunk.byteLength, 0)
  const result = new Uint8Array(totalLength)
  let offset = 0
  for (const chunk of chunks) {
    result.set(new Uint8Array(chunk), offset)
    offset += chunk.byteLength
  }
  return result.buffer
}

/**
 * 在 PCM16 数据末尾追加静音帧
 * @param pcmData 原始 PCM16 数据
 * @param durationMs 静音时长（毫秒）
 */
export function appendSilence(pcmData: ArrayBuffer, durationMs: number): ArrayBuffer {
  const silenceSamples = Math.floor((SAMPLE_RATE * durationMs) / 1000)
  const silenceBytes = silenceSamples * 2 // 16-bit = 2 bytes per sample
  const result = new Uint8Array(pcmData.byteLength + silenceBytes)
  result.set(new Uint8Array(pcmData), 0)
  // Uint8Array 默认初始化为 0，即静音
  return result.buffer
}

/**
 * 将 PCM16 数据转换为 WAV 格式的 Blob
 */
export function pcm16ToWav(pcmData: ArrayBuffer): Blob {
  const dataLength = pcmData.byteLength
  const headerLength = 44
  const buffer = new ArrayBuffer(headerLength + dataLength)
  const view = new DataView(buffer)

  // RIFF header
  writeString(view, 0, 'RIFF')
  view.setUint32(4, 36 + dataLength, true)
  writeString(view, 8, 'WAVE')

  // fmt sub-chunk
  writeString(view, 12, 'fmt ')
  view.setUint32(16, 16, true) // sub-chunk size
  view.setUint16(20, 1, true) // PCM format
  view.setUint16(22, CHANNELS, true)
  view.setUint32(24, SAMPLE_RATE, true)
  view.setUint32(28, SAMPLE_RATE * CHANNELS * (BITS_PER_SAMPLE / 8), true) // byte rate
  view.setUint16(32, CHANNELS * (BITS_PER_SAMPLE / 8), true) // block align
  view.setUint16(34, BITS_PER_SAMPLE, true)

  // data sub-chunk
  writeString(view, 36, 'data')
  view.setUint32(40, dataLength, true)

  // PCM data
  const pcmArray = new Uint8Array(pcmData)
  const wavArray = new Uint8Array(buffer)
  wavArray.set(pcmArray, headerLength)

  return new Blob([buffer], { type: 'audio/wav' })
}

function writeString(view: DataView, offset: number, str: string) {
  for (let i = 0; i < str.length; i++) {
    view.setUint8(offset + i, str.charCodeAt(i))
  }
}
