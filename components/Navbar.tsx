'use client'

import { motion } from 'motion/react'
import { SpeakerHigh, ArrowRight } from '@phosphor-icons/react'

type ModelType = 'standard' | 'design' | 'clone'

const navLinks: { href: string; label: string; model: ModelType }[] = [
  { href: '/standard', label: '标准合成', model: 'standard' },
  { href: '/design', label: '音色设计', model: 'design' },
  { href: '/clone', label: '音色克隆', model: 'clone' },
]

interface NavbarProps {
  activeModel?: ModelType
  transparent?: boolean
}

export function Navbar({ activeModel, transparent = false }: NavbarProps) {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-500
        ${transparent
          ? 'border-transparent bg-transparent'
          : 'border-white/[0.06] bg-[#050505]/80 backdrop-blur-2xl'
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center group-hover:shadow-[0_0_12px_rgba(52,211,153,0.25)] transition-shadow duration-300">
            <SpeakerHigh weight="fill" className="w-4 h-4 text-black" />
          </div>
          <span className="text-sm font-semibold text-text-primary tracking-tight">
            MiMo TTS
          </span>
        </a>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = activeModel === link.model
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm transition-all duration-200
                  ${active
                    ? 'text-accent font-medium'
                    : 'text-text-tertiary hover:text-text-primary hover:bg-white/[0.04]'
                  }`}
              >
                {link.label}
                {active && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg bg-accent/10 border border-accent/20"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
        </nav>

        {/* CTA */}
        <a
          href="/standard"
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-black text-xs font-semibold hover:shadow-[0_0_16px_rgba(52,211,153,0.2)] active:scale-[0.98] transition-all duration-300"
        >
          开始使用
          <ArrowRight weight="bold" className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" />
        </a>
      </div>
    </motion.header>
  )
}
