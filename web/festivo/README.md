# 🎉 FESTIVO - World Festivals & Events Explorer

Landing page para FESTIVO, la plataforma web que permite descubrir festivales, días festivos nacionales y celebraciones culturales de todo el mundo.

## 📋 Descripción

Homepage implementada siguiendo el diseño aprobado en Pencil, con carruseles interactivos, cards de eventos, y navegación fluida.

## 🎨 Características del Diseño

### Estructura de la Página

1. **Header Sticky** - Navegación fija con:
   - Logo FESTIVO
   - Barra de búsqueda centrada
   - Botones Login/Sign Up

2. **Carousel Principal "Carnival Season"** - Hero full-width con:
   - Card de 1440×600px con imagen de fondo
   - Overlay oscuro para legibilidad
   - Texto sobre imagen (badge, título, fecha)
   - Indicador de navegación con 6 puntos

3. **Carousel "Summer Festivals"** - 6 eventos de verano

4. **Hero CTA Banner** - Banner naranja compacto con call-to-action

5. **Carousel "Asia Highlights"** - 4 festivales asiáticos

6. **Sección "Happening This Month"** - 2 eventos próximos con countdown

7. **Carousel "Popular Cities"** - 5 ciudades destacadas

8. **Carousel "Fan Favorites"** - 5 eventos con ratings y votos

9. **Country Grid** - 7 países con banderas y contador de eventos

10. **Footer** - Links de navegación, legal y copyright

### Paleta de Colores

- **Primario**: `#FF6B35` (Naranja vibrante)
- **Texto**: `#1A1A1A` (Negro casi puro)
- **Secundario**: `#666666` (Gris medio)
- **Fondo**: `#FAFAFA` (Blanco roto)
- **Badges**: Colores únicos por país

### Tipografía

- **Font Family**: Inter (Google Fonts)
- **Títulos Hero**: 56px, bold
- **Títulos Sección**: 32px, bold
- **Títulos Card**: 18px, bold
- **Body**: 14-16px, normal

## 🚀 Cómo Usar

### Instalación

1. Clona o descarga los archivos del proyecto
2. Abre `index.html` en tu navegador

```bash
# Opción 1: Abrir directamente
open index.html

# Opción 2: Usar un servidor local
python3 -m http.server 8000
# Luego visita http://localhost:8000
```

### Estructura de Archivos

```
festivo/
├── index.html           # Homepage - Landing page principal
├── event-detail.html    # Event Detail - Página de detalle de eventos
├── styles.css           # Estilos globales (Header, Footer, Cards)
├── event-detail.css     # Estilos específicos de Event Detail
├── script.js            # JavaScript homepage
├── event-detail.js      # JavaScript Event Detail (favoritos, hotel booking)
├── .gitignore          # Archivos ignorados por Git
└── README.md            # Esta documentación
```

## ✨ Funcionalidades Implementadas

### Páginas

- ✅ **Homepage (index.html)** - Landing page con carruseles de eventos
- ✅ **Event Detail (event-detail.html)** - Página de detalle de eventos individuales

### Interactividad Homepage

- ✅ **Carruseles con scroll horizontal** - Arrastra o usa scroll para navegar
- ✅ **Navegación con dots** - Click en los puntos para cambiar slides
- ✅ **Hover effects** - Cards elevan al pasar el mouse
- ✅ **Búsqueda interactiva** - Focus effect en la barra de búsqueda
- ✅ **Smooth scroll** - Animaciones al hacer scroll
- ✅ **Responsive design** - Adaptado para móvil, tablet y desktop
- ✅ **Navegación a detalle** - Click en eventos redirige a página de detalle
- ✅ **Logo clickeable** - Click en logo hace scroll suave al inicio

### Funcionalidades Event Detail

