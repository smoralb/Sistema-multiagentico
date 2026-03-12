# Arquitectura: Landing Page Brutalista Moderna

## Decisión Arquitectónica

### Stack Tecnológico Seleccionado

**HTML5 + CSS3 Puro** (mantener del proyecto anterior)

### Razones

1. **Mantener Performance**
   - Stack actual funciona perfectamente
   - Solo cambiar estilos CSS, no estructura HTML
   - Carga instantánea mantenida

2. **Estilo Brutalista Nativo**
   - CSS Grid para layout estructurado
   - System fonts (no cargar fonts externas)
   - Minimalismo = menos código

3. **Card-Based Design**
   - Flexbox + Grid para cards
   - Border-radius grandes (40px)
   - Box-shadow sutiles

### Estructura del Proyecto

```
web/
├── landing-brutalista.html    # Nueva landing page
└── README.md                  # Documentación actualizada
```

### Componentes Visuales

#### 1. Hero Section (Card Negro)
- Card negro con border-radius 40px
- Título en blanco bold
- Subtítulo en gris claro
- CTA button rojo circular
- Checkered pattern pequeño

#### 2. Features Section (3 Cards Beige)
- 3 cards beige independientes
- Border-radius 40px
- Foto/icono grande
- Título bold
- Grid info 2 columnas
- Spacing generoso

#### 3. Stats Section (Card Negro)
- Card negro grande
- Grid 3 columnas
- Números muy grandes (monospace)
- Labels en gris
- Estilo timeline con "/"

#### 4. CTA Section (Card Beige)
- Card beige centrado
- Form minimalista
- Input con border simple
- Button rojo grande
- Layout clean

### Paleta de Colores Brutalista

**Colores Principales:**
- Negro: `#000000` (backgrounds oscuros)
- Beige claro: `#F5F1ED` (backgrounds claros)
- Rojo brillante: `#FF3333` (acentos, CTAs)
- Blanco: `#FFFFFF` (texto en negro)
- Gris medio: `#999999` (labels secundarios)
- Gris oscuro: `#333333` (borders sutiles)

**Sin gradientes, sin transparencias complejas - colores sólidos**

### Tipografía (System Fonts)

**Fonts Stack:**
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
             "Roboto", "Oxygen", "Ubuntu", "Cantarell",
             "Fira Sans", "Droid Sans", "Helvetica Neue",
             sans-serif;
```

**Monospace Stack (para números):**
```css
font-family: "SF Mono", "Monaco", "Inconsolata",
             "Fira Code", "Droid Sans Mono",
             "Courier New", monospace;
```

**Type Scale:**
- H1: 64px, weight 900
- H2: 48px, weight 700
- H3: 32px, weight 700
- Body: 18px, weight 400
- Numbers: 72px, weight 700 (monospace)
- Labels: 12px, weight 700, uppercase, letter-spacing 2px

### Layout y Espaciados

**Container:**
- Max-width: 1200px
- Margin: 0 auto
- Padding: 40px

**Cards:**
- Border-radius: 40px
- Padding: 60px
- Margin bottom: 40px
- Box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08)

**Sections:**
- Gap entre cards: 40px
- Padding interno: 60px
- Grid gap: 24px

### Efectos y Animaciones (Mínimas)

**Reducir dramáticamente vs versión cyberpunk:**

1. **Fade In** (sutil)
   ```css
   @keyframes fadeIn {
     from { opacity: 0; transform: translateY(10px); }
     to { opacity: 1; transform: translateY(0); }
   }
   ```

2. **Hover en Cards** (sutil)
   ```css
   transform: translateY(-4px);
   box-shadow: 0 12px 48px rgba(0, 0, 0, 0.12);
   transition: all 0.3s ease;
   ```

3. **Button Hover** (simple)
   ```css
   transform: scale(1.05);
   transition: transform 0.2s ease;
   ```

**NO usar:**
- ❌ Glitch effects
- ❌ Neon glow
- ❌ Grid backgrounds animados
- ❌ Scan lines
- ❌ Efectos complejos

### Elementos Visuales Característicos

1. **Checkered Pattern** (pequeño)
   - 4x4 grid de cuadrados blanco/negro
   - Tamaño: 60x60px
   - Posición: Decorativo en hero

2. **Red Circle Menu Button**
   - Width/Height: 56px
   - Background: #FF3333
   - Border-radius: 50%
   - Posición: top-right, fixed

3. **Timeline Decades** (Stats)
   - Format: "1970S/"
   - Monospace font
   - Large numbers: 72px
   - Slash "/" integrado

4. **Info Grid** (Features cards)
   - 2 columnas pequeñas
   - Label: Uppercase, 12px
   - Value: Bold, 16px
   - Gap: 16px

### Responsive Design

**Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

**Mobile adjustments:**
- Cards: Full width, reduce padding to 40px
- H1: 48px (reduce desde 64px)
- Numbers: 56px (reduce desde 72px)
- Grid: 1 columna (stack)

### Performance Targets

- First Paint: < 0.5s (mantener)
- Total Size: < 15 KB (sin external fonts)
- Lighthouse: > 95 (mantener)
- No layout shifts

### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

**Arquitecto**: Agente Arquitecto
**Estado**: Pendiente de validación
**Versión**: 1.0
**Fecha**: 2026-03-12
