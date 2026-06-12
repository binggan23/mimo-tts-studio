import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

export interface Config {
  TTSapikey: string
  TTSurl: string
  TTSmodels: string[]
  apikey: string
  url: string
  models: string[]
}

const DEFAULT_CONFIG: Config = {
  TTSapikey: '',
  TTSurl: 'https://api.xiaomimimo.com/v1/chat/completions',
  TTSmodels: [
    'mimo-v2.5-tts',
    'mimo-v2.5-tts-voicedesign',
    'mimo-v2.5-tts-voiceclone',
  ],
  apikey: '',
  url: '',
  models: [],
}

let cached: Config | null = null

export function getConfig(): Config {
  if (cached) return cached

  const configPath = join(process.cwd(), 'config.json')

  if (!existsSync(configPath)) {
    // Auto-generate template
    writeFileSync(configPath, JSON.stringify(DEFAULT_CONFIG, null, 2), 'utf-8')
    cached = DEFAULT_CONFIG
    return cached
  }

  const raw = readFileSync(configPath, 'utf-8')
  const parsed = JSON.parse(raw) as Config
  cached = parsed
  return cached
}