- ✅ **Botón de favoritos** - Icono Material Design (corazón) flotante sobre hero image
- ✅ **LocalStorage persistence** - Favoritos se guardan entre sesiones
- ✅ **Hotel booking affiliate** - Integración con Booking.com (simulada)
- ✅ **Related events** - Carousel de eventos similares
- ✅ **Breadcrumb navigation** - Home / Country / Event
- ✅ **Toast notifications** - Feedback visual al guardar favoritos
- ✅ **Logo navigation** - Click en logo regresa a homepage
- ✅ **Event highlights** - Cards con información clave del evento
- ✅ **Good to Know tips** - Tips prácticos para asistentes

### Eventos JavaScript

- Click en event cards → Navega a event-detail.html
- Click en logo (homepage) → Smooth scroll al inicio
- Click en logo (event detail) → Navega a index.html
- Click en favorito → Toggle y guarda en localStorage
- Click en hotel booking → Redirige a Booking.com (simulado)
- Click en países → Log del país
- Click en CTA buttons → Navegación (simulada)
- Search con Enter → Búsqueda (simulada)
- Scroll effects → Animación de entrada de secciones

## 📱 Responsive

El diseño se adapta a tres breakpoints:

- **Desktop**: > 1024px (diseño completo)
- **Tablet**: 768px - 1024px (ajustes de padding)
- **Mobile**: < 768px (layout vertical, elementos simplificados)

## 🎯 Reglas de Estructura

### Reglas Establecidas

1. **Header** → Siempre el **primer elemento** de la página
   - Nada puede ir por encima (sticky position)

2. **Footer** → Siempre el **último elemento** de la página
   - Cualquier nuevo contenido debe insertarse ANTES del footer

3. **Nuevos carruseles/secciones** → Siempre entre Header y Footer

## 🎨 Diseños en Pencil

Este proyecto fue diseñado usando **Pencil** (pencil.dev) con integración MCP. Los diseños incluyen:

### Homepage Design
- Carruseles interactivos
- Hero section full-width
- Event cards con hover effects
- Country grid con banderas
- Footer con múltiples columnas

### Event Detail Design
- Hero image con botón de favorito flotante
- Two-column layout (content + sidebar)
- Event highlights cards
- Hotel booking affiliate section
- Related events carousel

**Nota**: Los archivos `.pen` originales se pueden recrear usando Pencil MCP o importando screenshots de las páginas implementadas.

## 🔄 Próximos Pasos

Para convertir esto en una aplicación funcional:

1. **Integrar Calendarific API** - Datos reales de eventos y festivales
2. **Sistema de búsqueda** - Backend con filtros por país, fecha, tipo
3. **Páginas adicionales**:
   - Country Page - Vista de todos los eventos por país
   - Search Results - Resultados de búsqueda
   - User Profile - Perfil y favoritos del usuario
4. **Autenticación** - Login/Signup funcional con backend
5. **Sistema de favoritos mejorado** - Sincronización con cuenta de usuario
6. **Booking.com API** - Integración real de affiliate para hoteles
7. **Internacionalización** - Múltiples idiomas (i18n)
8. **SEO optimization** - Meta tags dinámicos, structured data
9. **Analytics** - Google Analytics para tracking de eventos
10. **Backend API** - Node.js/Express o similar para datos dinámicos

## 🛠️ Tecnologías

- **HTML5** - Semántico y accesible
- **CSS3** - Flexbox, Grid, Animations, Transitions
- **Vanilla JavaScript (ES6+)** - Sin frameworks, código limpio
- **Google Fonts** - Inter typeface
- **Material Icons** - Iconografía del botón de favoritos
- **LocalStorage API** - Persistencia de favoritos
- **Intersection Observer API** - Animaciones al scroll
- **Unsplash** - Imágenes de alta calidad

## 📄 Licencia

Proyecto educacional - Sistema Multiagéntico de Desarrollo

---

**Creado por**: Agente Desarrollador (Sistema Multiagéntico)
**Diseño**: Agente Diseñador con Pencil MCP
**Fecha**: 2026-03-12
**Versión**: 1.0
