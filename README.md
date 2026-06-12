<div align="center">

<!-- ═══════════════════════════════════════════════════════════════════ -->
<!--  MiMo TTS Studio · Premium README                                 -->
<!--  Vibe: Ethereal Glass · Layout: Z-Axis Cascade                    -->
<!-- ═══════════════════════════════════════════════════════════════════ -->

<style>
  :root {
    --accent: #10b981;
    --accent-dim: #10b98130;
    --accent-glow: #10b98115;
    --bg-deep: #050505;
    --bg-card: #0a0a0a;
    --bg-card-inner: #0f0f0f;
    --border: #ffffff0d;
    --border-hover: #ffffff1a;
    --text-primary: #fafafa;
    --text-secondary: #a1a1aa;
    --text-tertiary: #52525b;
    --radius-lg: 20px;
    --radius-md: 14px;
    --radius-sm: 10px;
    --radius-xs: 8px;
    --font-body: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  }

  .mimo-hero {
    position: relative;
    padding: 80px 24px 60px;
    margin: 0 -20px;
    overflow: hidden;
  }

  .mimo-hero::before {
    content: '';
    position: absolute;
    top: -200px;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 800px;
    background: radial-gradient(ellipse, #10b98112 0%, transparent 70%);
    pointer-events: none;
  }

  .mimo-hero::after {
    content: '';
    position: absolute;
    top: 300px;
    right: -200px;
    width: 600px;
    height: 600px;
    background: radial-gradient(ellipse, #8b5cf610 0%, transparent 70%);
    pointer-events: none;
  }

  .mimo-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    border-radius: 999px;
    background: var(--accent-glow);
    border: 1px solid var(--accent-dim);
    font-size: 12px;
    font-weight: 500;
    color: var(--accent);
    letter-spacing: 0.05em;
    font-family: var(--font-body);
  }

  .mimo-badge .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent);
    animation: mimo-pulse 2s ease-in-out infinite;
  }

  @keyframes mimo-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  .mimo-title {
    margin: 32px 0 0;
    font-size: clamp(40px, 6vw, 72px);
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 1.05;
    color: var(--text-primary);
    font-family: var(--font-body);
  }

  .mimo-title .accent {
    background: linear-gradient(135deg, #10b981, #34d399);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .mimo-subtitle {
    margin: 20px auto 0;
    font-size: 17px;
    color: var(--text-secondary);
    line-height: 1.7;
    max-width: 540px;
    font-family: var(--font-body);
  }

  .mimo-subtitle .zh {
    color: var(--text-tertiary);
    font-size: 14px;
  }

  .mimo-badges {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 32px;
  }

  .mimo-badges img {
    height: 22px;
  }

  /* ── Preview Section ── */
  .mimo-preview {
    margin: 48px -20px 0;
    position: relative;
  }

  .mimo-preview-frame {
    position: relative;
    border-radius: var(--radius-lg);
    overflow: hidden;
    border: 1px solid var(--border);
    background: var(--bg-card);
    box-shadow: 0 0 0 1px var(--border), 0 40px 80px -20px rgba(0,0,0,0.8);
  }

  .mimo-preview-frame img {
    display: block;
    width: 100%;
    height: auto;
  }

  /* ── Section System ── */
  .mimo-section {
    padding: 72px 0;
    position: relative;
  }

  .mimo-section + .mimo-section {
    border-top: 1px solid var(--border);
  }

  .mimo-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 5px 14px;
    border-radius: 999px;
    background: var(--accent-glow);
    border: 1px solid var(--accent-dim);
    font-size: 11px;
    font-weight: 600;
    color: var(--accent);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-family: var(--font-body);
    margin-bottom: 20px;
  }

  .mimo-section-title {
    margin: 0 0 12px;
    font-size: clamp(28px, 4vw, 44px);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.1;
    color: var(--text-primary);
    font-family: var(--font-body);
  }

  .mimo-section-desc {
    font-size: 16px;
    color: var(--text-secondary);
    line-height: 1.7;
    max-width: 600px;
    font-family: var(--font-body);
  }

  .mimo-section-desc .zh {
    display: block;
    color: var(--text-tertiary);
    font-size: 13px;
    margin-top: 4px;
  }

  /* ── Double-Bezel Cards ── */
  .mimo-card-outer {
    padding: 2px;
    border-radius: var(--radius-lg);
    background: var(--border);
    transition: background 0.5s cubic-bezier(0.32,0.72,0,1);
  }

  .mimo-card-outer:hover {
    background: var(--border-hover);
  }

  .mimo-card-inner {
    background: var(--bg-card-inner);
    border-radius: calc(var(--radius-lg) - 2px);
    padding: 28px;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);
  }

  /* ── Feature Cards ── */
  .mimo-features-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    .mimo-features-grid {
      grid-template-columns: 1fr;
    }
  }

  .mimo-feature-card .mimo-card-inner {
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-height: 200px;
  }

  .mimo-feature-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: var(--accent-glow);
    border: 1px solid var(--accent-dim);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }

  .mimo-feature-title {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    color: var(--text-primary);
    letter-spacing: -0.02em;
    font-family: var(--font-body);
  }

  .mimo-feature-desc {
    margin: 0;
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.7;
    flex: 1;
    font-family: var(--font-body);
  }

  .mimo-feature-desc .zh {
    display: block;
    color: var(--text-tertiary);
    font-size: 12px;
    margin-top: 4px;
  }

  .mimo-feature-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 500;
    color: var(--accent);
    text-decoration: none;
    font-family: var(--font-body);
    transition: opacity 0.3s;
  }

  .mimo-feature-link:hover {
    opacity: 0.8;
  }

  /* ── Voice Table ── */
  .mimo-voice-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin-top: 24px;
    font-family: var(--font-body);
  }

  .mimo-voice-table th {
    padding: 10px 16px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-tertiary);
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    border-bottom: 1px solid var(--border);
  }

  .mimo-voice-table td {
    padding: 12px 16px;
    font-size: 14px;
    color: var(--text-secondary);
    border-bottom: 1px solid var(--border);
    vertical-align: middle;
  }

  .mimo-voice-table tr:last-child td {
    border-bottom: none;
  }

  .mimo-voice-table tr:hover td {
    background: rgba(255,255,255,0.02);
  }

  .mimo-voice-name {
    font-weight: 600;
    color: var(--text-primary);
  }

  .mimo-voice-gender {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 6px;
    font-size: 12px;
  }

  .mimo-voice-gender.f {
    background: #ec489920;
    color: #ec4899;
  }

  .mimo-voice-gender.m {
    background: #3b82f620;
    color: #3b82f6;
  }

  .mimo-voice-gender.d {
    background: #a1a1aa20;
    color: #a1a1aa;
  }

  /* ── Preset Grid ── */
  .mimo-presets-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 12px;
    margin-top: 32px;
  }

  @media (max-width: 768px) {
    .mimo-presets-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 480px) {
    .mimo-presets-grid {
      grid-template-columns: 1fr;
    }
  }

  .mimo-preset-card {
    padding: 20px;
    border-radius: var(--radius-md);
    background: var(--bg-card-inner);
    border: 1px solid var(--border);
    transition: border-color 0.4s cubic-bezier(0.32,0.72,0,1), background 0.4s cubic-bezier(0.32,0.72,0,1);
  }

  .mimo-preset-card:hover {
    border-color: var(--border-hover);
    background: #141414;
  }

  .mimo-preset-emoji {
    font-size: 28px;
    margin-bottom: 12px;
    display: block;
  }

  .mimo-preset-name {
    margin: 0 0 4px;
    font-size: 15px;
    font-weight: 600;
    color: var(--text-primary);
    font-family: var(--font-body);
  }

  .mimo-preset-desc {
    margin: 0;
    font-size: 12px;
    color: var(--text-tertiary);
    line-height: 1.6;
    font-family: var(--font-body);
  }

  /* ── Tech Stack ── */
  .mimo-tech-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-top: 32px;
  }

  @media (max-width: 768px) {
    .mimo-tech-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 480px) {
    .mimo-tech-grid {
      grid-template-columns: 1fr;
    }
  }

  .mimo-tech-item {
    padding: 20px;
    border-radius: var(--radius-md);
    background: var(--bg-card-inner);
    border: 1px solid var(--border);
    text-align: center;
    transition: border-color 0.4s cubic-bezier(0.32,0.72,0,1);
  }

  .mimo-tech-item:hover {
    border-color: var(--border-hover);
  }

  .mimo-tech-name {
    margin: 0 0 4px;
    font-size: 15px;
    font-weight: 600;
    color: var(--text-primary);
    font-family: var(--font-body);
  }

  .mimo-tech-ver {
    margin: 0 0 8px;
    font-size: 12px;
    color: var(--accent);
    font-family: var(--font-body);
  }

  .mimo-tech-desc {
    margin: 0;
    font-size: 12px;
    color: var(--text-tertiary);
    line-height: 1.5;
    font-family: var(--font-body);
  }

  /* ── Code Block ── */
  .mimo-code-block {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    overflow: hidden;
    margin: 20px 0;
  }

  .mimo-code-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border);
    background: rgba(255,255,255,0.02);
  }

  .mimo-code-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .mimo-code-dot.r { background: #ef4444; }
  .mimo-code-dot.y { background: #eab308; }
  .mimo-code-dot.g { background: #22c55e; }

  .mimo-code-title {
    margin-left: 8px;
    font-size: 12px;
    color: var(--text-tertiary);
    font-family: var(--font-body);
  }

  .mimo-code-block pre {
    margin: 0;
    padding: 20px;
    overflow-x: auto;
    font-size: 13px;
    line-height: 1.7;
    color: var(--text-secondary);
    font-family: 'Geist Mono', 'SF Mono', 'Fira Code', monospace;
  }

  .mimo-code-block code {
    font-family: inherit;
  }

  /* ── API Method Badge ── */
  .mimo-method {
    display: inline-flex;
    align-items: center;
    padding: 4px 12px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 700;
    font-family: 'Geist Mono', monospace;
    letter-spacing: 0.05em;
  }

  .mimo-method.post {
    background: #10b98120;
    color: #10b981;
    border: 1px solid #10b98130;
  }

  .mimo-method.get {
    background: #3b82f620;
    color: #3b82f6;
    border: 1px solid #3b82f630;
  }

  .mimo-method.delete {
    background: #ef444420;
    color: #ef4444;
    border: 1px solid #ef444430;
  }

  /* ── Tag Chips ── */
  .mimo-tag {
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 12px;
    font-family: 'Geist Mono', monospace;
    color: var(--text-secondary);
    background: var(--bg-card-inner);
    border: 1px solid var(--border);
    margin: 2px;
  }

  /* ── Tag Categories ── */
  .mimo-tag-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 24px;
  }

  @media (max-width: 480px) {
    .mimo-tag-grid {
      grid-template-columns: 1fr;
    }
  }

  .mimo-tag-category {
    padding: 20px;
    border-radius: var(--radius-md);
    background: var(--bg-card-inner);
    border: 1px solid var(--border);
  }

  .mimo-tag-category-title {
    margin: 0 0 12px;
    font-size: 14px;
    font-weight: 600;
    color: var(--text-primary);
    font-family: var(--font-body);
  }

  /* ── Config Table ── */
  .mimo-config-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin: 20px 0;
    font-family: var(--font-body);
  }

  .mimo-config-table th {
    padding: 10px 16px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-tertiary);
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    border-bottom: 1px solid var(--border);
  }

  .mimo-config-table td {
    padding: 10px 16px;
    font-size: 13px;
    color: var(--text-secondary);
    border-bottom: 1px solid var(--border);
  }

  .mimo-config-table td code {
    padding: 2px 8px;
    border-radius: 4px;
    background: rgba(255,255,255,0.05);
    font-family: 'Geist Mono', monospace;
    font-size: 12px;
    color: var(--accent);
  }

  /* ── CTA Button ── */
  .mimo-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 28px;
    border-radius: 999px;
    background: var(--accent);
    color: #000;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    font-family: var(--font-body);
    transition: box-shadow 0.5s cubic-bezier(0.32,0.72,0,1), transform 0.3s cubic-bezier(0.32,0.72,0,1);
  }

  .mimo-cta:hover {
    box-shadow: 0 0 40px rgba(16,185,129,0.3);
    transform: translateY(-1px);
  }

  .mimo-cta-icon {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    transition: transform 0.3s cubic-bezier(0.32,0.72,0,1);
  }

  .mimo-cta:hover .mimo-cta-icon {
    transform: translate(2px, -2px);
  }

  /* ── Project Tree ── */
  .mimo-tree {
    margin-top: 24px;
    padding: 24px;
    border-radius: var(--radius-md);
    background: var(--bg-card);
    border: 1px solid var(--border);
    font-family: 'Geist Mono', monospace;
    font-size: 13px;
    line-height: 1.8;
    color: var(--text-secondary);
    overflow-x: auto;
  }

  .mimo-tree .dir { color: var(--accent); font-weight: 600; }
  .mimo-tree .file { color: var(--text-secondary); }
  .mimo-tree .comment { color: var(--text-tertiary); }

  /* ── Alert Box ── */
  .mimo-alert {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 16px 20px;
    border-radius: var(--radius-sm);
    margin: 16px 0;
    font-size: 13px;
    line-height: 1.6;
    font-family: var(--font-body);
  }

  .mimo-alert.warn {
    background: #eab30810;
    border: 1px solid #eab30820;
    color: #eab308;
  }

  .mimo-alert.info {
    background: #3b82f610;
    border: 1px solid #3b82f620;
    color: #93c5fd;
  }

  .mimo-alert-icon {
    font-size: 16px;
    flex-shrink: 0;
    margin-top: 1px;
  }

  /* ── Divider ── */
  .mimo-divider {
    height: 1px;
    background: var(--border);
    margin: 0;
    border: none;
  }

  /* ── Footer ── */
  .mimo-footer {
    padding: 48px 0 32px;
    text-align: center;
    border-top: 1px solid var(--border);
    margin-top: 0;
  }

  .mimo-footer-text {
    margin: 0;
    font-size: 13px;
    color: var(--text-tertiary);
    line-height: 1.8;
    font-family: var(--font-body);
  }

  .mimo-footer-text a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s;
  }

  .mimo-footer-text a:hover {
    color: var(--accent);
  }

  .mimo-footer-heart {
    color: #ef4444;
  }
