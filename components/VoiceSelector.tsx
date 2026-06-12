'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'motion/react'
import { User, Star, CaretDown, Check } from '@phosphor-icons/react'
import { Preset } from '@/lib/types'
import { getIcon } from '@/lib/icons'
import { PresetPicker } from '@/components/PresetPicker'

const voices = [
  { name: 'mimo_default', cn: '默认', desc: '通用音色，均衡自然', gender: 'D' },
  { name: '冰糖', cn: '冰糖', desc: '清甜明亮，活泼可爱', gender: 'F' },
  { name: '茉莉', cn: '茉莉', desc: '温柔细腻，清新淡雅', gender: 'F' },
  { name: '苏打', cn: '苏打', desc: '清爽自然，年轻活力', gender: 'M' },
  { name: '白桦', cn: '白桦', desc: '沉稳厚重，专业权威', gender: 'M' },
  { name: 'Mia', cn: '米娅', desc: '优雅知性，温和亲切', gender: 'F' },
  { name: 'Chloe', cn: '克洛伊', desc: '甜美温柔，情感丰富', gender: 'F' },
  { name: 'Milo', cn: '米洛', desc: '温暖磁性，亲和力强', gender: 'M' },
  { name: 'Dean', cn: '迪恩', desc: '浑厚低沉，刚毅有力', gender: 'M' },
]

interface VoiceSelectorProps {
  value: string
  onChange: (voice: string) => void
  style: string
  onStyleChange: (style: string) => void
  activePresetId: string | null
  onPresetSelect: (preset: Preset) => void
}

export function VoiceSelector({ value, onChange, style, onStyleChange, activePresetId, onPresetSelect }: VoiceSelectorProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [pickerOpen, setPickerOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = voices.find(v => v.name === value)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div className="space-y-4">
      {/* Preset Picker Trigger */}
      <div className="space-y-3">
        <label className="flex items-center gap-2.5 text-sm font-medium text-text-secondary">
          <div className="w-7 h-7 rounded-lg bg-white/[0.04] flex items-center justify-center">
            <Star weight="regular" className="w-3.5 h-3.5 text-accent" />
          </div>
          预设风格
        </label>
        <button
          onClick={() => setPickerOpen(true)}
          className="w-full flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-left hover:border-white/[0.12] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group"
        >
          <div className="flex items-center gap-3 min-w-0">
            {activePresetId ? (
              <PresetPreview presetId={activePresetId} />
            ) : (
              <>
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center flex-shrink-0">
                  <Star weight="regular" className="w-4 h-4 text-text-tertiary" />
                </div>
                <span className="text-sm text-text-tertiary">点击选择预设风格</span>
              </>
            )}
          </div>
          <span className="text-xs text-text-tertiary group-hover:text-accent transition-colors duration-200 flex-shrink-0">
            {activePresetId ? '更换' : '选择'}
          </span>
        </button>
      </div>

      {/* Preset Picker Modal */}
      <PresetPicker
        open={pickerOpen}
        onClose={() => setPickerOpen(false)}
        onSelect={onPresetSelect}
        activePresetId={activePresetId}
      />

      {/* Voice Dropdown */}
      <div className="space-y-3" ref={ref}>
        <label className="flex items-center gap-2.5 text-sm font-medium text-text-secondary">
          <div className="w-7 h-7 rounded-lg bg-white/[0.04] flex items-center justify-center">
            <User weight="regular" className="w-3.5 h-3.5 text-text-tertiary" />
          </div>
          选择音色
        </label>

        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-left hover:border-white/[0.12] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="w-6 h-6 rounded-full bg-white/[0.04] flex items-center justify-center text-[9px] font-mono font-bold text-text-tertiary flex-shrink-0">
                {current?.gender || 'D'}
              </span>
              <div className="min-w-0">
                <span className="text-sm font-medium text-text-primary">
                  {current?.cn || '选择音色'}
                </span>
                {current && (
                  <span className="text-[11px] text-text-tertiary ml-2">
                    {current.name} - {current.desc}
                  </span>
                )}
              </div>
            </div>
            <CaretDown
              weight="regular"
              className={`w-4 h-4 text-text-tertiary flex-shrink-0 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {dropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 z-50 rounded-xl bg-[#0d0d0d] border border-white/[0.08] shadow-[0_16px_48px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-2xl">
              <div className="max-h-[320px] overflow-y-auto py-1">
                {voices.map((v) => {
                  const active = value === v.name
                  return (
                    <button
                      key={v.name}
                      onClick={() => {
                        onChange(v.name)
                        setDropdownOpen(false)
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200
                        ${active
                          ? 'bg-accent/10 text-accent'
                          : 'text-text-secondary hover:bg-white/[0.04] hover:text-text-primary'
                        }`}
                    >
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-mono font-bold flex-shrink-0
                        ${active ? 'bg-accent/20 text-accent' : 'bg-white/[0.04] text-text-tertiary'}`}>
                        {v.gender}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{v.cn}</span>
                          <span className="text-[11px] text-text-tertiary">{v.name}</span>
                        </div>
                        <span className="text-[11px] text-text-tertiary">{v.desc}</span>
                      </div>
                      {active && <Check weight="bold" className="w-4 h-4 text-accent flex-shrink-0" />}
                    </button>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function PresetPreview({ presetId }: { presetId: string }) {
  const [preset, setPreset] = useState<Preset | null>(null)

  useEffect(() => {
    fetch('/api/presets')
      .then(r => r.json())
      .then((data: Preset[]) => {
        const found = data.find(p => p.id === presetId)
        if (found) setPreset(found)
      })
      .catch(() => {})
  }, [presetId])

  if (!preset) return null
  const Icon = getIcon(preset.icon)

  return (
    <>
      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
        <Icon weight="regular" className="w-4 h-4 text-accent" />
      </div>
      <div className="min-w-0">
        <span className="text-sm font-medium text-text-primary">{preset.name}</span>
        <span className="text-[11px] text-text-tertiary ml-2">{preset.voice}</span>
      </div>
    </>
  )
}
