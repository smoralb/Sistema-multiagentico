# Diseño Técnico: Landing Page Ciberpunk

## ⭐ FUENTE ÚNICA DE VERDAD VISUAL

**Archivo Pencil**: `outputs/designs/landing-cyberpunk.pen`
**Screenshot**: Ver imagen generada arriba

**IMPORTANTE**: El desarrollador debe implementar EXACTAMENTE lo que se ve en el archivo Pencil. Todos los valores visuales (colores, tamaños, espaciados, fuentes) están definidos en Pencil y deben ser copiados EXACTAMENTE.

---

## 1. Especificaciones Exactas desde Pencil

### Colores (Hex Codes EXACTOS)

**Backgrounds:**
- `#0a0e27` - Background principal (azul oscuro profundo)
- `rgba(0, 255, 255, 0.05)` - Feature card 1 background (cyan transparente)
- `rgba(255, 0, 255, 0.05)` - Feature card 2 background (magenta transparente)
- `rgba(157, 0, 255, 0.05)` - Feature card 3 background (purple transparente)
- `rgba(0, 255, 136, 0.05)` - Stats cards background (green transparente)

**Colores de Texto:**
- `#00ffff` - Cyan neón (Hero title, Features title, Feature card 1 title)
- `#ff00ff` - Magenta neón (Hero subtitle, Feature card 2 title, CTA final title)
- `#9d00ff` - Purple neón (CTA button, Feature card 3 title)
- `#00ff88` - Green neón (Stats title, stats numbers)
- `#ffffff` - White (Descriptions, CTA text, submit button text, labels)
- `rgba(255, 255, 255, 0.5)` - White 50% (Email placeholder, footer text)

**Bordes (Strokes):**
- Cyan border: `#00ffff`, thickness: `2px`
- Magenta border: `#ff00ff`, thickness: `2px`
- Purple border: `#9d00ff`, thickness: `2px`
- Green border: `#00ff88`, thickness: `2px`

**Botones:**
- CTA hero button background: `#9d00ff`
- Submit button background: `#ff00ff`

### Tipografía (Fuentes, Tamaños, Pesos EXACTOS)

**Fuentes a cargar:**
```html
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;600;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">
```

**Especificaciones de texto:**

| Elemento | Font Family | Size | Weight | Letter Spacing | Color |
|----------|-------------|------|--------|----------------|-------|
| Hero Title | Orbitron | 72px | 900 | 2px | #00ffff |
| Hero Subtitle | Rajdhani | 24px | 400 | 0 | #ff00ff |
| Features Title | Orbitron | 48px | 700 | 2px | #00ffff |
| Feature Card Title | Rajdhani | 32px | 700 | 0 | (variado) |
| Feature Card Description | Rajdhani | 18px | 400 | 0 | #ffffff |
| Stats Title | Orbitron | 48px | 700 | 2px | #00ff88 |
| Stat Number | Share Tech Mono | 64px | 700 | 0 | #00ff88 |
| Stat Label | Rajdhani | 24px | 700 | 4px | #ffffff |
| CTA Final Title | Orbitron | 48px | 700 | 2px | #ff00ff |
| CTA Subtitle | Rajdhani | 20px | 400 | 0 | #ffffff |
| Email Placeholder | Share Tech Mono | 18px | 400 | 0 | rgba(255,255,255,0.5) |
| Submit Button Text | Rajdhani | 18px | 700 | 2px | #ffffff |
| CTA Button Text | Rajdhani | 18px | 700 | 2px | #ffffff |
| Footer Text | Share Tech Mono | 14px | 400 | 0 | rgba(255,255,255,0.5) |
| Icons | - | 64px | - | - | - |

### Layout y Espaciados (Píxeles EXACTOS)

**Container Principal:**
- Max-width: `1400px`
- Margin: `0 auto`
- Padding horizontal: `20px`

**Sections:**
- Vertical gap entre sections: `100px`
- Padding interno sections: `100px 40px` (vertical horizontal)

**Hero Section:**
- Width: `1400px`
- Height: `600px`
- Padding: `100px 40px`
- Gap entre elementos: `32px`
- Alignment: `center`

**CTA Button (Hero):**
- Width: `280px`
- Height: `64px`
- Padding: `20px 40px`
- Border-radius: `8px`
- Background: `#9d00ff`

**Features Section:**
- Width: `1400px`
- Gap top (título a grid): `60px`
- Padding: `100px 40px`