</style>

<!-- ═══════════════════════════════════════════════════════════════════ -->
<!--                         HERO                                       -->
<!-- ═══════════════════════════════════════════════════════════════════ -->

<div class="mimo-hero">

  <div class="mimo-badge">
    <span class="dot"></span>
    Powered by Xiaomi MiMo-V2.5-TTS
  </div>

  <h1 class="mimo-title">
    <span class="accent">Text-Driven</span><br/>Voice Engine
  </h1>

  <p class="mimo-subtitle">
    AI voice synthesis studio — 3 models, 13 director-level presets, voice design &amp; clone.<br/>
    <span class="zh">AI 语音合成工作室 — 3 种模型、13 种导演级预设、音色设计与克隆。</span>
  </p>

  <div class="mimo-badges">
    <a href="https://github.com/binggan23/mimo-tts-studio/stargazers"><img src="https://img.shields.io/github/stars/binggan23/mimo-tts-studio?style=flat-square&color=fbbf24&labelColor=18181b" alt="Stars" /></a>
    <a href="https://github.com/binggan23/mimo-tts-studio/network/members"><img src="https://img.shields.io/github/forks/binggan23/mimo-tts-studio?style=flat-square&color=8b5cf6&labelColor=18181b" alt="Forks" /></a>
    <a href="https://github.com/binggan23/mimo-tts-studio/blob/main/LICENSE"><img src="https://img.shields.io/github/license/binggan23/mimo-tts-studio?style=flat-square&color=06b6d4&labelColor=18181b" alt="License" /></a>
    <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&labelColor=18181b" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&labelColor=18181b" alt="React" />
    <img src="https://img.shields.io/badge/Tailwind-v4-06b6d4?style=flat-square&labelColor=18181b" alt="Tailwind" />
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════════════ -->
<!--                    PREVIEW SCREENSHOT                              -->
<!-- ═══════════════════════════════════════════════════════════════════ -->

