'use client'

import { motion } from 'motion/react'
import { MicrophoneStage, Sparkle, MusicNote } from '@phosphor-icons/react'

type ModelType = 'standard' | 'design' | 'clone'

interface ModelSelectorProps {
  value: ModelType
  onChange: (model: ModelType) => void
}

const models = [
  { key: 'standard' as ModelType, label: '标准合成', icon: MicrophoneStage },
  { key: 'design' as ModelType, label: '音色设计', icon: Sparkle },
  { key: 'clone' as ModelType, label: '音色克隆', icon: MusicNote },
]

export function ModelSelector({ value, onChange }: ModelSelectorProps) {
  return (
    <div className="inline-flex gap-1 p-1 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
      {models.map(({ key, label, icon: Icon }) => {
        const active = value === key
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
              ${active
                ? 'text-text-primary'
                : 'text-text-tertiary hover:text-text-secondary'
              }`}
          >
            {active && (
              <motion.div
                layoutId="model-pill"
                className="absolute inset-0 rounded-xl bg-white/[0.06] border border-white/[0.1]"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative flex items-center gap-2">
              <Icon
                weight={active ? 'fill' : 'regular'}
                className={`w-4 h-4 transition-colors duration-300 ${active ? 'text-accent' : ''}`}
              />
              {label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
