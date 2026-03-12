# Diseño Técnico: Landing Page Brutalista Moderna

**Fecha**: 2026-03-12
**Proyecto**: Landing Page Brutalista
**Archivo Pencil**: `outputs/designs/landing-brutalista.pen`
**Estado**: ✅ Diseño Completado

---

## 📋 Resumen Ejecutivo

Landing page con diseño brutalista moderno inspirado en "The History of Car Racing" de Dribbble. Estilo minimalista con alto contraste, tipografía bold, layout basado en cards con border-radius grandes (40px) y paleta negro/beige/rojo.

### Características del Diseño

- **Estilo**: Brutalista moderno, minimalista, alto contraste
- **Layout**: Card-based con border-radius 40px
- **Tipografía**: System fonts (Inter), weights 400/700/900
- **Paleta**: Negro (#000000), Beige (#F5F1ED), Rojo (#FF3333)
- **Animaciones**: Mínimas y sutiles (fade in, hover effects)
- **Resolución**: 1440x3000px (desktop)

---

## 🎨 Colores (Hex Codes EXACTOS)

### Colores Principales

```
#000000 - Negro (Hero Card, Stats Card, iconos)
#F5F1ED - Beige (Background, Feature Cards, CTA Card)
#FF3333 - Rojo (CTA Buttons, acentos)
#FFFFFF - Blanco (Texto en negro, checkered pattern, email input)
#999999 - Gris medio (Labels, subtítulos, descripciones)
#333333 - Gris oscuro (Borders, strokes sutiles)
```

### Uso de Colores por Sección

**Hero Section:**
- Background Card: `#000000`
- Título: `#FFFFFF`
- Subtítulo: `#999999`
- Labels: `#999999`
- Values: `#FFFFFF`
- CTA Button: `#FF3333`
- CTA Text: `#FFFFFF`
- Checkered Pattern: `#000000` + `#FFFFFF`
- Border: `#333333` 1px

**Features Section:**
- Card Background: `#F5F1ED`
- Card Border: `#333333` 1px
- Icons: `#000000`
- Decade Text: `#000000`
- Titles: `#000000`
- Labels: `#999999`
- Values: `#000000`

**Stats Section:**
- Background Card: `#000000`
- Border: `#333333` 1px
- Title: `#FFFFFF`
- Numbers: `#FFFFFF`
- Labels: `#999999`

**CTA Section:**
- Background Card: `#F5F1ED`
- Border: `#333333` 1px
- Title: `#000000`
- Description: `#999999`
- Email Input Background: `#FFFFFF`
- Email Input Border: `#000000` 2px
- Placeholder: `#999999`
- Submit Button: `#FF3333`
- Submit Text: `#FFFFFF`

---

## 📐 Tamaños de Fuente (EXACTOS)

### Títulos y Headlines

```
Hero Title: 64px, weight 900, line-height 1.1
Stats Title: 48px, weight 700
CTA Title: 48px, weight 700
Decade Text: 48px, weight 700
Feature Card Title: 32px, weight 700
```

### Contenido y Body

```
Hero Subtitle: 18px, weight 400, line-height 1.6
CTA Description: 18px, weight 400
Email Placeholder: 16px, weight 400
Button Text: 16px, weight 700
Feature Card Values: 16px, weight 700
```

### Stats y Números

```
Stat Numbers: 72px, weight 700 (Inter, estilo monospace)
```

### Labels

```
All Labels: 12px, weight 700, uppercase, letter-spacing 2px
Stat Labels: 14px, weight 700, uppercase, letter-spacing 2px
```

---

## 📏 Espaciados y Layout (EXACTOS)

### Container Principal

```
Screen: 1440x3000px
Background: #F5F1ED
Container: 1200px width, vertical layout
Container Padding: 40px
Container Gap: 40px (entre cards)
```

### Hero Card (Negro)

```
Width: fill_container (1200px)
Height: 600px
Background: #000000
Border-radius: 40px
Border: 1px solid #333333
Padding: 60px
Layout: Vertical
Gap: 32px

Hero Content:
  - Width: 600px
  - Layout: Vertical
  - Gap: 24px

Info Grid:
  - Layout: Horizontal
  - Gap: 32px
  - Width: 400px

CTA Button:
  - Width: 200px
  - Height: 56px
  - Border-radius: 28px (círculo)
  - Background: #FF3333

Checkered Pattern:
  - Width: 60px
  - Height: 60px
  - 2x2 grid (30x30px cada cuadro)
  - Colors: #000000 y #FFFFFF alternados
```

### Features Section (3 Cards Beige)

```
Section Layout: Horizontal
Section Gap: 40px
Section Height: 900px

Each Feature Card:
  - Width: 373px
  - Height: fill_container (900px)
  - Background: #F5F1ED
  - Border-radius: 40px
  - Border: 1px solid #333333
  - Padding: 60px
  - Layout: Vertical
  - Gap: 32px

Icon Circle:
  - Width: 120px
  - Height: 120px
  - Background: #000000
  - Border-radius: 60px (círculo perfecto)

Info Grid:
  - Layout: Horizontal
  - Gap: 24px
  - 2 columns
  - Each column: Vertical, gap 8px
```

### Stats Section (Card Negro)

```
Width: fill_container (1200px)
Height: 400px
Background: #000000
Border-radius: 40px
Border: 1px solid #333333
Padding: 60px
Layout: Vertical
Gap: 40px

Stats Grid:
  - Layout: Horizontal
  - Gap: 60px (espaciado generoso)

Each Stat Column:
  - Layout: Vertical
  - Gap: 12px
```

### CTA Section (Card Beige)

```
Width: fill_container (1200px)
Height: 500px
Background: #F5F1ED
Border-radius: 40px
Border: 1px solid #333333
Padding: 60px
Layout: Vertical
Gap: 40px
Align: Center (horizontal y vertical)

Form:
  - Width: 500px
  - Layout: Vertical
  - Gap: 20px

Email Input:
  - Width: fill_container (500px)
  - Height: 56px
  - Background: #FFFFFF
  - Border-radius: 8px
  - Border: 2px solid #000000
  - Padding: 0px 20px

Submit Button:
  - Width: fill_container (500px)
  - Height: 56px
  - Background: #FF3333
  - Border-radius: 8px
```

---

## 🔤 Tipografía (System Fonts)

### Familia de Fuentes

**Sans-serif System Stack:**
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
             "Roboto", "Oxygen", "Ubuntu", "Cantarell",
             "Fira Sans", "Droid Sans", "Helvetica Neue",
             sans-serif;
```

**Monospace Stack (para Stats Numbers):**
```css
font-family: "SF Mono", "Monaco", "Inconsolata",
             "Fira Code", "Droid Sans Mono",
             "Courier New", monospace;
```

### Pesos de Fuente

```
400 - Normal (Body text, subtítulos, descripciones)
700 - Bold (Títulos, labels, valores, buttons)
900 - Black (Hero title principal)
```

### Letter Spacing

```
Normal text: 0px (default)
Labels: 2px (uppercase, small text)
```

### Line Height

```
Headlines: 1.1 (Hero Title)
Body: 1.6 (Subtítulos, descripciones)
Default: normal (resto)
```

### Text Transform

```
Labels: UPPERCASE (todos los labels pequeños)
Rest: Normal case
```

---

## 🎯 Componentes del Diseño

### 1. Hero Section

**Elementos:**
- Card negro (1200x600px)
- Título principal (64px, bold, blanco)
- Subtítulo (18px, gris, 2 líneas)
- Info grid (2 columnas: STYLE/Brutalist, YEAR/2026)
- CTA button rojo circular (200x56px)
- Checkered pattern (60x60px, 2x2 grid)

**Características visuales:**
- Alto contraste (blanco sobre negro)
- Patrón checkered como elemento decorativo
- Info grid estructurado en 2 columnas
- Botón CTA con border-radius alto (28px)
- Spacing generoso (gap 32px)

### 2. Features Section (3 Cards)

**Elementos por Card:**
- Card beige (373x900px)
- Icono circular negro (120x120px)
- Década con slash ("1970S/", "1990S/", "2020S/")
- Título bold (32px)
- Info grid 2 columnas (labels + values)

**Características visuales:**
- Layout horizontal (3 cards en fila)
- Iconos circulares negros perfectos
- Formato de década con "/" al final
- Info grid compacto (2 columnas pequeñas)
- Border sutil (1px #333333)

### 3. Stats Section

**Elementos:**
- Card negro (1200x400px)
- Título "By The Numbers" (48px, blanco)
- 3 estadísticas en horizontal
- Números grandes (72px, monospace, blanco)
- Labels pequeños (14px, gris, uppercase)

**Características visuales:**
- Números con fuente monospace
- Layout de 3 columnas con espaciado amplio (60px)
- Contraste alto (blanco sobre negro)
- Labels en uppercase con letter-spacing

### 4. CTA Section

**Elementos:**
- Card beige (1200x500px)
- Título centrado (48px)
- Descripción (18px, gris)
- Form con email input + submit button
- Email input: fondo blanco, border negro 2px
- Submit button: fondo rojo (#FF3333)

**Características visuales:**
- Todo centrado (horizontal y vertical)
- Form de 500px width
- Input con border más grueso (2px)
- Button rojo destacado
- Border-radius más pequeño (8px) vs cards principales

---

## ⚡ Animaciones CSS (Especificadas en Texto)

### Filosofía de Animación

**Minimalismo**: A diferencia de la versión cyberpunk, las animaciones son MÍNIMAS y SUTILES.

### 1. Fade In (Entrada de Secciones)

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Aplicar a cada sección */
.hero-card {
  animation: fadeIn 0.6s ease-out;
}

.features-section {
  animation: fadeIn 0.6s ease-out 0.2s backwards;
}

.stats-section {
  animation: fadeIn 0.6s ease-out 0.4s backwards;
}

.cta-section {
  animation: fadeIn 0.6s ease-out 0.6s backwards;
}
```

**Detalles:**
- Movimiento sutil (10px)
- Duración corta (0.6s)
- Delays escalonados (0.2s increments)
- Ease-out para suavidad

### 2. Hover en Cards (Feature Cards)

```css
.feature-card {
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.12);
}
```

**Detalles:**
- Elevación mínima (4px)
- Shadow muy sutil
- Transition rápida (0.3s)

### 3. Button Hover (CTAs)

```css
.cta-button {
  transition: transform 0.2s ease;
}

.cta-button:hover {
  transform: scale(1.05);
}
```

**Detalles:**
- Scale mínimo (1.05)
- No glow effects
- Transition muy rápida (0.2s)

### 4. Input Focus (Email Input)

```css
.email-input {
  transition: border-color 0.2s ease;
}

.email-input:focus {
  border-color: #FF3333;
  outline: none;
}
```

**Detalles:**
- Solo cambio de color de border
- No glow, no shadow
- Transición rápida

### ❌ NO Incluir

- Glitch effects
- Neon glow
- Grid backgrounds animados
- Scan lines
- Holographic shines
- Efectos complejos

---

## 📱 Responsive Design

### Breakpoints

```
Mobile: < 768px
Tablet: 768px - 1024px
Desktop: > 1024px
```

### Ajustes Mobile (< 768px)

**Container:**
```
Padding: 20px (reducido desde 40px)
Gap: 24px (reducido desde 40px)
```

**Hero Card:**
```
Height: auto (flexible)
Padding: 40px (reducido desde 60px)
Title: 48px (reducido desde 64px)
Content Width: 100% (desde 600px)
```

**Features Section:**
```
Layout: Vertical (stack)
Cards: Full width
Height: auto
Gap: 24px
```

**Stats Section:**
```
Stats Grid: Vertical (stack)
Numbers: 56px (reducido desde 72px)
Padding: 40px
```

**CTA Section:**
```
Padding: 40px
Form Width: 100% (desde 500px)
Height: auto
```

### Ajustes Tablet (768px - 1024px)

**Container:**
```
Padding: 32px
```

**Hero Title:**
```
Font-size: 56px (intermedio)
```

**Features:**
```
Posible 2 columnas + 1 abajo
O mantener stack vertical
```

---

## 🎨 Box Shadows (Sutiles)

### Cards en Estado Normal

```css
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
```

### Cards en Hover

```css
box-shadow: 0 12px 48px rgba(0, 0, 0, 0.12);
```

**Características:**
- Shadows MUY sutiles (opacity baja)
- No colored shadows
- Solo para profundidad mínima

---

## 🧩 Elementos Decorativos

### Checkered Pattern (2x2)

```
Total: 60x60px
Grid: 2 filas x 2 columnas
Cada cuadro: 30x30px
Colors: #000000 y #FFFFFF alternados
Posición: Top-right del Hero Card
```

**Patrón:**
```
[Negro] [Blanco]
[Blanco] [Negro]
```

---

## 📊 Especificaciones Técnicas

### Performance Targets

```
First Paint: < 0.5s
Total Page Size: < 15 KB (sin external fonts)
Layout Shifts: 0 (sin CLS)
GPU Acceleration: Sí (transform, opacity)
Animations: 60fps
```

### Browser Support

```
Chrome: 90+
Firefox: 88+
Safari: 14+
Edge: 90+
```

### Standards

```
HTML5: Semántico
CSS3: Moderno (grid, flexbox)
No JavaScript requerido
No frameworks
System fonts only
```

---

## 🎯 Valores Clave de Pencil

### IDs de Nodos Principales

```
Screen: saJxe (1440x3000px, #F5F1ED)
Container: E2iN7 (1200px, vertical, gap 40px)
Hero Card: wlEKe (#000000, 40px radius)
Features Section: UAO3c (horizontal, 3 cards)
Stats Section: ji8xh (#000000, 40px radius)
CTA Section: c9UsH (#F5F1ED, 40px radius)
```

### Border Radius Consistency

```
Cards principales: 40px (Hero, Features, Stats, CTA)
CTA Button (Hero): 28px (casi circular)
Icon circles: 60px (circular perfecto, 120x120px)
Form inputs: 8px (más sutiles)
```

### Gap System

```
Container gap: 40px (entre cards principales)
Hero gap: 32px (entre elementos internos)
Features gap: 40px (entre cards)
Feature card gap: 32px (interno)
Stats gap: 60px (entre stats)
Info grid gap: 24px o 32px (dependiendo de sección)
Form gap: 20px (entre input y button)
```

### Padding System

```
Cards grandes: 60px (Hero, Features, Stats, CTA)
Cards mobile: 40px (reducido en responsive)
Container: 40px
Email input: 0px 20px (vertical, horizontal)
```

---

## ✅ Checklist de Implementación

### HTML Structure

- [ ] Estructura semántica (section, header, footer)
- [ ] Cards con clases apropiadas
- [ ] Form funcional (email input + submit)
- [ ] Atributos accesibles (alt, aria-label)

### CSS Implementation

- [ ] Colores EXACTOS desde Pencil
- [ ] Tamaños de fuente EXACTOS
- [ ] Espaciados EXACTOS (gap, padding)
- [ ] Border-radius EXACTOS (40px, 28px, 60px, 8px)
- [ ] System fonts stack correcto
- [ ] Animaciones mínimas (fade, hover)
- [ ] Responsive breakpoints (768px, 1024px)
- [ ] Box-shadows sutiles

### Visual Accuracy

- [ ] Hero card negro con checkered pattern
- [ ] 3 Feature cards beige en horizontal
- [ ] Iconos circulares perfectos
- [ ] Décadas con formato "XXXX/"
- [ ] Stats con números monospace
- [ ] Form centrado con input blanco + button rojo
- [ ] Borders sutiles (#333333 1px)

### Performance

- [ ] No external fonts (system fonts only)
- [ ] GPU acceleration (transform, opacity)
- [ ] No layout shifts
- [ ] Animaciones a 60fps
- [ ] Tamaño total < 15 KB

---

## 🔄 Diferencias vs Versión Cyberpunk

| Aspecto | Cyberpunk | Brutalista |
|---------|-----------|------------|
| Paleta | Neón (cyan, magenta, purple) | Negro/Beige/Rojo |
| Fonts | Orbitron, Rajdhani, Google Fonts | System fonts (Inter fallback) |
| Animaciones | 9 complejas (glitch, glow, scan) | 4 mínimas (fade, hover) |
| Efectos | Neon glow, shadows coloridas | Shadows sutiles grises |
| Layout | Full-screen sections | Cards con border-radius |
| Background | Oscuro (#0a0e27) | Claro (#F5F1ED) |
| Borders | 2px neón coloridos | 1px gris sutil (#333333) |
| Estilo | Futurista, ciberpunk | Minimalista, brutalista |

---

## 📝 Notas de Diseño

### Inspiración

Diseño inspirado en "The History of Car Racing" de Dribbble:
- Card-based layout con border-radius grandes
- Paleta brutalista (negro/beige/rojo)
- Tipografía bold y geométrica
- Checkered pattern como elemento decorativo
- Formato de décadas con slash ("2020S/")
- Info grids estructurados
- Minimalismo con máximo impacto

### Filosofía

- **Menos es más**: Animaciones mínimas, efectos sutiles
- **Alto contraste**: Negro/blanco para legibilidad
- **Geometría clara**: Cards, círculos, grids bien definidos
- **System fonts**: Performance y consistencia
- **Espaciado generoso**: Breathing room entre elementos

### Próximos Pasos

1. Validar diseño con Agente Validador
2. Implementar pixel-perfect HTML/CSS
3. Verificar visual automáticamente (abrir navegador)
4. Testing completo (visual, responsive, performance)
5. Documentación final

---

**Diseñador**: Agente de Diseño
**Estado**: ✅ Diseño Completado y Especificado
**Versión**: 1.0
**Fecha**: 2026-03-12
