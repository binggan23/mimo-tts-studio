import { NextRequest, NextResponse } from 'next/server'
import { readdirSync, readFileSync, writeFileSync, unlinkSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const PRESETS_DIR = join(process.cwd(), 'presets')

export interface VoicePreset {
  id: string
  name: string
  icon?: string
  voice: string
  style: string
  custom?: boolean
}

function ensureDir() {
  if (!existsSync(PRESETS_DIR)) {
    mkdirSync(PRESETS_DIR, { recursive: true })
  }
}

// GET — list all presets (built-in + custom)
export async function GET() {
  try {
    ensureDir()
    const files = readdirSync(PRESETS_DIR).filter(f => f.endsWith('.json'))
    const presets = files.map((file) => {
      const content = readFileSync(join(PRESETS_DIR, file), 'utf-8')
      const data = JSON.parse(content) as VoicePreset
      // Mark custom presets (those without icon field)
      if (!data.icon) data.custom = true
      return data
    })
    // Sort: built-in first, then custom
    presets.sort((a, b) => {
      if (a.custom && !b.custom) return 1
      if (!a.custom && b.custom) return -1
      return 0
    })
    return NextResponse.json(presets)
  } catch {
    return NextResponse.json([])
  }
}

// POST — save a custom preset
export async function POST(request: NextRequest) {
  try {
    ensureDir()
    const body = await request.json()

    if (!body.name || !body.voice || !body.style) {
      return NextResponse.json({ error: 'name, voice, style required' }, { status: 400 })
    }

    const id = `custom-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`
    const preset: VoicePreset = {
      id,
      name: body.name,
      voice: body.voice,
      style: body.style,
      custom: true,
    }

    writeFileSync(join(PRESETS_DIR, `${id}.json`), JSON.stringify(preset, null, 2), 'utf-8')
    return NextResponse.json(preset)
  } catch {
    return NextResponse.json({ error: 'save failed' }, { status: 500 })
  }
}

// DELETE — delete a preset
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    if (!id) {
      return NextResponse.json({ error: 'id required' }, { status: 400 })
    }

    const filePath = join(PRESETS_DIR, `${id}.json`)
    if (existsSync(filePath)) {
      unlinkSync(filePath)
    }
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'delete failed' }, { status: 500 })
  }
}
