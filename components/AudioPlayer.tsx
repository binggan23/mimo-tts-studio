'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Play, Pause, Download, CircleNotch } from '@phosphor-icons/react'

interface AudioPlayerProps {
  audioUrl: string | null
  loading: boolean
  onDownload: () => void
}

export function AudioPlayer({ audioUrl, loading, onDownload }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!audioUrl) return
    const audio = new Audio(audioUrl)
    audioRef.current = audio

    const onMeta = () => setDuration(audio.duration)
    const onTime = () => setCurrentTime(audio.currentTime)
    const onEnd = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    audio.addEventListener('loadedmetadata', onMeta)
    audio.addEventListener('timeupdate', onTime)
    audio.addEventListener('ended', onEnd)

    return () => {
      audio.pause()
      audio.removeEventListener('loadedmetadata', onMeta)
      audio.removeEventListener('timeupdate', onTime)
      audio.removeEventListener('ended', onEnd)
      audioRef.current = null
    }
  }, [audioUrl])

  const togglePlay = useCallback(() => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }, [isPlaying])

  const handleProgressClick = useCallback((e: React.MouseEvent) => {
    if (!audioRef.current || !progressRef.current || !duration) return
    const rect = progressRef.current.getBoundingClientRect()
    const pct = (e.clientX - rect.left) / rect.width
    const t = pct * duration
    audioRef.current.currentTime = t
    setCurrentTime(t)
  }, [duration])

  const fmt = (s: number) => {
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
  }

  const pct = duration ? (currentTime / duration) * 100 : 0

  return (
    <div className="flex flex-col gap-4 h-full">
      {/* Empty state */}
      {!audioUrl && !loading && (
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center">
            <Play weight="regular" className="w-7 h-7 text-text-ghost" />
          </div>
          <p className="text-sm text-text-tertiary">生成后将在这里播放</p>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          >
            <CircleNotch weight="regular" className="w-7 h-7 text-accent" />
          </motion.div>
          <p className="text-sm text-text-tertiary">正在生成音频...</p>
          <div className="w-full max-w-[200px] h-1 rounded-full bg-white/[0.04] overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-accent/50"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 8, ease: [0.32, 0.72, 0, 1] }}
            />
          </div>
        </div>
      )}

      {/* Waveform */}
      {audioUrl && (
        <div className="flex-1 flex flex-col justify-center gap-4">
          {/* Waveform bars */}
          <div className="h-24 rounded-2xl bg-white/[0.01] border border-white/[0.04] flex items-center justify-center overflow-hidden">
            <div className="flex items-center gap-[2px] h-12 px-4">
              {Array.from({ length: 56 }).map((_, i) => {
                const base = Math.sin(i * 0.3) * 0.5 + 0.5
                return (
                  <motion.div
                    key={i}
                    className="w-[2px] rounded-full bg-accent/40"
                    initial={{ height: 2 }}
                    animate={{
                      height: isPlaying
                        ? [2, (base * 32 + 4), 2]
                        : (base * 18 + 3),
                    }}
                    transition={{
                      duration: 0.4 + Math.random() * 0.4,
                      repeat: isPlaying ? Infinity : 0,
                      ease: [0.32, 0.72, 0, 1],
                      delay: i * 0.02,
                    }}
                  />
                )
              })}
            </div>
          </div>

          {/* Progress */}
          <div className="space-y-2">
            <div
              ref={progressRef}
              onClick={handleProgressClick}
              className="relative h-1 rounded-full bg-white/[0.05] cursor-pointer group"
            >
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-accent transition-all duration-100"
                style={{ width: `${pct}%` }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-[0_0_8px_rgba(52,211,153,0.3)]"
                style={{ left: `calc(${pct}% - 5px)` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-text-ghost font-mono tabular-nums">
              <span>{fmt(currentTime)}</span>
              <span>{fmt(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={togglePlay}
              className="flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-full bg-accent text-black font-semibold text-sm hover:shadow-[0_0_32px_rgba(52,211,153,0.2)] active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              {isPlaying ? (
                <Pause weight="fill" className="w-4 h-4" />
              ) : (
                <Play weight="fill" className="w-4 h-4 ml-0.5" />
              )}
              {isPlaying ? '暂停' : '播放'}
            </button>

            <button
              onClick={onDownload}
              className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-full bg-white/[0.04] text-text-secondary border border-white/[0.06] text-sm font-medium hover:bg-white/[0.06] hover:text-text-primary active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              <Download weight="regular" className="w-4 h-4" />
              下载
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
