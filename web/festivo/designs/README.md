# 🎨 FESTIVO - Design Process

Este documento describe el proceso de diseño de FESTIVO usando Pencil con integración MCP.

---

## 🛠️ Herramientas Utilizadas

- **Pencil** (pencil.dev) - Herramienta de diseño UI/UX
- **Pencil MCP Integration** - Integración con Claude Code para diseño programático
- **Material Design Icons** - Sistema de iconografía
- **Unsplash** - Imágenes de alta calidad

---

## 📐 Diseños Creados

### 1. Homepage (Landing Page)

**Archivo**: `festivo-homepage.pen` (creado con Pencil MCP)

**Estructura**:
- **Header Sticky** (80px altura)
  - Logo FESTIVO (40×40px icono naranja + texto)
  - Search bar centrada (fill container)
  - Botones Login/Sign Up

- **Carousel Hero "Carnival Season"**
  - Card 1440×600px con imagen de fondo
  - Overlay oscuro (rgba(0,0,0,0.25))
  - Badge, título, fecha sobre imagen
  - 6 dots de navegación

- **5 Carouseles de Eventos**
  - Summer Festivals (6 eventos)
  - Asia Highlights (4 eventos)
  - Popular Cities (5 ciudades)
  - Fan Favorites (5 eventos con ratings)
  - Happening This Month (2 eventos con countdown)