<div class="mimo-preview">
  <div class="mimo-preview-frame">
    <img src="https://raw.githubusercontent.com/binggan23/mimo-tts-studio/main/mimotts-app/public/preview.png" alt="MiMo TTS Studio Preview" />
  </div>
</div>

</div>

<hr class="mimo-divider" />

<!-- ═══════════════════════════════════════════════════════════════════ -->
<!--                    FEATURES                                       -->
<!-- ═══════════════════════════════════════════════════════════════════ -->

<div class="mimo-section" align="center">

<div class="mimo-eyebrow">✦ Features</div>

<h2 class="mimo-section-title" style="text-align:center;">Three Modes, Infinite Voices</h2>

<p class="mimo-section-desc" style="text-align:center; margin: 0 auto;">
  Each mode is purpose-built for a different creation scenario.
  <span class="zh">每种模式专为不同的创作场景设计。</span>
</p>

<div class="mimo-features-grid" style="text-align: left;">

  <!-- Standard Synthesis — Large Card -->
  <div class="mimo-card-outer mimo-feature-card" style="grid-row: span 2;">
    <div class="mimo-card-inner">
      <div class="mimo-feature-icon">🎤</div>
      <h3 class="mimo-feature-title">Standard Synthesis / 标准合成</h3>
      <p class="mimo-feature-desc">
        9 high-fidelity voices with 13 director-level style presets. Control tone, emotion, and rhythm using natural language or fine-grained audio tags.
        <span class="zh">9 种高保真音色，13 种导演级预设风格。通过自然语言或音频标签控制语调、情感与节奏。</span>
      </p>

      <!-- Voice Table -->
      <div style="overflow-x: auto;">
        <table class="mimo-voice-table">
          <thead>
            <tr>
              <th>Voice</th>
              <th></th>
              <th>Feature / 特征</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="mimo-voice-name">🍬 冰糖</span></td>
              <td><span class="mimo-voice-gender f">♀</span></td>
              <td>Sweet, bright, lively / 清甜明亮</td>
            </tr>
            <tr>
              <td><span class="mimo-voice-name">🌸 茉莉</span></td>
              <td><span class="mimo-voice-gender f">♀</span></td>
              <td>Gentle, delicate, fresh / 温柔细腻</td>
            </tr>
            <tr>
              <td><span class="mimo-voice-name">🥤 苏打</span></td>
              <td><span class="mimo-voice-gender m">♂</span></td>
              <td>Fresh, natural, young / 清爽自然</td>
            </tr>
            <tr>
              <td><span class="mimo-voice-name">🌲 白桦</span></td>
              <td><span class="mimo-voice-gender m">♂</span></td>
              <td>Steady, authoritative / 沉稳权威</td>
            </tr>
            <tr>
              <td><span class="mimo-voice-name">👩‍💼 米娅</span></td>
              <td><span class="mimo-voice-gender f">♀</span></td>
              <td>Elegant, intellectual / 优雅知性</td>
            </tr>
            <tr>
              <td><span class="mimo-voice-name">💜 克洛伊</span></td>
              <td><span class="mimo-voice-gender f">♀</span></td>
              <td>Sweet, emotional / 甜美温柔</td>
            </tr>
            <tr>
              <td><span class="mimo-voice-name">🔥 米洛</span></td>
              <td><span class="mimo-voice-gender m">♂</span></td>
              <td>Warm, magnetic / 温暖磁性</td>
            </tr>
            <tr>
              <td><span class="mimo-voice-name">⚡ 迪恩</span></td>
              <td><span class="mimo-voice-gender m">♂</span></td>
              <td>Deep, powerful / 浑厚低沉</td>
            </tr>
            <tr>
              <td><span class="mimo-voice-name">🎙️ 默认</span></td>
              <td><span class="mimo-voice-gender d">—</span></td>
              <td>Universal, balanced / 通用均衡</td>
            </tr>
          </tbody>
        </table>
      </div>
      <a class="mimo-feature-link" href="/standard">Try it now →</a>
    </div>
  </div>

  <!-- Voice Design -->
  <div class="mimo-card-outer mimo-feature-card">
    <div class="mimo-card-inner">
      <div class="mimo-feature-icon">✨</div>
      <h3 class="mimo-feature-title">Voice Design / 音色设计</h3>
      <p class="mimo-feature-desc">
        Create entirely new voices from text descriptions alone — no audio samples needed. Save your designs as reusable custom presets.
        <span class="zh">仅通过文字描述即可创造全新音色，无需音频样本。支持保存为可复用预设。</span>
      </p>
      <a class="mimo-feature-link" href="/design">Try it now →</a>
    </div>
  </div>

  <!-- Voice Clone -->
  <div class="mimo-card-outer mimo-feature-card">
    <div class="mimo-card-inner">
      <div class="mimo-feature-icon">🎭</div>
      <h3 class="mimo-feature-title">Voice Clone / 音色克隆</h3>
      <p class="mimo-feature-desc">
        Upload a few seconds of any audio (MP3, WAV, M4A — max 10MB). MiMo replicates the voice's unique characteristics with remarkable accuracy.
        <span class="zh">上传几秒音频（最大 10MB），MiMo 即可精准复刻音色的个性化特征。</span>
      </p>
      <a class="mimo-feature-link" href="/clone">Try it now →</a>
    </div>
  </div>

