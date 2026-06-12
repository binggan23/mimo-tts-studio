'use client'

import { NotePencil } from '@phosphor-icons/react'

interface TextInputProps {
  value: string
  onChange: (text: string) => void
}

export function TextInput({ value, onChange }: TextInputProps) {
  const charCount = value.length
  const segments = Math.ceil(charCount / 300)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2.5 text-sm font-medium text-text-secondary">
          <div className="w-7 h-7 rounded-lg bg-white/[0.04] flex items-center justify-center">
            <NotePencil weight="regular" className="w-3.5 h-3.5 text-text-tertiary" />
          </div>
          合成文本
        </label>
        <div className="flex items-center gap-2 text-[11px]">
          {charCount > 300 && (
            <span className="text-accent bg-accent-glow px-2.5 py-1 rounded-full font-mono font-bold tracking-wider">
              {segments} 段
            </span>
          )}
          <span className="text-text-ghost font-mono tabular-nums">
            {charCount}
          </span>
        </div>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="在这里输入要合成的文本内容..."
        rows={7}
        className="w-full px-5 py-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-text-primary placeholder-text-ghost text-sm resize-none focus:outline-none focus:border-accent/30 focus:bg-white/[0.03] focus:shadow-[0_0_20px_rgba(52,211,153,0.05)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] leading-relaxed"
      />
    </div>
  )
}