- **Hero CTA Banner**
  - Fondo naranja (#FF6B35)
  - Título + subtítulo + botón blanco

- **Country Grid**
  - 7 países con banderas emoji
  - Contador de eventos por país

- **Footer**
  - 3 columnas de links
  - Copyright y legal

**Especificaciones Técnicas**:
```
Ancho: 1440px
Layout: Vertical con secciones
Gap entre secciones: 0px (diferentes fondos)
Padding horizontal: 80px
Tipografía: Inter (Google Fonts)
Color primario: #FF6B35
```

---

### 2. Event Detail Page

**Archivo**: `festivo-event-detail.pen` (creado con Pencil MCP)

**Estructura**:
- **Header** (mismo que homepage)

- **Hero Image** (500px altura)
  - Imagen full-width
  - Botón favorito flotante (top-right)
    - 64×64px circular
    - Fondo blanco, borde naranja
    - Icono Material Design "favorite"
    - Padding: 20px desde bordes

- **Breadcrumb**
  - Home / Country / Event Name
  - Padding: 20px horizontal

- **Event Header**
  - Badges: País + Tipo de evento
  - Título: 48px bold
  - Metadata: 📅 Fecha | ⏱️ Duración | 📍 Ubicación

- **Main Content** (Two-Column Layout)
  - **Left Column** (800px)
    - About This Event (descripción)
    - Event Highlights (4 cards con iconos)

  - **Right Sidebar** (400px)
    - Hotel Booking Card (Booking.com affiliate)
      - Fondo beige (#FFF8F0)
      - CTA naranja
    - Good to Know (3 tips con iconos)

- **Related Events**
  - 4 event cards
  - Mismo estilo que homepage

- **Footer** (mismo que homepage)

**Especificaciones Técnicas**:
```
Ancho: 1440px
Hero: 500px altura
Two-column: 800px + 400px (gap: 40px)
Botón favorito: Material Icon "favorite"
Tipografía: Inter
Color primario: #FF6B35
```

---

## 🎨 Sistema de Diseño

### Paleta de Colores

```css
/* Primary */
--primary: #FF6B35;           /* Naranja vibrante */
--primary-hover: #E55A2B;     /* Naranja oscuro */
--primary-light: #FF6B3520;   /* Naranja transparente */

/* Neutrals */
--text-primary: #1A1A1A;      /* Negro casi puro */
--text-secondary: #666666;    /* Gris medio */
--text-tertiary: #999999;     /* Gris claro */
--background: #FAFAFA;        /* Blanco roto */
--background-alt: #F9F9F9;    /* Gris muy claro */
--white: #FFFFFF;             /* Blanco puro */

/* Borders */
--border: #E5E5E5;            /* Gris borde */
--border-hover: #E0E0E0;      /* Gris borde hover */

/* Badges by Country */
--badge-brazil: rgba(255, 107, 53, 0.13);
--badge-spain: rgba(231, 76, 60, 0.13);
--badge-japan: rgba(230, 126, 34, 0.13);
--badge-india: rgba(243, 156, 18, 0.13);
--badge-uk: rgba(39, 174, 96, 0.13);
/* ... más badges */
```

### Tipografía

```css
/* Font Family */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Hierarchy */
--hero-title: 56px / bold;
--page-title: 48px / bold;
--section-title: 32px / bold;
--subsection-title: 24px / bold;
--card-title: 18px / bold;
--body-large: 16px / normal;
--body: 14px / normal;
--caption: 12px / normal;
```

### Espaciado

```css
/* Padding & Margins */
--container-padding: 80px;      /* Desktop */
--container-padding-tablet: 40px;
--container-padding-mobile: 20px;

--section-gap: 60px;
--card-gap: 20px;
--element-gap: 16px;
--text-gap: 8px;

/* Border Radius */
--radius-small: 8px;
--radius-medium: 12px;
--radius-large: 16px;
--radius-pill: 24px;
--radius-circle: 50%;
```

### Componentes

**Event Card**:
- Ancho: 280px (min-width)
- Alto: 360px
- Imagen: 200px altura
- Padding: 20px
- Border radius: 16px
- Hover: translateY(-4px) + shadow

**Badge**:
- Padding: 6-12px (variable según contexto)
- Border radius: 12px
- Font size: 12-16px
- Background: color con 13% opacity

**Button Primary**:
- Padding: 12-14px vertical, 20-28px horizontal
- Background: #FF6B35
- Color: white
- Border radius: 8-12px
- Hover: #E55A2B + translateY(-2px)

---

## 📱 Responsive Breakpoints

```css
/* Desktop */
@media (min-width: 1024px) {
  /* Layout completo */
}

/* Tablet */
@media (max-width: 1024px) {
  /* Padding reducido */
  /* Two-column → Single column */
}

/* Mobile */
@media (max-width: 768px) {
  /* Search bar hidden */
  /* Cards en columna */
  /* Font sizes reducidos */
}
```

---

## 🔄 Design-to-Code Process

### Flujo de Trabajo

1. **Diseño en Pencil MCP**
   - Crear wireframes
   - Definir layout y estructura
   - Establecer colores y tipografía

2. **Generación de Código**
   - HTML semántico
   - CSS con variables
   - JavaScript para interactividad

3. **Refinamiento**
   - Ajustes de espaciado
   - Hover effects
   - Animaciones
   - Responsive behavior

4. **Testing**
   - Cross-browser
   - Mobile/Tablet/Desktop
   - Accessibility (WCAG)

---

## 📸 Screenshots

**Nota**: Para incluir screenshots de las páginas implementadas, ejecuta:

```bash
# Abrir páginas en navegador
open index.html
open event-detail.html

# Tomar screenshots (CMD+SHIFT+4 en macOS)
# Guardar en: designs/screenshots/
```

Sugerencias:
- `homepage-desktop.png` - Vista completa del homepage
- `homepage-mobile.png` - Vista mobile del homepage
- `event-detail-desktop.png` - Vista completa de event detail
- `event-detail-mobile.png` - Vista mobile de event detail
- `favorites-interaction.png` - Demostración del botón de favoritos

---

## 🎯 Decisiones de Diseño

### ¿Por qué Pencil?

- **Diseño programático**: Integración con código vía MCP
- **Velocidad**: Iteración rápida de diseños
- **Consistencia**: Sistema de diseño built-in
- **Export**: Múltiples formatos de salida

### ¿Por qué Material Icons?

- **Reconocibles**: Usuarios familiarizados con iconografía
- **Profesionales**: Diseño consistente de Google
- **Livianos**: Fuente web optimizada
- **Extensibles**: Fácil cambiar o agregar iconos

### ¿Por qué Two-Column en Event Detail?

- **Jerarquía**: Contenido principal vs. secundario claro
- **Conversión**: Sidebar para CTAs (hotel booking)
- **Escaneabilidad**: Fácil leer descripción sin distracciones
- **Responsive**: Se colapsa bien en mobile

---

## 🔗 Referencias

- **Pencil**: https://pencil.dev
- **Material Icons**: https://fonts.google.com/icons
- **Inter Font**: https://fonts.google.com/specimen/Inter
- **Unsplash**: https://unsplash.com

---

**Diseñado por**: Sistema Multiagéntico con Pencil MCP
**Implementado en**: HTML/CSS/JavaScript
**Fecha**: 2026-03-12
