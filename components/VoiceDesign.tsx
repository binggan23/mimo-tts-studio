'use client'

import { Sparkle } from '@phosphor-icons/react'
import { SaveVoicePanel } from '@/components/SaveVoicePanel'

interface VoiceDesignProps {
  value: string
  onChange: (description: string) => void
}

export function VoiceDesign({ value, onChange }: VoiceDesignProps) {
  return (
    <div className="space-y-4">
      <label className="flex items-center gap-2.5 text-sm font-medium text-text-secondary">
        <div className="w-7 h-7 rounded-lg bg-white/[0.04] flex items-center justify-center">
          <Sparkle weight="regular" className="w-3.5 h-3.5 text-text-tertiary" />
        </div>
        描述你想要的音色
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="一位年迈的老先生，说带北方口音的普通话，语速缓慢而沉稳，嗓音略带沙哑和沧桑感"
        rows={4}
        className="w-full px-5 py-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-text-primary placeholder-text-ghost text-sm resize-none focus:outline-none focus:border-accent/30 focus:bg-white/[0.03] focus:shadow-[0_0_20px_rgba(52,211,153,0.05)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] leading-relaxed"
      />
      <div className="flex flex-wrap gap-2">
        {['性别与年龄', '音色质感', '情绪语气', '语速节奏'].map((hint) => (
          <span
            key={hint}
            className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] text-[10px] text-text-tertiary font-medium tracking-wide"
          >
            {hint}
          </span>
        ))}
      </div>

      {value.trim() && <SaveVoicePanel voiceDescription={value} />}
    </div>
  )
}
