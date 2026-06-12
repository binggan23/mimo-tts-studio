/**
 * 文本分段工具
 * 小米 TTS API 每次请求限制 300 字符
 * 按句号、问号、感叹号等标点分段
 */

const MAX_CHARS = 300

/**
 * 智能分段：按标点断句，每段不超过 MAX_CHARS
 */
export function splitText(text: string): string[] {
  if (text.length <= MAX_CHARS) {
    return [text]
  }

  const segments: string[] = []
  let remaining = text

  while (remaining.length > 0) {
    if (remaining.length <= MAX_CHARS) {
      segments.push(remaining)
      break
    }

    // 在 MAX_CHARS 范围内找最后一个断句点
    const slice = remaining.slice(0, MAX_CHARS)
    let breakPoint = -1

    // 优先按句号、问号、感叹号、分号断句
    const primaryBreaks = ['。', '？', '！', '；', '.', '?', '!', ';']
    for (const ch of primaryBreaks) {
      const idx = slice.lastIndexOf(ch)
      if (idx > breakPoint) {
        breakPoint = idx
      }
    }

    // 如果找不到主要断句点，尝试按逗号、顿号断句
    if (breakPoint === -1) {
      const secondaryBreaks = ['，', '、', '：', ',', ':', ' ']
      for (const ch of secondaryBreaks) {
        const idx = slice.lastIndexOf(ch)
        if (idx > breakPoint) {
          breakPoint = idx
        }
      }
    }

    // 实在找不到标点，就硬切
    if (breakPoint === -1) {
      breakPoint = MAX_CHARS - 1
    }

    // 包含断句标点
    segments.push(remaining.slice(0, breakPoint + 1))
    remaining = remaining.slice(breakPoint + 1)
  }

  return segments.filter(s => s.trim().length > 0)
}
