/**
 * 小米 MiMo-V2.5-TTS API 调用封装
 */

export type TTSModel = 'mimo-v2.5-tts' | 'mimo-v2.5-tts-voicedesign' | 'mimo-v2.5-tts-voiceclone'

export interface TTSRequest {
  model: TTSModel
  text: string
  voice?: string
  voiceDescription?: string
  voiceAudio?: string // Base64 Data URL
  style?: string
  tags?: string
}

/**
 * 构建小米 TTS API 的 messages 数组
 */
export function buildMessages(req: TTSRequest): { messages: any[]; audio?: any } {
  const { model, text, voice, voiceDescription, voiceAudio, style, tags } = req

  let userContent = ''
  let assistantContent = text

  // 添加音频标签
  if (tags && tags.trim()) {
    assistantContent = `${tags}${text}`
  }

  if (model === 'mimo-v2.5-tts') {
    // 标准版：user 角色放风格描述，assistant 角色放合成文本
    if (style && style.trim()) {
      userContent = style
    }
  } else if (model === 'mimo-v2.5-tts-voicedesign') {
    // 音色设计版：user 角色放音色描述
    if (voiceDescription && voiceDescription.trim()) {
      userContent = voiceDescription
    }
  }
  // voiceclone 模型不需要 user 消息

  const messages: any[] = []
  if (userContent) {
    messages.push({ role: 'user', content: userContent })
  }
  messages.push({ role: 'assistant', content: assistantContent })

  // 构建 audio 参数
  const audio: any = { format: 'pcm16' }

  if (model === 'mimo-v2.5-tts' && voice) {
    audio.voice = voice
  } else if (model === 'mimo-v2.5-tts-voiceclone' && voiceAudio) {
    audio.voice = voiceAudio
  }

  return { messages, audio }
}
