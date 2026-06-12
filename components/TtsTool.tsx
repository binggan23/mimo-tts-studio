'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { SpeakerHigh, ArrowRight } from '@phosphor-icons/react'
import { Navbar } from '@/components/Navbar'
import { VoiceSelector } from '@/components/VoiceSelector'
import { Preset } from '@/lib/types'
import { VoiceDesign } from '@/components/VoiceDesign'
import { VoiceClone } from '@/components/VoiceClone'
import { StyleControl } from '@/components/StyleControl'
import { TextInput } from '@/components/TextInput'
import { AudioPlayer } from '@/components/AudioPlayer'

type ModelType = 'standard' | 'design' | 'clone'

const modelMap: Record<ModelType, string> = {
  standard: 'mimo-v2.5-tts',
  design: 'mimo-v2.5-tts-voicedesign',
  clone: 'mimo-v2.5-tts-voiceclone',
}

const modelLabels: Record<ModelType, string> = {
  standard: '标准合成',
  design: '音色设计',
  clone: '音色克隆',
}

const modelDescriptions: Record<ModelType, string> = {
  standard: '选择预置音色与风格，即刻生成高质量语音',
  design: '用自然语言描述你想要的音色，模型自动创造',
  clone: '上传参考音频，精准复刻目标音色',
}

interface TtsToolProps {
  initialModel: ModelType
}

export function TtsTool({ initialModel }: TtsToolProps) {
  const [model] = useState<ModelType>(initialModel)
  const [voice, setVoice] = useState('Chloe')
  const [voiceDescription, setVoiceDescription] = useState('')
  const [voiceAudio, setVoiceAudio] = useState('')
  const [style, setStyle] = useState('')
  const [tags, setTags] = useState('')
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [activePresetId, setActivePresetId] = useState<string | null>(null)

  const handlePresetSelect = useCallback((preset: Preset) => {
    setVoice(preset.voice)
    setStyle(preset.style)
    setActivePresetId(preset.id)
  }, [])

  const canGenerate = text.trim().length > 0 && !loading

  const handleGenerate = useCallback(async () => {
    if (!canGenerate) return
    setLoading(true)
    setError(null)
    setAudioUrl(null)

    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: modelMap[model],
          text: text.trim(),
          voice: model === 'standard' ? voice : undefined,
          voiceDescription: model === 'design' ? voiceDescription : undefined,
          voiceAudio: model === 'clone' ? voiceAudio : undefined,
          style: style || undefined,
          tags: tags || undefined,
        }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error || `请求失败: ${response.status}`)
      }

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      setAudioUrl(url)
    } catch (err) {
      setError(err instanceof Error ? err.message : '生成失败，请重试')
    } finally {
      setLoading(false)
    }
  }, [canGenerate, model, text, voice, voiceDescription, voiceAudio, style, tags])

  const handleDownload = useCallback(() => {
    if (!audioUrl) return
    const a = document.createElement('a')
    a.href = audioUrl
    a.download = `mimo-tts-${Date.now()}.wav`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }, [audioUrl])

  return (
    <div className="min-h-screen">
      <Navbar activeModel={model} />

      {/* Page Header */}
      <div className="pt-24 pb-6 px-6 md:px-10 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="flex items-end justify-between gap-4 mb-10"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-glow border border-accent/20 text-[10px] font-semibold text-accent tracking-wider uppercase">
                {modelLabels[model]}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary">
              {modelDescriptions[model]}
            </h1>
          </div>
        </motion.div>
      </div>

      {/* Main Content — 2-column asymmetric */}
      <div className="px-6 md:px-10 pb-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-5 lg:gap-6 items-start">
          {/* Left: Input Area */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          >
            {/* Double-Bezel: Outer Shell */}
            <div className="p-[1px] rounded-[1.25rem] bg-gradient-to-b from-white/[0.08] to-white/[0.02]">
              {/* Inner Core */}
              <div className="rounded-[calc(1.25rem-1px)] bg-[#0a0a0a] p-5 md:p-7 space-y-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={model}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                  >
                    {model === 'standard' && (
                      <VoiceSelector value={voice} onChange={setVoice} style={style} onStyleChange={setStyle} activePresetId={activePresetId} onPresetSelect={handlePresetSelect} />
                    )}
                    {model === 'design' && (
                      <VoiceDesign value={voiceDescription} onChange={setVoiceDescription} />
                    )}
                    {model === 'clone' && (
                      <VoiceClone value={voiceAudio} onChange={setVoiceAudio} />
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

                <StyleControl
                  style={style}
                  onStyleChange={setStyle}
                  tags={tags}
                  onTagsChange={setTags}
                  showDirector={model === 'standard'}
                />

                <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

                <TextInput value={text} onChange={setText} />

                <motion.button
                  onClick={handleGenerate}
                  disabled={!canGenerate}
                  className={`group w-full flex items-center justify-center gap-3 py-4 rounded-full text-sm font-semibold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                    ${canGenerate
                      ? 'bg-accent text-black hover:shadow-[0_0_40px_rgba(52,211,153,0.2)] active:scale-[0.98]'
                      : 'bg-white/[0.04] text-text-tertiary border border-white/[0.06] cursor-not-allowed'
                    }`}
                  whileTap={canGenerate ? { scale: 0.98 } : undefined}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                      生成中
                    </span>
                  ) : (
                    <>
                      生成语音
                      <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                        <ArrowRight weight="bold" className="w-3.5 h-3.5" />
                      </span>
                    </>
                  )}
                </motion.button>

                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="px-4 py-3 rounded-xl bg-danger-glow border border-danger/20 text-danger text-sm"
                    >
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Right: Preview Panel — sticky */}
          <motion.div
            className="lg:sticky lg:top-20 space-y-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          >
            {/* Preview Card — Double-Bezel */}
            <div className="p-[1px] rounded-[1.25rem] bg-gradient-to-b from-white/[0.08] to-white/[0.02]">
              <div className="rounded-[calc(1.25rem-1px)] bg-[#0a0a0a] p-5 min-h-[380px] flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-medium text-text-tertiary uppercase tracking-[0.2em]">
                    预览
                  </span>
                  <span className="text-[10px] text-text-ghost font-mono">
                    {modelLabels[model]}
                  </span>
                </div>
                <div className="flex-1">
                  <AudioPlayer
                    audioUrl={audioUrl}
                    loading={loading}
                    onDownload={handleDownload}
                  />
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="p-[1px] rounded-[1.25rem] bg-gradient-to-b from-white/[0.05] to-transparent">
              <div className="rounded-[calc(1.25rem-1px)] bg-[#0a0a0a] p-5">
                <p className="text-[10px] text-text-tertiary uppercase tracking-[0.15em] font-medium mb-3">
                  快速上手
                </p>
                <div className="space-y-2.5">
                  {[
                    { num: '1', title: '输入文本', desc: '支持中英文，超过300字自动分段' },
                    { num: '2', title: '选择音色与风格', desc: '12 种预设或自定义导演模式' },
                    { num: '3', title: '生成与下载', desc: 'WAV 格式，24kHz 高品质' },
                  ].map((step) => (
                    <div key={step.num} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-accent-glow flex items-center justify-center flex-shrink-0">
                        <span className="text-accent text-[11px] font-mono font-bold">{step.num}</span>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-text-secondary">{step.title}</p>
                        <p className="text-[11px] text-text-tertiary">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