</div>
</div>

<hr class="mimo-divider" />

<!-- ═══════════════════════════════════════════════════════════════════ -->
<!--                    DIRECTOR PRESETS                                -->
<!-- ═══════════════════════════════════════════════════════════════════ -->

<div class="mimo-section" align="center">

<div class="mimo-eyebrow">🎬 Presets</div>

<h2 class="mimo-section-title" style="text-align:center;">Director-Level Voice Direction</h2>

<p class="mimo-section-desc" style="text-align:center; margin: 0 auto;">
  Each preset defines the <strong>role</strong>, <strong>scene</strong>, and <strong>performance direction</strong> for truly expressive synthesis.
  <span class="zh">每个预设都是一份电影级配音指导——定义角色、场景和表演方向。</span>
</p>

<div class="mimo-presets-grid" style="text-align: left;">

  <div class="mimo-preset-card">
    <span class="mimo-preset-emoji">📰</span>
    <h4 class="mimo-preset-name">News Broadcast / 新闻播报</h4>
    <p class="mimo-preset-desc">Steady, authoritative anchor voice / 沉稳权威的主播腔</p>
  </div>

  <div class="mimo-preset-card">
    <span class="mimo-preset-emoji">📖</span>
    <h4 class="mimo-preset-name">Storytelling / 故事朗读</h4>
    <p class="mimo-preset-desc">Engaging narrative with emotional depth / 引人入胜的叙事节奏</p>
  </div>

  <div class="mimo-preset-card">
    <span class="mimo-preset-emoji">👻</span>
    <h4 class="mimo-preset-name">Horror Fiction / 恐怖小说</h4>
    <p class="mimo-preset-desc">Chilling silence & tension / 令人毛骨悚然的张力</p>
  </div>

  <div class="mimo-preset-card">
    <span class="mimo-preset-emoji">🎬</span>
    <h4 class="mimo-preset-name">Documentary / 纪录片</h4>
    <p class="mimo-preset-desc">Measured, contemplative narration / 沉稳克制的旁白</p>
  </div>

  <div class="mimo-preset-card">
    <span class="mimo-preset-emoji">🦸</span>
    <h4 class="mimo-preset-name">Hero / 正派角色</h4>
    <p class="mimo-preset-desc">Heroic resolve and noble bearing / 英雄气概</p>
  </div>

  <div class="mimo-preset-card">
    <span class="mimo-preset-emoji">🦹</span>
    <h4 class="mimo-preset-name">Villain / 反派角色</h4>
    <p class="mimo-preset-desc">Menacing whisper, cold menace / 反派低语</p>
  </div>

  <div class="mimo-preset-card">
    <span class="mimo-preset-emoji">🎙️</span>
    <h4 class="mimo-preset-name">Voiceover / 广告配音</h4>
    <p class="mimo-preset-desc">Polished, commercial delivery / 精致商业配音</p>
  </div>

  <div class="mimo-preset-card">
    <span class="mimo-preset-emoji">📜</span>
    <h4 class="mimo-preset-name">Poetry / 诗歌朗诵</h4>
    <p class="mimo-preset-desc">Rhythmic, lyrical cadence / 富有韵律的诗意表达</p>
  </div>

  <div class="mimo-preset-card">
    <span class="mimo-preset-emoji">💻</span>
    <h4 class="mimo-preset-name">Tech Review / 科技评测</h4>
    <p class="mimo-preset-desc">Sharp, energetic analysis / 犀利活力的科技解说</p>
  </div>

  <div class="mimo-preset-card">
    <span class="mimo-preset-emoji">🧸</span>
    <h4 class="mimo-preset-name">Children's Book / 儿童读物</h4>
    <p class="mimo-preset-desc">Warm, playful character voices / 温暖活泼的角色演绎</p>
  </div>

  <div class="mimo-preset-card">
    <span class="mimo-preset-emoji">🌿</span>
    <h4 class="mimo-preset-name">Calm / 平静舒缓</h4>
    <p class="mimo-preset-desc">Meditative, soothing tones / 冥想般的舒缓语调</p>
  </div>

  <div class="mimo-preset-card">
    <span class="mimo-preset-emoji">☀️</span>
    <h4 class="mimo-preset-name">Warm / 温暖治愈</h4>
    <p class="mimo-preset-desc">Soft comfort like a warm blanket / 如毯子般温暖的陪伴</p>
  </div>

  <div class="mimo-preset-card">
    <span class="mimo-preset-emoji">📖</span>
    <h4 class="mimo-preset-name">Narrator / 旁白叙述</h4>
    <p class="mimo-preset-desc">Neutral, clear third-person / 中性清晰的第三人称</p>
  </div>

