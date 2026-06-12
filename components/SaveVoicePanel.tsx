'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { BookmarkSimple, X, Check } from '@phosphor-icons/react'

interface SaveVoicePanelProps {
  voiceDescription: string
}

export function SaveVoicePanel({ voiceDescription }: SaveVoicePanelProps) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const canSave = name.trim().length > 0 && voiceDescription.trim().length > 0

  const handleSave = async () => {
    if (!canSave) return
    setSaving(true)
    try {
      await fetch('/api/presets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          voice: 'mimo_default',
          style: voiceDescription.trim(),
        }),
      })
      setSaved(true)
      setTimeout(() => {
        setOpen(false)
        setSaved(false)
        setName('')
      }, 1500)
    } catch {
      // silent
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-3">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          disabled={!voiceDescription.trim()}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
            ${voiceDescription.trim()
              ? 'bg-white/[0.03] text-text-secondary border border-white/[0.06] hover:bg-white/[0.06] hover:text-text-primary hover:border-white/[0.1]'
              : 'bg-white/[0.02] text-text-ghost border border-white/[0.03] cursor-not-allowed'
            }`}
        >
          <BookmarkSimple weight="regular" className="w-4 h-4" />
          保存为预设
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="p-[1px] rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02]"
        >
          <div className="rounded-[calc(2rem-1px)] bg-[#0a0a0a] p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-text-secondary">保存音色预设</span>
              <button
                onClick={() => setOpen(false)}
                className="w-6 h-6 rounded-full bg-white/[0.04] flex items-center justify-center text-text-tertiary hover:text-text-primary transition-colors"
              >
                <X weight="regular" className="w-3.5 h-3.5" />
              </button>
            </div>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="预设名称，如：老先生讲故事"
              className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-text-primary placeholder-text-ghost text-sm focus:outline-none focus:border-accent/30 transition-all duration-300"
            />

            <div className="px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <p className="text-[10px] text-text-tertiary uppercase tracking-wider mb-1">音色描述</p>
              <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">{voiceDescription}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 py-2.5 rounded-xl text-xs font-medium text-text-tertiary hover:text-text-secondary transition-colors"
              >
                取消
              </button>
              <button
                onClick={handleSave}
                disabled={!canSave || saving}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300
                  ${canSave && !saving
                    ? 'bg-accent text-black hover:shadow-[0_0_16px_rgba(52,211,153,0.2)] active:scale-[0.98]'
                    : 'bg-white/[0.04] text-text-tertiary cursor-not-allowed'
                  }`}
              >
                {saved ? (
                  <>
                    <Check weight="bold" className="w-3.5 h-3.5" />
                    已保存
                  </>
                ) : saving ? '保存中...' : '保存'}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
