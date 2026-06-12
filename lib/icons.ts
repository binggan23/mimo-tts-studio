import {
  Newspaper, BookOpen, Leaf, Microscope, Megaphone, Guitar, Baby,
  YinYang, MegaphoneSimple, Ghost, Crown, Flame, SpeakerSimpleHigh,
  Star,
} from '@phosphor-icons/react'

const iconMap: Record<string, any> = {
  Newspaper,
  BookOpen,
  Leaf,
  Microscope,
  Megaphone,
  Guitar,
  Baby,
  YinYang,
  MegaphoneSimple,
  Ghost,
  Crown,
  Flame,
  SpeakerSimpleHigh,
  Star,
}

export function getIcon(name: string | undefined): any {
  if (!name) return Star
  return iconMap[name] || Star
}