</div>
</div>

<hr class="mimo-divider" />

<!-- ═══════════════════════════════════════════════════════════════════ -->
<!--                    TECH STACK                                      -->
<!-- ═══════════════════════════════════════════════════════════════════ -->

<div class="mimo-section" align="center">

<div class="mimo-eyebrow">🏗 Tech Stack</div>

<h2 class="mimo-section-title" style="text-align:center;">Built with Modern Tools</h2>

<p class="mimo-section-desc" style="text-align:center; margin: 0 auto;">
  Every layer is chosen for performance, DX, and aesthetics.
  <span class="zh">每一层都为性能、开发体验和美学而选。</span>
</p>

<div class="mimo-tech-grid" style="text-align: left;">

  <div class="mimo-tech-item">
    <h4 class="mimo-tech-name">Next.js</h4>
    <p class="mimo-tech-ver">v16 · App Router</p>
    <p class="mimo-tech-desc">React 19 · Server Components · API Routes</p>
  </div>

  <div class="mimo-tech-item">
    <h4 class="mimo-tech-name">Tailwind CSS</h4>
    <p class="mimo-tech-ver">v4 · CSS-first</p>
    <p class="mimo-tech-desc">Utility-first · CSS Variables · Dark-first</p>
  </div>

  <div class="mimo-tech-item">
    <h4 class="mimo-tech-name">Motion</h4>
    <p class="mimo-tech-ver">v12 · Framer successor</p>
    <p class="mimo-tech-desc">Scroll-triggered · Spring physics</p>
  </div>

  <div class="mimo-tech-item">
    <h4 class="mimo-tech-name">Phosphor Icons</h4>
    <p class="mimo-tech-ver">v2 · React</p>
    <p class="mimo-tech-desc">Ultra-light, precise line icons</p>
  </div>

  <div class="mimo-tech-item">
    <h4 class="mimo-tech-name">Geist</h4>
    <p class="mimo-tech-ver">Sans + Mono</p>
    <p class="mimo-tech-desc">Vercel premium typeface · Variable</p>
  </div>

  <div class="mimo-tech-item">
    <h4 class="mimo-tech-name">MiMo-V2.5-TTS</h4>
    <p class="mimo-tech-ver">Xiaomi AI</p>
    <p class="mimo-tech-desc">3 models · 24kHz PCM16 WAV</p>
  </div>

