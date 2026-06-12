'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, Check } from '@phosphor-icons/react'
import { Preset } from '@/lib/types'
import { getIcon } from '@/lib/icons'

interface PresetPickerProps {
  open: boolean
  onClose: () => void
  onSelect: (preset: Preset) => void
  activePresetId: string | null
}

export function PresetPicker({ open, onClose, onSelect, activePresetId }: PresetPickerProps) {
  const [presets, setPresets] = useState<Preset[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!open) return
    setLoading(true)
    fetch('/api/presets')
      .then(r => r.json())
      .then((data: Preset[]) => {
        setPresets(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [open])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed"
      style={{ zIndex: 99999, top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%' }}
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Sheet */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="absolute left-0 right-0 bottom-0 bg-[#0a0a0a] border-t border-white/[0.08] flex flex-col overflow-hidden"
        style={{ top: '10vh', borderRadius: '1.5rem 1.5rem 0 0' }}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
          <div className="w-10 h-1 rounded-full bg-white/[0.15]" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06] flex-shrink-0">
          <div>
            <h3 className="text-lg font-semibold text-text-primary tracking-tight">选择预设风格</h3>
            <p className="text-xs text-text-tertiary mt-0.5">点击选择，自动填配音色和风格参数</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center text-text-tertiary hover:text-text-primary hover:bg-white/[0.08] transition-all duration-200"
          >
            <X weight="regular" className="w-4 h-4" />
          </button>
        </div>

        {/* Grid */}
        <div className="flex-1 overflow-y-auto p-6 min-h-0">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <span className="text-sm text-text-tertiary">加载中...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {presets.map((preset, i) => {
                const active = activePresetId === preset.id
                const Icon = getIcon(preset.icon)
                const roleMatch = preset.style.match(/〖角色〗(.+?)(?:\n|$)/)
                const summary = roleMatch ? roleMatch[1].slice(0, 40) : ''

                return (
                  <motion.button
                    key={preset.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.03, ease: [0.32, 0.72, 0, 1] }}
                    onClick={() => {
                      onSelect(preset)
                      onClose()
                    }}
                    className={`group relative flex flex-col items-start gap-3 p-5 rounded-2xl text-left transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
                      ${active
                        ? 'bg-accent/10 border border-accent/30 shadow-[0_0_24px_rgba(52,211,153,0.08)]'
                        : 'bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08]'
                      }`}
                  >
                    {active && (
                      <div className="absolute top-3 right-3">
                        <Check weight="bold" className="w-4 h-4 text-accent" />
                      </div>
                    )}

                    {preset.custom && (
                      <div className="absolute top-3 left-3">
                        <span className="text-[9px] font-mono text-accent bg-accent/10 px-1.5 py-0.5 rounded">
                          自定义
                        </span>
                      </div>
                    )}

                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300
                      ${active ? 'bg-accent/15' : 'bg-white/[0.04] group-hover:bg-white/[0.06]'}`}>
                      <Icon weight="regular" className={`w-5 h-5 ${active ? 'text-accent' : 'text-text-tertiary group-hover:text-accent/70'} transition-colors duration-300`} />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-sm font-semibold ${active ? 'text-accent' : 'text-text-primary'}`}>
                          {preset.name}
                        </span>
                        <span className="text-[10px] text-text-ghost font-mono">
                          {preset.voice}
                        </span>
                      </div>
                      <p className="text-[11px] text-text-tertiary leading-relaxed line-clamp-2">
                        {summary}
                      </p>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