**Features Grid:**
- Width: `1320px`
- Gap horizontal entre cards: `40px`
- Layout: `horizontal` (flexbox row)
- Justify: `center`

**Feature Cards:**
- Width: `380px`
- Height: `360px`
- Padding: `40px`
- Gap interno: `24px`
- Border: `2px` solid (color variado)
- Border-radius: `0px` (cuadrado)
- Layout: `vertical`
- Align: `center`

**Tech Stats Section:**
- Width: `1400px`
- Gap top: `60px`
- Padding: `100px 40px`

**Stats Grid:**
- Width: `1320px`
- Gap horizontal: `40px`

**Stat Cards:**
- Width: `380px`
- Height: `260px`
- Padding: `40px`
- Gap interno: `20px`
- Border: `2px` solid `#00ff88`
- Border-radius: `0px`
- Layout: `vertical`
- Align: `center`
- Justify: `center`

**CTA Final Section:**
- Width: `1400px`
- Padding: `100px 40px`
- Gap: `48px`
- Align: `center`

**Form Container:**
- Width: `600px`
- Gap: `24px`

**Email Input:**
- Width: `600px`
- Height: `64px`
- Padding: `20px 24px`
- Border: `2px` solid `#00ffff`
- Border-radius: `0px`
- Background: `rgba(0, 255, 255, 0.05)`

**Submit Button:**
- Width: `600px`
- Height: `64px`
- Padding: `20px 40px`
- Border-radius: `0px`
- Background: `#ff00ff`

**Footer:**
- Width: `1400px`
- Height: `120px`
- Padding: `40px`
- Gap: `16px`
- Align: `center`
- Justify: `center`

### Responsive Breakpoints (desde Pencil mobile)

**Mobile (< 768px):**
- Hero title: `48px` (ajustado desde 72px)
- Features title: `36px` (ajustado desde 48px)
- Feature cards: width `100%`, stack vertical
- Stats cards: width `100%`, stack vertical
- Form: width `100%` (max 500px)
- Sections padding: `60px 20px`
- Gap entre sections: `60px`

**Tablet (768px - 1024px):**
- Hero title: `64px`
- Features grid: 2 columnas (2x1 grid)
- Stats grid: 2 columnas + 1 abajo
- Max-width container: `720px`

---

## 2. Animaciones y Efectos (Especificaciones en TEXTO)

**IMPORTANTE**: Las animaciones NO están en Pencil. El desarrollador debe leer estas especificaciones y implementarlas.

### Efectos CSS a Implementar

#### 1. Glitch Effect (Hero Title)

```css
@keyframes glitch {
  0%, 100% {
    transform: translate(0);
    text-shadow:
      0 0 20px #00ffff,
      0 0 40px #00ffff,
      0 0 60px #00ffff;
  }
  20% {
    transform: translate(-2px, 2px);
    text-shadow:
      2px 0 #ff00ff,
      -2px 0 #00ffff,
      0 0 20px #00ffff;
  }
  40% {
    transform: translate(2px, -2px);
  }
  60% {
    transform: translate(-2px, -2px);
  }
  80% {
    transform: translate(2px, 2px);
    text-shadow:
      -2px 0 #ff00ff,
      2px 0 #00ffff;
  }
}

.hero-title {
  animation: glitch 3s ease-in-out infinite;
}
```

#### 2. Neon Glow Pulse (Borders)

```css
@keyframes glow-pulse-cyan {
  0%, 100% {
    box-shadow:
      0 0 10px #00ffff,
      0 0 20px #00ffff,
      inset 0 0 10px rgba(0, 255, 255, 0.1);
  }
  50% {
    box-shadow:
      0 0 20px #00ffff,
      0 0 40px #00ffff,
      0 0 60px #00ffff,
      inset 0 0 20px rgba(0, 255, 255, 0.2);
  }
}

@keyframes glow-pulse-magenta {
  0%, 100% {
    box-shadow:
      0 0 10px #ff00ff,
      0 0 20px #ff00ff,
      inset 0 0 10px rgba(255, 0, 255, 0.1);
  }
  50% {
    box-shadow:
      0 0 20px #ff00ff,
      0 0 40px #ff00ff,
      0 0 60px #ff00ff,
      inset 0 0 20px rgba(255, 0, 255, 0.2);
  }
}

@keyframes glow-pulse-purple {
  0%, 100% {
    box-shadow:
      0 0 10px #9d00ff,
      0 0 20px #9d00ff,
      inset 0 0 10px rgba(157, 0, 255, 0.1);
  }
  50% {
    box-shadow:
      0 0 20px #9d00ff,
      0 0 40px #9d00ff,
      0 0 60px #9d00ff,
      inset 0 0 20px rgba(157, 0, 255, 0.2);
  }
}

@keyframes glow-pulse-green {
  0%, 100% {
    box-shadow:
      0 0 10px #00ff88,
      0 0 20px #00ff88,
      inset 0 0 10px rgba(0, 255, 136, 0.1);
  }
  50% {
    box-shadow:
      0 0 20px #00ff88,
      0 0 40px #00ff88,
      0 0 60px #00ff88,
      inset 0 0 20px rgba(0, 255, 136, 0.2);
  }
}

.feature-card-1 {
  animation: glow-pulse-cyan 2s ease-in-out infinite;
}

.feature-card-2 {
  animation: glow-pulse-magenta 2s ease-in-out infinite;
}

.feature-card-3 {
  animation: glow-pulse-purple 2s ease-in-out infinite;
}

.stat-card {
  animation: glow-pulse-green 2s ease-in-out infinite;
}
```

