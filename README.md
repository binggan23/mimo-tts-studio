# MiMo TTS Studio

> AI voice synthesis tool powered by Xiaomi MiMo-V2.5-TTS. Turn text into natural, expressive speech with 3 models, 13 director-level presets, and voice design/clone capabilities.

## Features

- **3 Synthesis Modes** — Standard (9 preset voices), Voice Design (create voices from text), Voice Clone (replicate any voice from audio)
- **13 Director-Level Presets** — News, storytelling, horror, documentary, hero/villain characters, voiceover, and more
- **Natural Language Style Control** — Describe tone, emotion, rhythm in plain language
- **Audio Tag Control** — Fine-grained tags for emotion, dialect, speed, breathing, laughter
- **Director Mode** — Define role, scene, and direction for cinematic voice performances
- **Voice Design** — Create entirely new voices from text descriptions, save as custom presets
- **Voice Clone** — Upload a few seconds of audio to clone any voice
- **Custom Presets** — Save and manage your voice designs as reusable JSON presets
- **Auto-Segmentation** — Text over 300 characters is automatically split and stitched

## Quick Start

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/mimo-tts-studio.git
cd mimo-tts-studio

# Install dependencies
npm install

# Configure your API key
cp config.json config.json.example
# Edit config.json and add your MiMo API key

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Configuration

Edit `config.json` in the project root:

```json
{
  "TTSapikey": "your-mimo-api-key",
  "TTSurl": "https://api.xiaomimimo.com/v1/chat/completions",
  "TTSmodels": [
    "mimo-v2.5-tts",
    "mimo-v2.5-tts-voicedesign",
    "mimo-v2.5-tts-voiceclone"
  ],
  "apikey": "",
  "url": "",
  "models": []
}
```

> **Security**: `config.json` is gitignored. Never commit API keys to public repositories.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Animation | Motion (Framer Motion) |
| Icons | Phosphor Icons |
| API | Xiaomi MiMo-V2.5-TTS |
| Font | Geist Sans + Geist Mono |

## Project Structure

```
mimotts-app/
├── app/
│   ├── page.tsx              # Landing page
│   ├── standard/             # Standard synthesis tool
│   ├── design/               # Voice design tool
│   ├── clone/                # Voice clone tool
│   └── api/
│       ├── tts/              # TTS proxy API
│       └── presets/          # Preset CRUD API
├── components/               # React components
├── lib/                      # Utilities, config, types
├── presets/                  # Voice preset JSON files
├── config.json               # API keys (gitignored)
└── README.md
```

## API Reference

This project uses the [Xiaomi MiMo-V2.5-TTS API](https://platform.xiaomimimo.com/).

## License

MIT
