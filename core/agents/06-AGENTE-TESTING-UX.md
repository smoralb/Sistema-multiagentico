# 🧪 Agente de Testing UX/Frontend

## Extensión del Agente de Testing para Proyectos Web

Este documento extiende `06-AGENTE-TESTING.md` con tests específicos de UX y frontend que simulan el uso real de un usuario.

---

## 🎯 Objetivo

**Detectar problemas de UX que solo se ven usando la web como un usuario real.**

Ejemplos de problemas a detectar:
- ❌ No se puede hacer scroll vertical
- ❌ Elementos fuera de la pantalla (overflow)
- ❌ Botones no clickeables
- ❌ Forms que no se pueden enviar
- ❌ Animaciones que bloquean interacción
- ❌ Responsive que no funciona
- ❌ Contraste de colores bajo
- ❌ Navegación rota

---

## 🛠️ Herramientas para Tests UX

### Opción 1: Playwright (Recomendado para E2E reales)

```bash
npm install -D @playwright/test
npx playwright install chromium
```

**Ventajas:**
- ✅ Simula usuario real (clicks, scroll, typing)
- ✅ Funciona con HTML puro (no necesita servidor)
- ✅ Screenshots automáticos
- ✅ Tests de accesibilidad integrados
- ✅ Multi-browser (Chrome, Firefox, Safari)

### Opción 2: Manual Testing Checklist

Para proyectos HTML puro sin build, usar checklist manual es válido.

---

## 📋 Checklist de Tests UX Obligatorios

### 1. Tests de Scroll y Navegación

```yaml
test_scroll_vertical:
  - Abrir página en navegador
  - Verificar que hay contenido más allá del viewport
  - Intentar scroll con:
    - Mouse wheel
    - Scroll bar
    - Teclas (PageDown, Arrows)
  - ❌ FAIL si: No se puede hacer scroll cuando hay más contenido
  - ✅ PASS si: Scroll funciona o todo el contenido es visible

test_scroll_horizontal:
  - Verificar que NO hay scroll horizontal inesperado
  - Revisar que ningún elemento se sale del viewport
  - ❌ FAIL si: Hay overflow-x visible
  - ✅ PASS si: Todo cabe en el ancho del viewport

test_smooth_scroll:
  - Hacer click en links internos (#section)
  - Verificar que el scroll es suave
  - ❌ FAIL si: Scroll es brusco o no funciona
  - ✅ PASS si: scroll-behavior: smooth funciona
```

### 2. Tests de Interacción Real

```yaml
test_buttons_clickeable:
  - Localizar todos los botones y links
  - Verificar que tienen cursor: pointer
  - Hacer click en cada uno
  - Verificar que responden (hover, click)
  - ❌ FAIL si: Botón no responde o está detrás de otro elemento
  - ✅ PASS si: Todos los botones son clickeables

test_forms_funcionales:
  - Localizar todos los forms
  - Llenar campos con datos válidos
  - Intentar submit
  - Verificar validación HTML5
  - ❌ FAIL si: Form no se envía o validación no funciona
  - ✅ PASS si: Form funciona correctamente

test_hover_effects:
  - Pasar mouse sobre elementos interactivos
  - Verificar efectos visuales (color, transform, etc.)
  - ❌ FAIL si: No hay feedback visual
  - ⚠️ WARNING si: Efecto demasiado sutil
  - ✅ PASS si: Hover effect claro y funcional
```

### 3. Tests de Layout y Posicionamiento

```yaml
test_elementos_visibles:
  - Verificar que todos los elementos importantes están en viewport
  - Revisar que nada está oculto por overflow: hidden
  - ❌ FAIL si: Contenido importante no visible
  - ✅ PASS si: Todo el contenido es accesible

test_z_index_correcto:
  - Verificar que elementos interactivos están en frente
  - Revisar que modals/overlays cubren el contenido
  - ❌ FAIL si: Elementos importantes cubiertos
  - ✅ PASS si: Capas correctamente ordenadas

test_spacing_adecuado:
  - Verificar que hay espacio entre elementos
  - Revisar que textos no se solapan
  - ❌ FAIL si: Elementos se superponen
  - ✅ PASS si: Spacing correcto
```

### 4. Tests Responsive REALES