#### 3. Grid Background Animated

```css
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
  z-index: 0;
  animation: grid-move 20s linear infinite;
}

@keyframes grid-move {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(50px);
  }
}
```

#### 4. Scan Lines Effect

```css
body::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    transparent 0%,
    rgba(0, 255, 255, 0.05) 50%,
    transparent 100%
  );
  background-size: 100% 4px;
  pointer-events: none;
  z-index: 1;
  animation: scan 8s linear infinite;
}

@keyframes scan {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}
```

#### 5. Holographic Button Effect

```css
@keyframes holographic {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.submit-button {
  background: linear-gradient(
    45deg,
    #ff00ff,
    #ff00ff,
    #ff00ff
  );
  background-size: 200% 200%;
  position: relative;
  overflow: hidden;
}

.submit-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: shine 3s ease-in-out infinite;
}

@keyframes shine {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}
```

#### 6. Card Hover Effects

```css
.feature-card:hover,
.stat-card:hover {
  transform: translateY(-10px) scale(1.02);
  transition: all 0.3s ease;
}

.feature-card-1:hover {
  box-shadow:
    0 20px 60px rgba(0, 255, 255, 0.4),
    0 0 40px #00ffff,
    0 0 60px #00ffff;
}

.feature-card-2:hover {
  box-shadow:
    0 20px 60px rgba(255, 0, 255, 0.4),
    0 0 40px #ff00ff,
    0 0 60px #ff00ff;
}

.feature-card-3:hover {
  box-shadow:
    0 20px 60px rgba(157, 0, 255, 0.4),
    0 0 40px #9d00ff,
    0 0 60px #9d00ff;
}

.stat-card:hover {
  box-shadow:
    0 20px 60px rgba(0, 255, 136, 0.4),
    0 0 40px #00ff88,
    0 0 60px #00ff88;
}
```

#### 7. CTA Button Hover

```css
.cta-button:hover {
  transform: scale(1.05);
  box-shadow:
    0 10px 30px rgba(157, 0, 255, 0.5),
    0 0 40px #9d00ff,
    0 0 60px #9d00ff;
  transition: all 0.3s ease;
}

.submit-button:hover {
  transform: scale(1.02);
  box-shadow:
    0 10px 30px rgba(255, 0, 255, 0.5),
    0 0 40px #ff00ff,
    0 0 60px #ff00ff;
  transition: all 0.3s ease;
}
```

#### 8. Fade In on Scroll (Scroll Animations)

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-section {
  animation: fadeInUp 1s ease-out;
}

.features-section {
  animation: fadeInUp 1s ease-out 0.2s backwards;
}

.stats-section {
  animation: fadeInUp 1s ease-out 0.4s backwards;
}

.cta-final-section {
  animation: fadeInUp 1s ease-out 0.6s backwards;
}
```

#### 9. Stat Numbers Count Up Animation (opcional con JS)

```javascript
// Opcional: Animar números al hacer scroll
const stats = document.querySelectorAll('.stat-number');

