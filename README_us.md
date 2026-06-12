<p align="right">
  <a href="README.md">🌐 中文版</a>
</p>

<h1 align="center">MiMo TTS Studio</h1>
<p align="center">
  AI voice synthesis studio powered by Xiaomi MiMo-V2.5-TTS<br/>
  <sub>3 models · 13 director-level presets · voice design &amp; clone</sub>
</p>

<p align="center">
  <a href="https://github.com/binggan23/mimo-tts-studio/stargazers"><img src="https://img.shields.io/github/stars/binggan23/mimo-tts-studio?style=flat-square&color=fbbf24&labelColor=18181b" alt="Stars" /></a>
  <a href="https://github.com/binggan23/mimo-tts-studio/network/members"><img src="https://img.shields.io/github/forks/binggan23/mimo-tts-studio?style=flat-square&color=8b5cf6&labelColor=18181b" alt="Forks" /></a>
  <a href="https://github.com/binggan23/mimo-tts-studio/blob/main/LICENSE"><img src="https://img.shields.io/github/license/binggan23/mimo-tts-studio?style=flat-square&color=06b6d4&labelColor=18181b" alt="License" /></a>
  <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&labelColor=18181b" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&labelColor=18181b" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind-v4-06b6d4?style=flat-square&labelColor=18181b" alt="Tailwind" />
</p>

<br/>

![preview](public/preview.png)

<br/>

---

## Features

<a id="features"></a>

### ![icon](public/icons/microphone.svg) Standard Synthesis

9 high-fidelity voices with 13 director-level style presets. Control tone, emotion, and rhythm using natural language or fine-grained audio tags.

| Voice | Gender | Feature |
|:---|:---:|:---|
| ![icon](public/icons/candy.svg) Bing Tang | ♀ | Sweet, bright, lively |
| ![icon](public/icons/blossom.svg) Mo Li | ♀ | Gentle, delicate, fresh |
| ![icon](public/icons/cup.svg) Su Da | ♂ | Fresh, natural, young |
| ![icon](public/icons/tree.svg) Bai Hua | ♂ | Steady, authoritative |
| ![icon](public/icons/business-woman.svg) Mia | ♀ | Elegant, intellectual |
| ![icon](public/icons/heart.svg) Chloe | ♀ | Sweet, emotional |
| ![icon](public/icons/fire.svg) Milo | ♂ | Warm, magnetic |
| ![icon](public/icons/lightning.svg) Dean | ♂ | Deep, powerful |
| ![icon](public/icons/podcast.svg) Default | — | Universal, balanced |

<a href="#quick-start"><strong>Try it now →</strong></a>

---

### ![icon](public/icons/sparkle.svg) Voice Design

Create entirely new voices from text descriptions alone — no audio samples needed. Save your designs as reusable custom presets.

<a href="#quick-start"><strong>Try it now →</strong></a>

---

### ![icon](public/icons/mask.svg) Voice Clone

Upload a few seconds of any audio (MP3, WAV, M4A — max 10MB). MiMo replicates the voice's unique characteristics with remarkable accuracy.

<a href="#quick-start"><strong>Try it now →</strong></a>

---

## Director-Level Presets

Each preset defines the **role**, **scene**, and **performance direction** for truly expressive synthesis.

| Preset | Description | Preset | Description |
|:---|:---|:---|:---|
| ![icon](public/icons/newspaper.svg) News Broadcast | Steady, authoritative anchor | ![icon](public/icons/book-open.svg) Storytelling | Engaging narrative |
| ![icon](public/icons/ghost.svg) Horror Fiction | Chilling tension | ![icon](public/icons/film.svg) Documentary | Measured narration |
| ![icon](public/icons/superhero.svg) Hero | Heroic resolve | ![icon](public/icons/villain.svg) Villain | Menacing whisper |
| ![icon](public/icons/podcast.svg) Voiceover | Commercial delivery | ![icon](public/icons/scroll.svg) Poetry | Lyrical cadence |
| ![icon](public/icons/laptop.svg) Tech Review | Sharp analysis | ![icon](public/icons/teddy.svg) Children's Book | Warm, playful |
| ![icon](public/icons/herb.svg) Calm | Soothing tones | ![icon](public/icons/sun.svg) Warm | Soft comfort |
| ![icon](public/icons/book-open.svg) Narrator | Neutral third-person | | |