```yaml
test_mobile_real:
  viewport: 375x667 (iPhone SE)
  pasos:
    - Abrir página
    - Verificar que contenido se ve completo
    - Hacer scroll vertical
    - Hacer click en botones
    - Verificar que no hay scroll horizontal
    - Verificar que textos son legibles (no muy pequeños)
  ❌ FAIL si: Overflow, textos pequeños, elementos inaccesibles
  ✅ PASS si: Experiencia mobile completa y funcional

test_tablet_real:
  viewport: 768x1024 (iPad)
  pasos: [Similar a mobile]

test_desktop_real:
  viewport: 1920x1080 (Desktop común)
  pasos: [Similar pero verificar uso del espacio]
```

### 5. Tests de Animaciones e Interacción

```yaml
test_animaciones_no_bloquean:
  - Ejecutar animaciones de entrada
  - Intentar interactuar inmediatamente
  - Verificar que botones son clickeables durante animación
  - ❌ FAIL si: Animación bloquea interacción
  - ✅ PASS si: Se puede interactuar mientras anima

test_loading_states:
  - Verificar que no hay "flash of unstyled content"
  - Revisar que animaciones no causan layout shifts
  - ❌ FAIL si: CLS > 0.1
  - ✅ PASS si: CLS = 0

test_60fps:
  - Abrir DevTools Performance
  - Hacer scroll en la página
  - Verificar FPS constantes
  - ❌ FAIL si: FPS < 30
  - ⚠️ WARNING si: FPS 30-50
  - ✅ PASS si: FPS >= 55
```

### 6. Tests de Accesibilidad Real

```yaml
test_keyboard_navigation:
  - Cerrar mouse/trackpad
  - Navegar con Tab
  - Verificar focus visible
  - Presionar Enter en botones
  - ❌ FAIL si: No se puede navegar con teclado
  - ✅ PASS si: Navegación completa por teclado

test_screen_reader_friendly:
  - Verificar estructura HTML semántica
  - Revisar que imágenes tienen alt
  - Verificar headings jerárquicos (h1, h2, h3)
  - ❌ FAIL si: Estructura no semántica
  - ✅ PASS si: HTML semántico correcto

test_contraste_colores:
  - Usar herramienta de contraste
  - Verificar ratio mínimo 4.5:1 (AA) o 7:1 (AAA)
  - ❌ FAIL si: Contraste < 4.5:1
  - ⚠️ WARNING si: Contraste 4.5-7:1
  - ✅ PASS si: Contraste >= 7:1
```

### 7. Tests de Performance UX

```yaml
test_first_contentful_paint:
  - Abrir página en network throttling "Fast 3G"
  - Medir tiempo hasta ver primer contenido
  - Target: < 2s
  - ❌ FAIL si: > 3s
  - ⚠️ WARNING si: 2-3s
  - ✅ PASS si: < 2s

test_time_to_interactive:
  - Medir tiempo hasta poder interactuar
  - Target: < 3s
  - ❌ FAIL si: > 5s
  - ⚠️ WARNING si: 3-5s
  - ✅ PASS si: < 3s

test_no_janky_scrolling:
  - Hacer scroll rápido por toda la página
  - Verificar que no hay "saltos" o lentitud
  - ❌ FAIL si: Scroll se traba
  - ✅ PASS si: Scroll suave
```

---

## 🤖 Script de Test Automatizado (Playwright)

### Ejemplo: Detectar Problema de Scroll

