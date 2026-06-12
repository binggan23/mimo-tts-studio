'use client'

import { motion } from 'motion/react'
import { ArrowRight, Waves, Sparkle, MusicNote, MicrophoneStage, SpeakerHigh } from '@phosphor-icons/react'
import { Navbar } from '@/components/Navbar'

const features = [
  {
    icon: MicrophoneStage,
    href: '/standard',
    title: '标准合成',
    desc: '9 种高保真预置音色，12 种导演级预设风格，支持自然语言与音频标签双重控制。',
    image: 'https://picsum.photos/seed/tts-voice-studio/900/600',
  },
  {
    icon: Sparkle,
    href: '/design',
    title: '音色设计',
    desc: '无需任何音频样本，仅通过自然语言描述就能创造出全新的、符合描述的音色。',
    image: 'https://picsum.photos/seed/tts-ai-brain/900/600',
  },
  {
    icon: MusicNote,
    href: '/clone',
    title: '音色克隆',
    desc: '只需几秒到几十秒的参考音频，即可精准复刻目标音色的个性化韵律特征。',
    image: 'https://picsum.photos/seed/tts-waveform-deep/900/600',
  },
]

export default function Home() {
  const LargeIcon = features[0].icon
  const SmallIcon1 = features[1].icon
  const SmallIcon2 = features[2].icon
  const smallIcons = [SmallIcon1, SmallIcon2]

  return (
    <div className="min-h-screen">
      <Navbar transparent />

      {/* Hero — bottom-left text over full-bleed image */}
      <section className="relative min-h-[100dvh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/dark-studio-mic/1920/1080"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-[#050505]/20 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.1] backdrop-blur-sm mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] font-medium text-white/70 tracking-wider uppercase">
                小米 MiMo-V2.5-TTS
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tighter text-white leading-[1.02]">
              文字
              <span className="text-accent">驱动</span>
              的
              <br />
              声音引擎
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/45 max-w-lg leading-relaxed">
              三种模式，无限可能。将文字转化为自然流畅的语音，支持标准合成、音色设计与音色克隆。
            </p>

            <motion.div
              className="mt-10 flex items-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
            >
              <a
                href="/standard"
                className="group flex items-center gap-3 px-8 py-4 rounded-full bg-accent text-black font-semibold text-sm hover:shadow-[0_0_40px_rgba(52,211,153,0.25)] active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                开始使用
                <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                  <ArrowRight weight="bold" className="w-3.5 h-3.5" />
                </span>
              </a>
              <a
                href="https://platform.xiaomimimo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/30 hover:text-white/60 transition-colors duration-300 font-medium"
              >
                API 文档
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features — Asymmetric Bento (1 large + 2 stacked) */}
      <section className="py-24 md:py-36 px-6 md:px-10 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-glow border border-accent/20 text-[11px] font-medium text-accent tracking-wider uppercase mb-6">
            <Waves weight="regular" className="w-3 h-3" />
            三种模式
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-text-primary leading-[1.1] max-w-3xl">
            为每种创作场景
            <br className="hidden md:block" />
            设计的工具
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {/* Large feature card */}
          <motion.a
            href={features[0].href}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="group relative md:row-span-2 overflow-hidden rounded-2xl min-h-[400px] md:min-h-0"
          >
            <img
              src={features[0].image}
              alt={features[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10">
              <div className="w-12 h-12 rounded-2xl bg-accent/20 border border-accent/25 flex items-center justify-center mb-5 backdrop-blur-sm">
                <LargeIcon weight="regular" className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
                {features[0].title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed max-w-sm mb-5">
                {features[0].desc}
              </p>
              <span className="flex items-center gap-2 text-accent text-sm font-medium">
                立即体验
                <ArrowRight weight="bold" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </div>
          </motion.a>

          {/* Two stacked smaller cards */}
          <div className="flex flex-col gap-4 md:gap-5">
            {features.slice(1).map((feat, i) => {
              const Icon = smallIcons[i]
              return (
                <motion.a
                  key={feat.title}
                  href={feat.href}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.32, 0.72, 0, 1] }}
                  className="group relative overflow-hidden rounded-2xl flex-1 min-h-[260px]"
                >
                  <img
                    src={feat.image}
                    alt={feat.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-7 md:p-8">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/[0.12] flex items-center justify-center mb-4 backdrop-blur-sm">
                      <Icon weight="regular" className="w-5 h-5 text-white/80" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-white/45 leading-relaxed max-w-sm mb-4">
                      {feat.desc}
                    </p>
                    <span className="flex items-center gap-2 text-white/60 text-sm font-medium group-hover:text-accent transition-colors duration-300">
                      立即体验
                      <ArrowRight weight="bold" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-16 px-6 md:px-10 border-y border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { value: '9', label: '预置音色' },
            { value: '12', label: '导演级预设' },
            { value: '3', label: '合成模式' },
            { value: '24kHz', label: '采样率' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.32, 0.72, 0, 1] }}
              className="text-center md:text-left"
            >
              <div className="text-3xl md:text-4xl font-semibold tracking-tighter text-accent font-mono tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs text-text-tertiary mt-1.5 tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/abstract-sound-echo/1920/1080"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/70 to-[#050505]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white leading-tight">
              开始创作你的声音
            </h2>
            <p className="mt-5 text-base text-white/35 max-w-md mx-auto leading-relaxed">
              无需训练，无需复杂配置。输入文字，即刻生成自然流畅的语音。
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="/standard"
                className="group flex items-center gap-3 px-8 py-4 rounded-full bg-accent text-black font-semibold text-sm hover:shadow-[0_0_40px_rgba(52,211,153,0.25)] active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                立即体验
                <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                  <ArrowRight weight="bold" className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-10 border-t border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
              <SpeakerHigh weight="fill" className="w-2.5 h-2.5 text-accent" />
            </div>
            <span className="text-xs text-text-tertiary">
              Default model: Xiaomi MiMo-V2.5-TTS
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://platform.xiaomimimo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-ghost hover:text-text-tertiary transition-colors duration-300"
            >
              API 文档
            </a>
            <span className="text-xs text-text-ghost/50">
              Built with Next.js
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