---

## Tech Stack

| Layer | Technology | Description |
|:---:|:---|:---|
| **Framework** | Next.js 16 (App Router) | React 19 · Server Components · API Routes |
| **Styling** | Tailwind CSS v4 | Utility-first · CSS Variables · Dark-first |
| **Animation** | Motion v12 | Scroll-triggered · Spring physics |
| **Icons** | Phosphor Icons v2 | Ultra-light, precise line icons |
| **Typography** | Geist Sans + Mono | Vercel premium typeface |
| **AI Engine** | Xiaomi MiMo-V2.5-TTS | 3 models · 24kHz PCM16 WAV |

---

<a id="quick-start"></a>

## Quick Start

> No training, no complex setup. Just clone, configure, and go.

### 1. Clone

```bash
git clone https://github.com/binggan23/mimo-tts-studio.git
cd mimo-tts-studio/mimotts-app
```

### 2. Install

```bash
npm install
```

### 3. Configure

Create `config.json` in the project root:

```json
{
  "TTSapikey": "your-mimo-api-key",
  "TTSurl": "https://api.xiaomimimo.com/v1/chat/completions",
  "TTSmodels": [
    "mimo-v2.5-tts",
    "mimo-v2.5-tts-voicedesign",
    "mimo-v2.5-tts-voiceclone"
  ]
}
```

| Field | Type | Description |
|:---|:---:|:---|
| `TTSapikey` | string | Your MiMo API key |
| `TTSurl` | string | API endpoint (default provided) |
| `TTSmodels` | string[] | Available model IDs |

> ⚠️ For other developers:`config.json` is gitignored. Never commit API keys to public repositories.

### 4. Run

```bash
npm run dev      # Development → localhost:3000
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint
```

---

## Project Structure

```
mimotts-app/
├── app/
│   ├── page.tsx              # Landing page
│   ├── standard/page.tsx     # Standard synthesis
│   ├── design/page.tsx       # Voice design
│   ├── clone/page.tsx        # Voice clone
│   └── api/
│       ├── tts/route.ts      # TTS proxy API
│       └── presets/route.ts  # Preset CRUD API
├── components/               # React components
├── lib/                      # Utilities
├── presets/                  # 13 built-in presets
├── config.json               # API keys (gitignored)
└── package.json
```

---

## API Reference

### `POST /api/tts` — Synthesize Speech

**Request body:**

```json
{
  "model": "mimo-v2.5-tts",
  "text": "Hello, this is a test.",
  "voice": "Chloe",
  "style": "Warm and friendly tone",
  "tags": "[happy][gentle]"
}
```

| Parameter | Required | Description |
|:---|:---:|:---|
| `model` | ✅ | Model ID |
| `text` | ✅ | Text to synthesize |
| `voice` | ⚡ | Voice name (standard mode) |
| `voiceDescription` | ⚡ | Voice description (design mode) |
| `voiceAudio` | ⚡ | Base64 audio (clone mode) |
| `style` | — | Style direction |
| `tags` | — | Audio tags |

> **Response:** WAV audio file (PCM16, 24kHz, mono)
> **Auto-segmentation:** Text > 300 chars is split at sentence boundaries with 200ms silence gaps.

### `GET /api/presets` — List All Presets

### `POST /api/presets` — Save Preset

### `DELETE /api/presets?id=<id>` — Delete Preset

---

## Audio Tag Reference

| Category | Tags |
|:---|:---|
| Emotions | `[happy]` `[sad]` `[angry]` `[scared]` `[surprised]` `[shy]` `[confident]` |
| Tone | `[gentle]` `[cold]` `[lively]` `[elegant]` `[dark]` `[powerful]` |
| Dialects | `[northeast]` `[sichuan]` `[henan]` `[cantonese]` `[taiwanese]` |
| Actions | `[breathing]` `[laughing]` `[sobbing]` `[coughing]` `[sighing]` |

---

## License

Licensed under the [MIT License](LICENSE)

<p align="center">
  <sub>Made with ♥ by <a href="https://github.com/binggan23">binggan23</a> · Powered by <a href="https://platform.xiaomimimo.com/">Xiaomi MiMo-V2.5-TTS</a> · Built with <a href="https://nextjs.org/">Next.js</a> + <a href="https://tailwindcss.com/">Tailwind CSS</a></sub>
</p>
