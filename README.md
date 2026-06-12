<p align="right">
  <a href="README_us.md">🌐 English</a>
</p>

<h1 align="center">MiMo TTS Studio</h1>
<p align="center">
  基于小米 MiMo-V2.5-TTS 的 AI 语音合成工作室<br/>
  <sub>3 种模型 · 13 种导演级预设 · 音色设计与克隆</sub>
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

## 功能特性

<a id="features"></a>

### ![icon](public/icons/microphone.svg) 标准合成

9 种高保真音色，13 种导演级预设风格。通过自然语言或音频标签控制语调、情感与节奏。

| 音色 | 性别 | 特征 |
|:---|:---:|:---|
| ![icon](public/icons/candy.svg) 冰糖 | ♀ | 清甜明亮，活泼可爱 |
| ![icon](public/icons/blossom.svg) 茉莉 | ♀ | 温柔细腻，清新淡雅 |
| ![icon](public/icons/cup.svg) 苏打 | ♂ | 清爽自然，年轻活力 |
| ![icon](public/icons/tree.svg) 白桦 | ♂ | 沉稳厚重，专业权威 |
| ![icon](public/icons/business-woman.svg) 米娅 | ♀ | 优雅知性，温和亲切 |
| ![icon](public/icons/heart.svg) 克洛伊 | ♀ | 甜美温柔，情感丰富 |
| ![icon](public/icons/fire.svg) 米洛 | ♂ | 温暖磁性，亲和力强 |
| ![icon](public/icons/lightning.svg) 迪恩 | ♂ | 浑厚低沉，刚毅有力 |
| ![icon](public/icons/podcast.svg) 默认 | — | 通用音色，均衡自然 |

<a href="#quick-start"><strong>立即体验 →</strong></a>

---

### ![icon](public/icons/sparkle.svg) 音色设计

仅通过文字描述即可创造全新音色，无需任何音频样本。支持保存为可复用的自定义预设。

<a href="#quick-start"><strong>立即体验 →</strong></a>

---

### ![icon](public/icons/mask.svg) 音色克隆

上传几秒钟的任意音频（MP3、WAV、M4A，最大 10MB），MiMo 即可精准复刻该音色的个性化特征。

<a href="#quick-start"><strong>立即体验 →</strong></a>

---

## 导演级预设

每个预设都是一份电影级配音指导——定义了**角色**、**场景**和**表演方向**。

| 预设 | 说明 | 预设 | 说明 |
|:---|:---|:---|:---|
| ![icon](public/icons/newspaper.svg) 新闻播报 | 沉稳权威的主播腔 | ![icon](public/icons/book-open.svg) 故事朗读 | 引人入胜的叙事节奏 |
| ![icon](public/icons/ghost.svg) 恐怖小说 | 令人毛骨悚然的张力 | ![icon](public/icons/film.svg) 纪录片 | 沉稳克制的旁白 |
| ![icon](public/icons/superhero.svg) 正派角色 | 英雄气概 | ![icon](public/icons/villain.svg) 反派角色 | 反派低语 |
| ![icon](public/icons/podcast.svg) 广告配音 | 精致商业配音 | ![icon](public/icons/scroll.svg) 诗歌朗诵 | 富有韵律的诗意表达 |
| ![icon](public/icons/laptop.svg) 科技评测 | 犀利活力的科技解说 | ![icon](public/icons/teddy.svg) 儿童读物 | 温暖活泼的角色演绎 |
| ![icon](public/icons/herb.svg) 平静舒缓 | 冥想般的舒缓语调 | ![icon](public/icons/sun.svg) 温暖治愈 | 如毯子般温暖的陪伴 |
| ![icon](public/icons/book-open.svg) 旁白叙述 | 中性清晰的第三人称 | | |

---

## 技术栈