</div>
</div>

<hr class="mimo-divider" />

<!-- ═══════════════════════════════════════════════════════════════════ -->
<!--                    QUICK START                                     -->
<!-- ═══════════════════════════════════════════════════════════════════ -->

<div class="mimo-section" align="center">

<div class="mimo-eyebrow">⚡ Quick Start</div>

<h2 class="mimo-section-title" style="text-align:center;">Up and Running in Minutes</h2>

<p class="mimo-section-desc" style="text-align:center; margin: 0 auto;">
  No training, no complex setup. Just clone, configure, and go.
  <span class="zh">无需训练，无需复杂配置。克隆、配置、启动。</span>
</p>

<div class="mimo-code-block" style="text-align: left; max-width: 640px; margin: 32px auto 0;">
  <div class="mimo-code-header">
    <span class="mimo-code-dot r"></span>
    <span class="mimo-code-dot y"></span>
    <span class="mimo-code-dot g"></span>
    <span class="mimo-code-title">terminal</span>
  </div>
  <pre><code><span style="color:#52525b"># Clone the repository / 克隆仓库</span>
git clone https://github.com/binggan23/mimo-tts-studio.git
cd mimo-tts-studio/mimotts-app

<span style="color:#52525b"># Install dependencies / 安装依赖</span>
npm install

<span style="color:#52525b"># Start development server / 启动开发服务器</span>
npm run dev</code></pre>
</div>

<div style="margin-top: 24px;">
  <a class="mimo-cta" href="https://github.com/binggan23/mimo-tts-studio">
    Get Started
    <span class="mimo-cta-icon">↗</span>
  </a>
</div>

</div>

<hr class="mimo-divider" />

<!-- ═══════════════════════════════════════════════════════════════════ -->
<!--                    CONFIGURATION                                   -->
<!-- ═══════════════════════════════════════════════════════════════════ -->

<div class="mimo-section" align="center">

<div class="mimo-eyebrow">🔐 Config</div>

<h2 class="mimo-section-title" style="text-align:center;">Configuration</h2>

<p class="mimo-section-desc" style="text-align:center; margin: 0 auto;">
  Create <code style="padding:2px 8px;border-radius:4px;background:rgba(255,255,255,0.05);font-family:'Geist Mono',monospace;font-size:13px;color:#10b981;">config.json</code> in the project root.
  <span class="zh">在项目根目录创建 config.json。</span>
</p>

<div class="mimo-code-block" style="text-align: left; max-width: 560px; margin: 24px auto 0;">
  <div class="mimo-code-header">
    <span class="mimo-code-dot r"></span>
    <span class="mimo-code-dot y"></span>
    <span class="mimo-code-dot g"></span>
    <span class="mimo-code-title">config.json</span>
  </div>
  <pre><code>{
  <span style="color:#10b981">"TTSapikey"</span>: <span style="color:#eab308">"your-mimo-api-key"</span>,
  <span style="color:#10b981">"TTSurl"</span>: <span style="color:#eab308">"https://api.xiaomimimo.com/v1/chat/completions"</span>,
  <span style="color:#10b981">"TTSmodels"</span>: [
    <span style="color:#eab308">"mimo-v2.5-tts"</span>,
    <span style="color:#eab308">"mimo-v2.5-tts-voicedesign"</span>,
    <span style="color:#eab308">"mimo-v2.5-tts-voiceclone"</span>
  ]
}</code></pre>
</div>

<div style="max-width: 640px; margin: 24px auto 0; text-align: left;">
  <table class="mimo-config-table">
    <thead>
      <tr>
        <th>Field / 字段</th>
        <th>Type</th>
        <th>Description / 说明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>TTSapikey</code></td>
        <td><code>string</code></td>
        <td>Your MiMo API key / MiMo API 密钥</td>
      </tr>
      <tr>
        <td><code>TTSurl</code></td>
        <td><code>string</code></td>
        <td>API endpoint (default provided) / API 端点</td>
      </tr>
      <tr>
        <td><code>TTSmodels</code></td>
        <td><code>string[]</code></td>
        <td>Available model IDs / 可用模型 ID 列表</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="mimo-alert warn" style="max-width: 640px; margin: 20px auto 0; text-align: left;">
  <span class="mimo-alert-icon">⚠️</span>
  <div>
    <strong>Security / 安全提示:</strong> <code style="padding:1px 6px;border-radius:3px;background:rgba(234,179,8,0.1);font-family:'Geist Mono',monospace;font-size:12px;">config.json</code> is gitignored. Never commit API keys to public repositories.<br/>
    config.json 已被 gitignore，切勿将 API 密钥提交到公开仓库。
  </div>
