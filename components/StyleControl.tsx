'use client'

import { useState } from 'react'
import { PaintBrush, SlidersHorizontal } from '@phosphor-icons/react'

const emotionTags = [
  { tag: '(开心)', label: '开心' },
  { tag: '(悲伤)', label: '悲伤' },
  { tag: '(愤怒)', label: '愤怒' },
  { tag: '(恐惧)', label: '恐惧' },
  { tag: '(惊讶)', label: '惊讶' },
  { tag: '(委屈)', label: '委屈' },
  { tag: '(怅然)', label: '怅然' },
  { tag: '(欣慰)', label: '欣慰' },
  { tag: '(无奈)', label: '无奈' },
  { tag: '(愧疚)', label: '愧疚' },
  { tag: '(释然)', label: '释然' },
  { tag: '(忐忑)', label: '忐忑' },
  { tag: '(动情)', label: '动情' },
]

const toneTags = [
  { tag: '(温柔)', label: '温柔' },
  { tag: '(高冷)', label: '高冷' },
  { tag: '(活泼)', label: '活泼' },
  { tag: '(严肃)', label: '严肃' },
  { tag: '(慵懒)', label: '慵懒' },
  { tag: '(俏皮)', label: '俏皮' },
  { tag: '(深沉)', label: '深沉' },
  { tag: '(干练)', label: '干练' },
]

const dialectTags = [
  { tag: '(东北话)', label: '东北话' },
  { tag: '(四川话)', label: '四川话' },
  { tag: '(河南话)', label: '河南话' },
  { tag: '(粤语)', label: '粤语' },
  { tag: '(台湾腔)', label: '台湾腔' },
]

const fineTags = [
  { tag: '[吸气]', label: '吸气' },
  { tag: '[深呼吸]', label: '深呼吸' },
  { tag: '[叹气]', label: '叹气' },
  { tag: '[喘息]', label: '喘息' },
  { tag: '[笑]', label: '笑' },
  { tag: '[轻笑]', label: '轻笑' },
  { tag: '[大笑]', label: '大笑' },
  { tag: '[冷笑]', label: '冷笑' },
  { tag: '[抽泣]', label: '抽泣' },
  { tag: '[哽咽]', label: '哽咽' },
  { tag: '[咳嗽]', label: '咳嗽' },
  { tag: '[沉默片刻]', label: '沉默' },
]

interface StyleControlProps {
  style: string
  onStyleChange: (style: string) => void
  tags: string
  onTagsChange: (tags: string) => void
  showDirector?: boolean
}

export function StyleControl({
  style, onStyleChange,
  tags, onTagsChange,
  showDirector = true,
}: StyleControlProps) {
  const [directorMode, setDirectorMode] = useState(false)
  const [activeTab, setActiveTab] = useState<'emotion' | 'tone' | 'dialect' | 'fine'>('emotion')
  const [role, setRole] = useState('')
  const [scene, setScene] = useState('')
  const [direction, setDirection] = useState('')

  const handleDirectorChange = (type: 'role' | 'scene' | 'direction', val: string) => {
    const updates = { role, scene, direction, [type]: val }
    setRole(updates.role)
    setScene(updates.scene)
    setDirection(updates.direction)

    const parts = []
    if (updates.role) parts.push(`〖角色〗${updates.role}`)
    if (updates.scene) parts.push(`〖场景〗${updates.scene}`)
    if (updates.direction) parts.push(`〖指导〗${updates.direction}`)
    onStyleChange(parts.join(' '))
  }

  const inputClass = "w-full px-5 py-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-text-primary placeholder-text-ghost text-sm resize-none focus:outline-none focus:border-accent/30 focus:bg-white/[0.03] focus:shadow-[0_0_20px_rgba(52,211,153,0.05)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"

  const tagTabs = [
    { key: 'emotion' as const, label: '情绪' },
    { key: 'tone' as const, label: '语调' },
    { key: 'dialect' as const, label: '方言角色' },
    { key: 'fine' as const, label: '细粒度' },
  ]

  const currentTags = activeTab === 'emotion' ? emotionTags
    : activeTab === 'tone' ? toneTags
    : activeTab === 'dialect' ? dialectTags
    : fineTags

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2.5 text-sm font-medium text-text-secondary">
          <div className="w-7 h-7 rounded-lg bg-white/[0.04] flex items-center justify-center">
            <PaintBrush weight="regular" className="w-3.5 h-3.5 text-text-tertiary" />
          </div>
          风格控制
        </label>
        {showDirector && (
          <button
            onClick={() => setDirectorMode(!directorMode)}
            className={`flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
              ${directorMode
                ? 'bg-accent-glow text-accent border border-accent/20'
                : 'text-text-tertiary hover:text-text-secondary hover:bg-white/[0.03] border border-transparent'
              }`}
          >
            <SlidersHorizontal weight="regular" className="w-3 h-3" />
            导演模式
          </button>
        )}
      </div>

      {!directorMode ? (
        <textarea
          value={style}
          onChange={(e) => onStyleChange(e.target.value)}
          placeholder="用轻快上扬的语调，语速稍快，带着激动的心情"
          rows={2}
          className={inputClass}
        />
      ) : (
        <div className="space-y-2.5">
          <input
            value={role}
            onChange={(e) => handleDirectorChange('role', e.target.value)}
            placeholder="〖角色〗一位经验丰富的老中医"
            className={inputClass}
          />
          <input
            value={scene}
            onChange={(e) => handleDirectorChange('scene', e.target.value)}
            placeholder="〖场景〗在诊室里耐心地叮嘱患者"
            className={inputClass}
          />
          <input
            value={direction}
            onChange={(e) => handleDirectorChange('direction', e.target.value)}
            placeholder="〖指导〗语速缓慢，语气温和，带着关怀"
            className={inputClass}
          />
        </div>
      )}

      <div className="space-y-2.5">
        <p className="text-[10px] text-text-tertiary uppercase tracking-[0.15em] font-medium">音频标签</p>

        <div className="flex gap-1 p-0.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
          {tagTabs.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`relative flex-1 px-3 py-1.5 rounded-md text-[11px] font-medium transition-all duration-300
                ${activeTab === key
                  ? 'text-text-primary'
                  : 'text-text-tertiary hover:text-text-secondary'
                }`}
            >
              {activeTab === key && (
                <div className="absolute inset-0 rounded-md bg-white/[0.06] border border-white/[0.08]" />
              )}
              <span className="relative">{label}</span>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {currentTags.map(({ tag, label }) => {
            const active = tags.includes(tag)
            return (
              <button
                key={tag}
                onClick={() => {
                  if (active) {
                    onTagsChange(tags.replace(tag, '').trim())
                  } else {
                    onTagsChange(tags ? `${tags} ${tag}` : tag)
                  }
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
                  ${active
                    ? 'bg-accent text-black shadow-[0_0_12px_rgba(52,211,153,0.15)]'
                    : 'bg-white/[0.03] text-text-tertiary border border-white/[0.05] hover:bg-white/[0.05] hover:text-text-secondary hover:border-white/[0.08]'
                  }`}
              >
                {label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
