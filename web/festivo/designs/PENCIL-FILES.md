# 📐 Archivos .pen de Pencil

Los archivos de diseño `.pen` fueron creados durante el desarrollo usando **Pencil MCP Integration** con Claude Code.

---

## 🔍 ¿Dónde Están los Archivos .pen?

Los archivos `.pen` no se guardaron automáticamente en el sistema de archivos porque:

1. **Pencil MCP trabaja con archivos virtuales** durante el proceso de diseño
2. Los diseños se crean en memoria y se exportan según necesidad
3. La implementación HTML/CSS se generó directamente del diseño sin persistir el `.pen`

---

## 📦 Archivos .pen Creados Durante el Desarrollo

### 1. Homepage Design
- **Nombre virtual**: `festivo-homepage.pen`
- **Contenido**: Landing page con carruseles, hero section, event cards, footer
- **Nodos principales**:
  - Header (sticky navigation)
  - Carnival Season Hero (1440×600px)
  - 5 Carouseles de eventos
  - Hero CTA Banner
  - Country Grid
  - Footer

### 2. Event Detail Page Design
- **Nombre virtual**: `festivo-event-detail.pen`
- **Contenido**: Event detail con favoritos, two-column layout, affiliate
- **Nodos principales**:
  - Header (same as homepage)
  - Hero Image con botón de favorito flotante
  - Breadcrumb navigation
  - Event header (badges, title, metadata)
  - Main content (800px + 400px sidebar)
  - Related events
  - Footer

---

## 🎨 Opciones para Obtener los .pen

### Opción 1: Recrear desde Screenshots (Recomendado)

Si tienes Pencil instalado:

1. **Abrir las páginas implementadas**:
   ```bash
   open index.html
   open event-detail.html
   ```

2. **Tomar screenshots de cada página**

3. **Importar a Pencil**:
   - Abrir Pencil
   - File > Import Screenshot
   - Trazar elementos manualmente sobre screenshot
   - Usar guía de diseño en `designs/README.md`

### Opción 2: Diseñar desde Cero con Specs

Usar las especificaciones en `designs/README.md`:

- Sistema de colores definido
- Tipografía completa
- Medidas exactas de componentes
- Espaciado y padding especificados

### Opción 3: Exportar desde Pencil MCP (Si aún está en memoria)

Si acabas de terminar esta sesión de Claude Code:

1. Verificar si Pencil está abierto
2. Buscar documentos recientes en Pencil
3. Si los diseños están abiertos:
   - File > Save As
   - Guardar en: `designs/festivo-homepage.pen`
   - Guardar en: `designs/festivo-event-detail.pen`

---

## 🗂️ Ubicaciones Típicas de Archivos Pencil

### macOS
```
~/Documents/Pencil/
~/Library/Application Support/Pencil/
```

### Windows
```
C:\Users\[Usuario]\Documents\Pencil\
C:\Users\[Usuario]\AppData\Local\Pencil\
```

### Linux
```
~/Documents/Pencil/
~/.config/Pencil/
```

---

## 📋 Qué Hacer con los .pen

Una vez que tengas los archivos `.pen`:

1. **Agregar al repositorio**:
   ```bash
   cp path/to/festivo-homepage.pen designs/
   cp path/to/festivo-event-detail.pen designs/

   git add designs/*.pen
   git commit -m "Add Pencil design files"
   git push
   ```

2. **Compartir con el equipo**:
   - Los diseñadores pueden abrirlos en Pencil
   - Modificar y iterar sobre los diseños
   - Exportar nuevas versiones

3. **Documentación visual**:
   - Los archivos `.pen` sirven como source of truth
   - Fácil de versionar cambios de diseño

---

## 🔄 Workflow Alternativo: Git LFS

Si planeas versionar archivos `.pen` grandes:

```bash
# Instalar Git LFS
brew install git-lfs  # macOS
git lfs install

# Track archivos .pen
git lfs track "*.pen"
git add .gitattributes

# Commit normalmente
git add designs/*.pen
git commit -m "Add Pencil design files with LFS"
```

---

## 📸 Alternativa: Screenshots Como Documentación

Si no puedes obtener los `.pen`, usa screenshots:

### Screenshots Sugeridos

**Homepage**:
- `homepage-full.png` - Vista completa scrolleable
- `homepage-header.png` - Header y hero section
- `homepage-carousels.png` - Ejemplo de carruseles
- `homepage-footer.png` - Footer

**Event Detail**:
- `event-detail-full.png` - Vista completa
- `event-detail-favorite.png` - Botón de favorito en acción
- `event-detail-sidebar.png` - Hotel booking y tips
- `event-detail-mobile.png` - Vista responsive

### Cómo Tomarlos

**macOS**:
```
CMD + SHIFT + 4 = Screenshot de selección
CMD + SHIFT + 5 = Screenshot tool (scrolling capture)
```

**Windows**:
```
WIN + SHIFT + S = Snipping Tool
```

**Chrome DevTools**:
```
F12 > CMD+SHIFT+P > "Capture full size screenshot"
```

---

## ✅ Estado Actual

- ✅ Implementación HTML/CSS/JS completa
- ✅ Documentación de diseño detallada
- ✅ Sistema de diseño especificado
- ⏳ Archivos `.pen` - Pendiente de exportación manual

**Recomendación**: Priorizar screenshots sobre archivos `.pen` si no están disponibles. Las especificaciones en `designs/README.md` son suficientes para recrear los diseños.

---

**Notas Técnicas**: Los diseños se crearon usando Pencil MCP batch_design operations con exactitud pixel-perfect. La implementación HTML/CSS es fiel 1:1 al diseño original.