const animateValue = (elem, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    elem.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

// Trigger on scroll into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Animar números
    }
  });
});
```

---

## 3. Performance Optimizations

### GPU Acceleration

Usar `transform` y `opacity` para animaciones (GPU-accelerated):

```css
.animated-element {
  will-change: transform, opacity;
  transform: translateZ(0); /* Force GPU */
}
```

### Reducir Repaints

```css
* {
  box-sizing: border-box;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

## 4. Implementación HTML Estructura

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cyberpunk Landing | Welcome to the Future</title>

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;600;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">

  <style>
    /* CSS implementado desde Pencil + animaciones */
  </style>
</head>
<body>
  <!-- Grid Background -->
  <!-- Scan Lines -->

  <div class="container">
    <!-- Hero Section -->
    <section class="hero-section">
      <h1 class="hero-title">WELCOME TO THE FUTURE</h1>
      <p class="hero-subtitle">Enter the Cyberpunk World</p>
      <a href="#" class="cta-button">
        <span class="cta-text">EXPLORE NOW</span>
      </a>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <h2 class="features-title">CORE FEATURES</h2>
      <div class="features-grid">
        <div class="feature-card feature-card-1">
          <span class="icon">⚡</span>
          <h3 class="feature-title">Ultra Speed</h3>
          <p class="feature-desc">Lightning-fast performance powered by quantum processors</p>
        </div>
        <div class="feature-card feature-card-2">
          <span class="icon">🔒</span>
          <h3 class="feature-title">Quantum Security</h3>
          <p class="feature-desc">Military-grade encryption protects your digital existence</p>
        </div>
        <div class="feature-card feature-card-3">
          <span class="icon">🧠</span>
          <h3 class="feature-title">Neural Interface</h3>
          <p class="feature-desc">Direct mind-to-machine connection for instant control</p>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
      <h2 class="stats-title">PERFORMANCE METRICS</h2>
      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-number">99.9%</span>
          <span class="stat-label">UPTIME</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">1M+</span>
          <span class="stat-label">USERS</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">24/7</span>
          <span class="stat-label">SUPPORT</span>
        </div>
      </div>
    </section>

    <!-- CTA Final Section -->
    <section class="cta-final-section">
      <h2 class="cta-title">JOIN THE REVOLUTION</h2>
      <p class="cta-subtitle">Enter your neural link access code</p>
      <form class="form-container">
        <input
          type="email"
          class="email-input"
          placeholder="your.email@cybernet.io"
          required
        >
        <button type="submit" class="submit-button">
          <span class="submit-text">ACCESS GRANTED →</span>
        </button>
      </form>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p class="footer-text">© 2077 CyberCorp Industries. All rights reserved.</p>
    </footer>
  </div>
</body>
</html>
```

---

## 5. Checklist de Implementación

### Para el Agente Desarrollador:

**Antes de implementar:**
- [ ] Leer archivo Pencil: `landing-cyberpunk.pen`
- [ ] Ver screenshot generado
- [ ] Anotar TODOS los colores (hex codes)
- [ ] Anotar TODOS los tamaños (px)
- [ ] Anotar TODOS los espaciados (padding, margin, gap)
- [ ] Anotar TODAS las fuentes (family, size, weight)
- [ ] Leer especificaciones de animaciones en ESTE documento

**Durante implementación:**
- [ ] Implementar HTML estructura semántica
- [ ] Implementar CSS con valores EXACTOS de Pencil
- [ ] NO usar valores aproximados
- [ ] Implementar animaciones desde este documento
- [ ] Usar GPU acceleration (transform, opacity)

**Después de implementar:**
- [ ] Comparar visualmente con Pencil (pixel-perfect)
- [ ] Verificar colores exactos (eyedropper tool)
- [ ] Verificar tamaños exactos (inspector)
- [ ] Verificar espaciados exactos
- [ ] Verificar animaciones funcionan suavemente
- [ ] Test responsive en 3 breakpoints

---

## 6. Criterios de Validación

### Visual (vs Pencil):
- ✅ Colores coinciden 100%
- ✅ Tamaños coinciden 100%
- ✅ Espaciados coinciden 100%
- ✅ Fuentes coinciden 100%
- ✅ Layout idéntico

### Funcional:
- ✅ Animaciones suaves (60fps)
- ✅ Hover effects responsivos
- ✅ Formulario funcional
- ✅ Responsive en todos los dispositivos
- ✅ No errores en consola

### Performance:
- ✅ Lighthouse score > 95
- ✅ First Paint < 0.5s
- ✅ No layout shifts

---

**Diseñador**: Agente Diseñador
**Diseño en Pencil**: ✅ Completo con valores exactos
**Animaciones en texto**: ✅ Especificadas en este documento
**Estado**: Pendiente de validación
**Versión**: 1.0
**Fecha**: 2026-03-12