```javascript
// test-scroll.spec.js
const { test, expect } = require('@playwright/test');

test('página permite scroll vertical cuando tiene contenido largo', async ({ page }) => {
  // Abrir página
  await page.goto('file:///path/to/landing.html');

  // Obtener altura total vs altura del viewport
  const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
  const viewportHeight = await page.viewportSize().height;

  // Si hay contenido más allá del viewport
  if (bodyHeight > viewportHeight) {
    // Intentar scroll
    const scrollBefore = await page.evaluate(() => window.scrollY);
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.waitForTimeout(100);
    const scrollAfter = await page.evaluate(() => window.scrollY);

    // ❌ FAIL si no se movió el scroll
    expect(scrollAfter).toBeGreaterThan(scrollBefore);
  }
});

test('no hay overflow horizontal inesperado', async ({ page }) => {
  await page.goto('file:///path/to/landing.html');

  const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
  const viewportWidth = await page.viewportSize().width;

  // ❌ FAIL si hay scroll horizontal
  expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 5); // +5px tolerancia
});

test('todos los botones son clickeables', async ({ page }) => {
  await page.goto('file:///path/to/landing.html');

  // Localizar todos los botones y links
  const buttons = await page.locator('button, a[href], input[type="submit"]').all();

  for (const button of buttons) {
    // Verificar que es visible
    await expect(button).toBeVisible();

    // Verificar que se puede hacer click
    await expect(button).toBeEnabled();

    // Verificar cursor pointer
    const cursor = await button.evaluate(el =>
      window.getComputedStyle(el).cursor
    );
    expect(cursor).toBe('pointer');
  }
});

test('form funciona correctamente', async ({ page }) => {
  await page.goto('file:///path/to/landing.html');

  // Localizar form
  const emailInput = page.locator('input[type="email"]');
  const submitButton = page.locator('button[type="submit"]');

  // Verificar que existen
  await expect(emailInput).toBeVisible();
  await expect(submitButton).toBeVisible();

  // Llenar email
  await emailInput.fill('test@example.com');

  // Click en submit
  await submitButton.click();

  // Verificar que algo pasó (alert, redirect, etc.)
  // Este test depende de la implementación específica
});

test('responsive mobile funciona', async ({ page }) => {
  // Cambiar a viewport mobile
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('file:///path/to/landing.html');

  // Verificar que no hay overflow horizontal
  const hasHorizontalScroll = await page.evaluate(() =>
    document.body.scrollWidth > window.innerWidth
  );
  expect(hasHorizontalScroll).toBe(false);

  // Verificar que elementos importantes son visibles
  const hero = page.locator('.hero-title');
  await expect(hero).toBeVisible();

  // Verificar que textos son legibles (no muy pequeños)
  const fontSize = await hero.evaluate(el =>
    window.getComputedStyle(el).fontSize
  );
  const fontSizeNum = parseInt(fontSize);
  expect(fontSizeNum).toBeGreaterThanOrEqual(16); // Mínimo 16px en mobile
});
```

---

## 📝 Reporte de Testing UX

### Formato del Reporte

```markdown
# 🧪 Reporte de Testing UX: [Nombre del Proyecto]

## 1. Resumen de Tests UX

| Categoría | Tests | Pasados | Fallidos | Estado |
|-----------|-------|---------|----------|--------|
| Scroll & Navegación | 3 | 2 | 1 | ❌ |
| Interacción | 5 | 5 | 0 | ✅ |
| Layout | 4 | 4 | 0 | ✅ |
| Responsive | 3 | 3 | 0 | ✅ |
| Animaciones | 3 | 3 | 0 | ✅ |
| Accesibilidad | 4 | 3 | 1 | ⚠️ |
| Performance UX | 3 | 3 | 0 | ✅ |
| **TOTAL** | **25** | **23** | **2** | ⚠️ |

## 2. Problemas Críticos Encontrados

### ❌ CRÍTICO: No se puede hacer scroll vertical

**Archivo**: `landing.html`
**Línea CSS**: body { overflow: hidden; }

**Descripción:**
La página tiene contenido que se extiende más allá del viewport (3000px de alto), pero el CSS tiene `overflow: hidden` en el body, impidiendo el scroll.

**Como se detectó:**
- Test manual: Intenté hacer scroll con mouse wheel → no funcionó
- Test automatizado: `bodyHeight (3000px) > viewportHeight (800px)` pero `scrollY` no cambia

**Impacto:**
🔴 ALTO - Usuario no puede ver el 70% del contenido de la página

**Solución:**
```css
/* Cambiar de: */
body { overflow: hidden; }