| 层级 | 技术 | 说明 |
|:---:|:---|:---|
| **Framework** | Next.js 16 (App Router) | React 19 · Server Components · API Routes |
| **Styling** | Tailwind CSS v4 | Utility-first · CSS Variables · Dark-first |
| **Animation** | Motion v12 | Scroll-triggered · Spring physics |
| **Icons** | Phosphor Icons v2 | Ultra-light, precise line icons |
| **Typography** | Geist Sans + Mono | Vercel premium typeface |
| **AI Engine** | Xiaomi MiMo-V2.5-TTS | 3 models · 24kHz PCM16 WAV |

---

<a id="quick-start"></a>

## 快速开始

> 无需训练，无需复杂配置。克隆、配置、启动。

### 1. 克隆仓库

```bash
git clone https://github.com/binggan23/mimo-tts-studio.git
cd mimo-tts-studio/mimotts-app
```

### 2. 安装依赖

```bash
npm install
```

### 3. 配置 API 密钥

在项目根目录创建 `config.json`：

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

| 字段 | 类型 | 说明 |
|:---|:---:|:---|
| `TTSapikey` | string | MiMo API 密钥 |
| `TTSurl` | string | API 端点（已提供默认值） |
| `TTSmodels` | string[] | 可用模型 ID 列表 |

> ⚠️给其他开发者看的: `config.json` 已被 gitignore，切勿将 API 密钥提交到公开仓库。

### 4. 启动

```bash
npm run dev      # 开发模式 → localhost:3000
npm run build    # 生产构建
npm run start    # 生产服务器
npm run lint     # 代码检查
```

---

## 项目结构

```
mimotts-app/
├── app/
│   ├── page.tsx              # 首页
│   ├── standard/page.tsx     # 标准合成
│   ├── design/page.tsx       # 音色设计
│   ├── clone/page.tsx        # 音色克隆
│   └── api/
│       ├── tts/route.ts      # TTS 代理接口
│       └── presets/route.ts  # 预设管理接口
├── components/               # React 组件
├── lib/                      # 工具库
├── presets/                  # 13 个内置预设
├── config.json               # API 密钥 (gitignored)
└── package.json
```

---

## 接口文档

### `POST /api/tts` — 语音合成

**请求体：**

```json
{
  "model": "mimo-v2.5-tts",
  "text": "你好，这是一段测试文本。",
  "voice": "Chloe",
  "style": "温暖友好的语调",
  "tags": "[happy][gentle]"
}
```

| 参数 | 必填 | 说明 |
|:---|:---:|:---|
| `model` | ✅ | 模型标识 |
| `text` | ✅ | 待合成文本 |
| `voice` | ⚡ | 音色名称（标准模式） |
| `voiceDescription` | ⚡ | 音色描述（设计模式） |
| `voiceAudio` | ⚡ | Base64 音频（克隆模式） |
| `style` | — | 风格指令 |
| `tags` | — | 音频标签 |

> **响应：** WAV 音频文件（PCM16, 24kHz, 单声道）
> **自动分段：** 超过 300 字符的文本自动按句分割，以 200ms 静音间隔拼接。

### `GET /api/presets` — 获取所有预设

### `POST /api/presets` — 保存预设

### `DELETE /api/presets?id=<id>` — 删除预设

---

## 音频标签速查

| 类别 | 标签 |
|:---|:---|
| 情感 | `[happy]` `[sad]` `[angry]` `[scared]` `[surprised]` `[shy]` `[confident]` |
| 语调 | `[gentle]` `[cold]` `[lively]` `[elegant]` `[dark]` `[powerful]` |
| 方言 | `[northeast]` `[sichuan]` `[henan]` `[cantonese]` `[taiwanese]` |
| 动作 | `[breathing]` `[laughing]` `[sobbing]` `[coughing]` `[sighing]` |

---

## 许可证

基于 [MIT License](LICENSE) 开源

<p align="center">
  <sub>Made with ♥ by <a href="https://github.com/binggan23">binggan23</a> · Powered by <a href="https://platform.xiaomimimo.com/">Xiaomi MiMo-V2.5-TTS</a> · Built with <a href="https://nextjs.org/">Next.js</a> + <a href="https://tailwindcss.com/">Tailwind CSS</a></sub>
</p>