</div>

</div>

<hr class="mimo-divider" />

<!-- ═══════════════════════════════════════════════════════════════════ -->
<!--                    RUN COMMANDS                                    -->
<!-- ═══════════════════════════════════════════════════════════════════ -->

<div class="mimo-section" align="center">

<div class="mimo-eyebrow">🚀 Commands</div>

<h2 class="mimo-section-title" style="text-align:center;">Run / 启动</h2>

<div class="mimo-code-block" style="text-align: left; max-width: 480px; margin: 24px auto 0;">
  <div class="mimo-code-header">
    <span class="mimo-code-dot r"></span>
    <span class="mimo-code-dot y"></span>
    <span class="mimo-code-dot g"></span>
    <span class="mimo-code-title">package.json scripts</span>
  </div>
  <pre><code>npm run dev      <span style="color:#52525b"># Development → localhost:3000</span>
npm run build    <span style="color:#52525b"># Production build</span>
npm run start    <span style="color:#52525b"># Production server</span>
npm run lint     <span style="color:#52525b"># ESLint</span></code></pre>
</div>

</div>

<hr class="mimo-divider" />

<!-- ═══════════════════════════════════════════════════════════════════ -->
<!--                    PROJECT STRUCTURE                               -->
<!-- ═══════════════════════════════════════════════════════════════════ -->

<div class="mimo-section" align="center">

<div class="mimo-eyebrow">📁 Structure</div>

<h2 class="mimo-section-title" style="text-align:center;">Project Structure / 项目结构</h2>

<div class="mimo-tree" style="text-align: left; max-width: 640px; margin: 24px auto 0;">
<span class="dir">mimotts-app/</span>
├── <span class="dir">app/</span>
│   ├── <span class="file">page.tsx</span>                  <span class="comment"># Landing page / 首页</span>
│   ├── <span class="dir">standard/</span><span class="file">page.tsx</span>         <span class="comment"># Standard synthesis / 标准合成</span>
│   ├── <span class="dir">design/</span><span class="file">page.tsx</span>           <span class="comment"># Voice design / 音色设计</span>
│   ├── <span class="dir">clone/</span><span class="file">page.tsx</span>            <span class="comment"># Voice clone / 音色克隆</span>
│   └── <span class="dir">api/</span>
│       ├── <span class="dir">tts/</span><span class="file">route.ts</span>          <span class="comment"># TTS proxy API / TTS 代理接口</span>
│       └── <span class="dir">presets/</span><span class="file">route.ts</span>      <span class="comment"># Preset CRUD / 预设管理接口</span>
├── <span class="dir">components/</span>                   <span class="comment"># React components / 组件</span>
├── <span class="dir">lib/</span>                          <span class="comment"># Utilities / 工具库</span>
├── <span class="dir">presets/</span>                      <span class="comment"># 13 built-in presets / 内置预设</span>
├── <span class="file">config.json</span>                   <span class="comment"># API keys (gitignored) / API 密钥</span>
└── <span class="file">package.json</span>
</div>

</div>

<hr class="mimo-divider" />

<!-- ═══════════════════════════════════════════════════════════════════ -->
<!--                    API REFERENCE                                   -->
<!-- ═══════════════════════════════════════════════════════════════════ -->

<div class="mimo-section" align="center">

<div class="mimo-eyebrow">🔌 API</div>

<h2 class="mimo-section-title" style="text-align:center;">API Reference / 接口文档</h2>