/* A: */
body { overflow-y: auto; }
/* o simplemente remover la propiedad */
```

**Verificación post-fix:**
- ✅ Scroll vertical funciona
- ✅ Todo el contenido es accesible
- ✅ Scroll smooth funciona con links internos

---

### ⚠️ WARNING: Contraste bajo en labels secundarios

**Archivo**: `landing.html`
**Elemento**: `.info-label` (color: #999999 en #F5F1ED)

**Ratio de contraste:** 3.2:1
**Mínimo AA:** 4.5:1
**Estado:** ❌ No cumple WCAG AA

**Impacto:**
🟡 MEDIO - Usuarios con problemas visuales tendrán dificultad leyendo

**Solución:**
```css
.info-label {
  color: #666666; /* Ratio 7.1:1 - cumple AAA */
}
```

## 3. Tests Pasados con Éxito

### ✅ Interacción Real
- Todos los botones son clickeables
- Hover effects funcionan
- Form validación funciona
- Links internos funcionan
- Cursor pointer visible

### ✅ Responsive
- Mobile (375px): Todo visible, sin overflow horizontal
- Tablet (768px): Layout se adapta correctamente
- Desktop (1920px): Uso correcto del espacio

### ✅ Performance UX
- First Paint: 0.2s ✅
- Time to Interactive: 0.3s ✅
- Scroll performance: 60fps ✅

## 4. Recomendaciones

### Alta Prioridad
1. 🔴 Fix overflow: hidden en body (crítico)
2. 🟡 Mejorar contraste de labels

### Media Prioridad
3. Añadir focus visible más claro
4. Considerar reducir tamaño de assets

## 5. Comandos para Reproducir

```bash
# Tests automatizados (si usas Playwright)
npx playwright test test-scroll.spec.js

# Tests manuales
open landing.html
# Intentar scroll con mouse wheel
# Verificar en mobile: DevTools → Toggle Device Toolbar
```

---

**Tester UX**: Agente de Testing
**Estado**: ⚠️ PASS WITH CRITICAL WARNINGS
**Recomendación**: Fix problemas críticos antes de deploy
**Fecha**: [timestamp]
```

---

## 🎯 Protocolo de Testing UX

### Cuándo Ejecutar Tests UX

**SIEMPRE** después de:
1. Implementar nueva página HTML
2. Cambiar CSS que afecta layout
3. Añadir animaciones
4. Modificar responsive breakpoints

### Proceso Recomendado

```
1. Desarrollador termina implementación
   ↓
2. Navegador se abre automáticamente (verificación visual)
   ↓
3. Agente de Testing ejecuta:
   - Checklist manual UX
   - (Opcional) Tests automatizados Playwright
   ↓
4. Genera reporte con problemas encontrados
   ↓
5. Si hay problemas CRÍTICOS:
   → Desarrollador fix
   → Re-test
   ↓
6. Si todo OK: ✅ APROBADO
```

---

## 🛠️ Setup Playwright (Opcional)

Para proyectos que quieran tests automatizados:

```bash
# En la raíz del proyecto
npm init -y
npm install -D @playwright/test
npx playwright install chromium

# Crear carpeta de tests
mkdir -p tests/ux

# Crear config
cat > playwright.config.js <<EOF
module.exports = {
  testDir: './tests/ux',
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
  },
};
EOF

# Ejecutar tests
npx playwright test
```

---

## 📊 Métricas de Éxito UX

| Métrica | Target | Crítico si |
|---------|--------|------------|
| Scroll funciona | 100% | No funciona |
| Botones clickeables | 100% | < 90% |
| Forms funcionan | 100% | < 100% |
| Sin overflow-x | 100% | Existe overflow |
| Contraste AA | 100% | < 80% |
| Mobile usable | 100% | < 95% |
| Performance 60fps | 90% | < 30fps |
| Keyboard nav | 100% | < 80% |

---

## 🎯 Resumen para el Agente

**AL TESTEAR PROYECTOS WEB HTML:**

1. **OBLIGATORIO**: Checklist manual UX (scroll, clicks, forms, responsive)
2. **RECOMENDADO**: Tests automatizados Playwright
3. **CRÍTICO**: Detectar problemas que bloquean uso (scroll, overflow, elementos inaccesibles)
4. **REPORTAR**: Todos los problemas encontrados con severidad clara
5. **NO APROBAR**: Si hay problemas críticos de UX

**Prioridad: UX funcional > Tests unitarios para proyectos web**

---

**Agente**: Testing UX/Frontend
**Versión**: 2.0
**Complementa**: 06-AGENTE-TESTING.md
**Prioridad**: Crítica para proyectos web
