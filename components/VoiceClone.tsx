'use client'

import { useCallback, useRef, useState } from 'react'
import { Upload, X, Play, Pause } from '@phosphor-icons/react'

interface VoiceCloneProps {
  value: string
  onChange: (audioBase64: string) => void
}

export function VoiceClone({ value, onChange }: VoiceCloneProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [fileName, setFileName] = useState<string>('')
  const [isPlaying, setIsPlaying] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleFile = useCallback(async (file: File) => {
    if (!file.type.startsWith('audio/')) {
      alert('请选择音频文件')
      return
    }
    if (file.size > 10 * 1024 * 1024) {
      alert('文件大小不能超过 10MB')
      return
    }
    setFileName(file.name)
    const reader = new FileReader()
    reader.onload = () => {
      onChange(reader.result as string)
    }
    reader.readAsDataURL(file)
  }, [onChange])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }, [handleFile])

  const togglePreview = useCallback(() => {
    if (!value) return
    if (isPlaying && audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
      setIsPlaying(false)
    } else {
      const audio = new Audio(value)
      audio.onended = () => {
        setIsPlaying(false)
        audioRef.current = null
      }
      audio.play()
      audioRef.current = audio
      setIsPlaying(true)
    }
  }, [value, isPlaying])

  const handleClear = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }
    setIsPlaying(false)
    setFileName('')
    onChange('')
  }, [onChange])

  if (value) {
    return (
      <div className="space-y-4">
        <label className="text-sm font-medium text-text-secondary">
          参考音频已加载
        </label>
        <div className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
          <button
            onClick={togglePreview}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-accent text-black hover:shadow-[0_0_20px_rgba(52,211,153,0.2)] transition-all duration-300"
          >
            {isPlaying ? (
              <Pause weight="fill" className="w-4 h-4" />
            ) : (
              <Play weight="fill" className="w-4 h-4 ml-0.5" />
            )}
          </button>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-text-primary truncate font-medium">{fileName}</p>
            <p className="text-[11px] text-text-tertiary font-mono mt-0.5">参考音频</p>
          </div>
          <button
            onClick={handleClear}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-text-tertiary hover:text-danger hover:bg-danger-glow transition-all duration-300"
          >
            <X weight="regular" className="w-4 h-4" />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <label className="flex items-center gap-2.5 text-sm font-medium text-text-secondary">
        <div className="w-7 h-7 rounded-lg bg-white/[0.04] flex items-center justify-center">
          <Upload weight="regular" className="w-3.5 h-3.5 text-text-tertiary" />
        </div>
        上传参考音频
      </label>
      <div
        onDragOver={(e) => {
          e.preventDefault()
          setIsDragging(true)
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`flex flex-col items-center gap-4 px-6 py-12 rounded-2xl border-2 border-dashed cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${isDragging
            ? 'border-accent/40 bg-accent/[0.03]'
            : 'border-white/[0.06] bg-white/[0.01] hover:border-white/[0.12] hover:bg-white/[0.02]'
          }`}
      >
        <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
          <Upload weight="regular" className={`w-6 h-6 transition-colors duration-300 ${isDragging ? 'text-accent' : 'text-text-tertiary'}`} />
        </div>
        <div className="text-center">
          <p className="text-sm text-text-secondary font-medium">点击或拖拽上传音频文件</p>
          <p className="text-[11px] text-text-tertiary mt-1.5">支持 mp3, wav, m4a，最大 10MB</p>
        </div>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="audio/*"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) handleFile(file)
        }}
        className="hidden"
      />
    </div>
  )
}