<div style="max-width: 640px; margin: 32px auto 0; text-align: left;">

  <!-- POST /api/tts -->
  <div class="mimo-card-outer" style="margin-bottom: 16px;">
    <div class="mimo-card-inner">
      <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
        <span class="mimo-method post">POST</span>
        <code style="font-family:'Geist Mono',monospace;font-size:14px;color:var(--text-primary);">/api/tts</code>
        <span style="font-size:13px;color:var(--text-tertiary);margin-left:auto;">Synthesize Speech / 语音合成</span>
      </div>

      <div class="mimo-code-block" style="margin: 0 0 16px;">
        <div class="mimo-code-header">
          <span class="mimo-code-dot r"></span>
          <span class="mimo-code-dot y"></span>
          <span class="mimo-code-dot g"></span>
          <span class="mimo-code-title">request body</span>
        </div>
        <pre><code>{
  <span style="color:#10b981">"model"</span>: <span style="color:#eab308">"mimo-v2.5-tts"</span>,
  <span style="color:#10b981">"text"</span>: <span style="color:#eab308">"Hello, this is a test."</span>,
  <span style="color:#10b981">"voice"</span>: <span style="color:#eab308">"Chloe"</span>,
  <span style="color:#10b981">"style"</span>: <span style="color:#eab308">"Warm and friendly tone"</span>,
  <span style="color:#10b981">"tags"</span>: <span style="color:#eab308">"[happy][gentle]"</span>
}</code></pre>
      </div>

      <table class="mimo-config-table" style="margin: 0;">
        <thead>
          <tr>
            <th>Parameter / 参数</th>
            <th>Required</th>
            <th>Description / 说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>model</code></td>
            <td>✅</td>
            <td>Model ID / 模型标识</td>
          </tr>
          <tr>
            <td><code>text</code></td>
            <td>✅</td>
            <td>Text to synthesize / 待合成文本</td>
          </tr>
          <tr>
            <td><code>voice</code></td>
            <td>⚡</td>
            <td>Voice name (standard) / 音色名称</td>
          </tr>
          <tr>
            <td><code>voiceDescription</code></td>
            <td>⚡</td>
            <td>Description (design) / 音色描述</td>
          </tr>
          <tr>
            <td><code>voiceAudio</code></td>
            <td>⚡</td>
            <td>Base64 audio (clone) / Base64 音频</td>
          </tr>
          <tr>
            <td><code>style</code></td>
            <td>—</td>
            <td>Style direction / 风格指令</td>
          </tr>
          <tr>
            <td><code>tags</code></td>
            <td>—</td>
            <td>Audio tags / 音频标签</td>
          </tr>
        </tbody>
      </table>

      <div class="mimo-alert info" style="margin: 16px 0 0;">
        <span class="mimo-alert-icon">ℹ️</span>
        <div>
          <strong>Response:</strong> WAV audio file (PCM16, 24kHz, mono)<br/>
          <strong>Auto-segmentation:</strong> Text &gt; 300 chars is split at sentence boundaries with 200ms silence gaps.<br/>
          <span style="color:#93c5fd80;">超过 300 字符的文本自动按句分割，以 200ms 静音间隔拼接。</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Preset APIs -->
  <div class="mimo-card-outer" style="margin-bottom: 16px;">
    <div class="mimo-card-inner">
      <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
        <span class="mimo-method get">GET</span>
        <code style="font-family:'Geist Mono',monospace;font-size:14px;color:var(--text-primary);">/api/presets</code>
        <span style="font-size:13px;color:var(--text-tertiary);margin-left:auto;">List all presets / 获取所有预设</span>
      </div>
      <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
        <span class="mimo-method post">POST</span>
        <code style="font-family:'Geist Mono',monospace;font-size:14px;color:var(--text-primary);">/api/presets</code>
        <span style="font-size:13px;color:var(--text-tertiary);margin-left:auto;">Save preset / 保存预设</span>
      </div>
      <div style="display:flex; align-items:center; gap:12px;">
        <span class="mimo-method delete">DEL</span>
        <code style="font-family:'Geist Mono',monospace;font-size:14px;color:var(--text-primary);">/api/presets?id=&lt;id&gt;</code>
        <span style="font-size:13px;color:var(--text-tertiary);margin-left:auto;">Delete preset / 删除预设</span>
      </div>
    </div>
  </div>

</div>
</div>

<hr class="mimo-divider" />

<!-- ═══════════════════════════════════════════════════════════════════ -->
<!--                    AUDIO TAGS                                      -->
<!-- ═══════════════════════════════════════════════════════════════════ -->

<div class="mimo-section" align="center">

<div class="mimo-eyebrow">🎛 Tags</div>

<h2 class="mimo-section-title" style="text-align:center;">Audio Tag Reference / 音频标签速查</h2>

<div class="mimo-tag-grid" style="text-align: left;">

  <div class="mimo-tag-category">
    <h4 class="mimo-tag-category-title">😊 Emotions / 情感</h4>
    <div>
      <span class="mimo-tag">[happy]</span>
      <span class="mimo-tag">[sad]</span>
      <span class="mimo-tag">[angry]</span>
      <span class="mimo-tag">[scared]</span>
      <span class="mimo-tag">[surprised]</span>
      <span class="mimo-tag">[disgusted]</span>
      <span class="mimo-tag">[shy]</span>
      <span class="mimo-tag">[confident]</span>
      <span class="mimo-tag">[anxious]</span>
      <span class="mimo-tag">[worried]</span>
    </div>
  </div>

  <div class="mimo-tag-category">
    <h4 class="mimo-tag-category-title">🎵 Tone / 语调</h4>
    <div>
      <span class="mimo-tag">[gentle]</span>
      <span class="mimo-tag">[cold]</span>
      <span class="mimo-tag">[lively]</span>
      <span class="mimo-tag">[elegant]</span>
      <span class="mimo-tag">[dark]</span>
      <span class="mimo-tag">[powerful]</span>
    </div>
  </div>

  <div class="mimo-tag-category">
    <h4 class="mimo-tag-category-title">🗣️ Dialects / 方言</h4>
    <div>
      <span class="mimo-tag">[northeast]</span>
      <span class="mimo-tag">[sichuan]</span>
      <span class="mimo-tag">[henan]</span>
      <span class="mimo-tag">[cantonese]</span>
      <span class="mimo-tag">[taiwanese]</span>
    </div>
  </div>

  <div class="mimo-tag-category">
    <h4 class="mimo-tag-category-title">🎬 Actions / 动作</h4>
    <div>
      <span class="mimo-tag">[breathing]</span>
      <span class="mimo-tag">[laughing]</span>
      <span class="mimo-tag">[sobbing]</span>
      <span class="mimo-tag">[coughing]</span>
      <span class="mimo-tag">[sighing]</span>
    </div>
  </div>

</div>
</div>

<hr class="mimo-divider" />

<!-- ═══════════════════════════════════════════════════════════════════ -->
<!--                    LICENSE & FOOTER                                -->
<!-- ═══════════════════════════════════════════════════════════════════ -->

<div class="mimo-footer" align="center">
  <p class="mimo-footer-text">
    Licensed under the <strong>MIT License</strong><br/>
    <span style="color:#3f3f46;">—</span><br/>
    Made with <span class="mimo-footer-heart">♥</span> by <a href="https://github.com/binggan23">binggan23</a><br/>
    Powered by <a href="https://platform.xiaomimimo.com/">Xiaomi MiMo-V2.5-TTS</a> · Built with <a href="https://nextjs.org/">Next.js</a> + <a href="https://tailwindcss.com/">Tailwind CSS</a>
  </p>
</div>

