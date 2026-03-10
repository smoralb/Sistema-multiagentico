# 🚀 Sistema Multiagente - Versión Minimal

Sistema autónomo de 7 agentes especializados que automatiza el desarrollo de software completo con validación en cada etapa.

---

## 📦 ¿Qué Contiene Esta Versión?

**SOLO lo esencial para usar el sistema:**

```
sistema-multiagentico/
├── core/
│   ├── 00-DOCUMENT-PRODUCT-STANDARDS.md  ← CONFIGURA ESTO PRIMERO
│   └── agentes/                           ← 7 agentes especializados
│       ├── 01-AGENTE-COORDINADOR.md
│       ├── 02-AGENTE-PLANIFICADOR.md
│       ├── 03-AGENTE-VALIDADOR.md
│       ├── 04-AGENTE-DISENADOR.md
│       ├── 05-AGENTE-DESARROLLADOR.md
│       ├── 06-AGENTE-TESTING.md
│       └── 07-AGENTE-DOCUMENTACION.md
├── outputs/                               ← Se generan aquí automáticamente
│   ├── estados/
│   ├── planes/
│   ├── disenos/
│   └── reportes/
└── README.md                              ← Este archivo
```

---

## ⚡ INICIO RÁPIDO (5 minutos)

### **Caso de Uso: Implementar una Landing Page Corporativa Completa**

#### **PASO 1: Configura los Estándares (2 min)**

Edita `core/00-DOCUMENT-PRODUCT-STANDARDS.md` y completa:

```bash
vi core/00-DOCUMENT-PRODUCT-STANDARDS.md
```

**Completa mínimo estas secciones:**
- **Línea 15-30**: Stack tecnológico (React, Next.js, Tailwind CSS, TypeScript, etc.)
- **Línea 70-100**: Estándares de código (camelCase, componentización, max 200 líneas por componente, etc.)
- **Línea 150-180**: Cobertura de tests (90% componentes críticos, 80% utils)

#### **PASO 2: Solicitud al Coordinador (1 min)**

Envía esta solicitud al **Agente Coordinador**:

```
"Implementa una landing page corporativa moderna y responsiva para una empresa de tecnología.

Requisitos:
- Hero section con CTA (Call to Action)
- Sección de servicios (mínimo 4 servicios)
- Sección 'Sobre Nosotros' con timeline
- Portafolio/proyectos con filtros
- Sección de testimonios (carousel)
- Formulario de contacto funcional con validación
- Footer con redes sociales y mapa del sitio
- Navegación sticky con scroll suave
- Modo oscuro/claro
- Animaciones y transiciones suaves
- SEO optimizado
- Performance (Lighthouse score >90)
- 100% responsive (mobile-first)
- Accesibilidad WCAG 2.1 nivel AA

Stack: React + Next.js 14 + TypeScript + Tailwind CSS + Framer Motion
"
```

#### **PASO 3: El Sistema Trabaja Automáticamente (2 min para configurar, ~8 horas de trabajo automatizado)**

El **Coordinador** iniciará el flujo automático:

```
1. COORDINADOR: Analiza la solicitud
   └─> Crea: outputs/estados/estado-landing-corporativa.md

2. PLANIFICADOR: Genera plan detallado (13 secciones)
   └─> Crea: outputs/planes/plan-landing-corporativa.md
   └─> Desglose: 8 componentes principales, 15 componentes reutilizables

3. VALIDADOR: Revisa el plan
   └─> ✅ Aprobado o ❌ Rechazado con feedback

4. DISEÑADOR: Diseño técnico completo
   └─> Crea: outputs/disenos/diseno-landing-corporativa.md
   └─> Crea: outputs/disenos/adr-001-nextjs-vs-vite.md
   └─> Crea: outputs/disenos/adr-002-tailwind-vs-styled-components.md
   └─> Arquitectura de componentes, estructura de carpetas, design system

5. VALIDADOR: Revisa el diseño
   └─> ✅ Aprobado

6. DESARROLLADOR: Implementa código + tests unitarios
   └─> Estructura Next.js 14 con App Router
   └─> Componentes React reutilizables
   └─> Hooks personalizados (useScroll, useTheme, useForm)
   └─> Utilities y helpers
   └─> Coverage: 85%+

7. VALIDADOR: Revisa código
   └─> ✅ Aprobado

8. TESTER: Suite completa de tests
   └─> Crea: outputs/reportes/reporte-testing-landing.md
   └─> Tests: Unit (Jest), Component (React Testing Library), E2E (Playwright)
   └─> Tests de accesibilidad (axe-core)
   └─> Performance tests (Lighthouse CI)
   └─> Tests visuales (Chromatic/Percy)

9. VALIDADOR: Revisa tests
   └─> ✅ Aprobado

10. DOCUMENTADOR: Documentación completa
    └─> README con setup instructions
    └─> Guía de componentes (Storybook)
    └─> Guía de estilo y design tokens
    └─> Documentación de deployment

11. COORDINADOR: Revisión final
    └─> ✅ COMPLETADO
```

#### **PASO 4: Monitorea el Progreso**

Durante la ejecución, consulta:

```bash
# Ver estado actual del proyecto
cat outputs/estados/estado-landing-corporativa.md

# Ver plan de implementación
cat outputs/planes/plan-landing-corporativa.md

# Ver diseño técnico
cat outputs/disenos/diseno-landing-corporativa.md

# Ver arquitectura de componentes
cat outputs/disenos/arquitectura-componentes.md

# Ver reporte de testing
cat outputs/reportes/reporte-testing-landing.md
```

---

## 🎯 Los 7 Agentes

### 1. **Coordinador** - El Director
- **Input**: Solicitud del usuario
- **Output**: `outputs/estados/estado-[feature].md`
- **Función**: Orquesta todo el flujo, gestiona feedback loops

### 2. **Planificador** - El Estratega
- **Input**: Solicitud + Estándares
- **Output**: `outputs/planes/plan-[feature].md`
- **Función**: Analiza requisitos, identifica dependencias, evalúa riesgos

### 3. **Validador** - El Guardian de Calidad
- **Input**: Output de cualquier agente
- **Output**: ✅ Aprobado / ❌ Rechazado + Feedback
- **Función**: Valida contra estándares, genera feedback accionable

### 4. **Diseñador** - El Arquitecto
- **Input**: Plan aprobado
- **Output**: `outputs/disenos/diseno-[feature].md` + ADRs
- **Función**: Define arquitectura técnica, patrones, interfaces

### 5. **Desarrollador** - El Constructor
- **Input**: Diseño aprobado
- **Output**: Código + Tests unitarios
- **Función**: Implementa siguiendo estándares, auto-revisa código

### 6. **Tester** - El Inspector
- **Input**: Código implementado
- **Output**: `outputs/reportes/reporte-testing-[feature].md` + Suite de tests
- **Función**: Tests completos (unit, integration, e2e, security, performance)

### 7. **Documentador** - El Escritor
- **Input**: Feature completada
- **Output**: Docs técnicas, API docs, ADRs, guides
- **Función**: Mantiene documentación actualizada y completa

---

## 🔄 Flujo de Trabajo

```
Usuario solicita feature
    ↓
[Coordinador] Analiza y crea estado
    ↓
[Planificador] Crea plan detallado
    ↓
[Validador] ✅/❌ (max 2 iteraciones)
    ↓
[Diseñador] Diseño técnico
    ↓
[Validador] ✅/❌
    ↓
[Desarrollador] Código + Tests
    ↓
[Validador] ✅/❌
    ↓
[Tester] Suite completa tests
    ↓
[Validador] ✅/❌
    ↓
[Documentador] Docs completas
    ↓
[Coordinador] Revisión final
    ↓
✅ COMPLETADO
```

**Sistema de Validación:**
- ✅ **APROBADO**: Continúa
- ⚠️ **APROBADO CON OBSERVACIONES**: Continúa con sugerencias
- ❌ **RECHAZADO**: Vuelve al agente con feedback (máx 2 veces)
- 🔴 **Si falla 2 veces**: Escala al usuario

---

## 📋 Cómo Funciona

### **Cada Agente es un Documento Markdown**

Los agentes NO son código ejecutable, son **especificaciones en markdown** que:
1. Defines qué hace el agente
2. Qué inputs recibe
3. Qué outputs produce
4. Qué criterios debe seguir
5. Cómo interactúa con otros agentes

**Tú o tu LLM lee estos documentos** y ejecuta las instrucciones.

### **Ejemplo de Uso con Claude/GPT**

```
# Prompt a tu LLM:
"Actúa como el Agente Coordinador definido en core/agentes/01-AGENTE-COORDINADOR.md.

Consulta los estándares en core/00-DOCUMENT-PRODUCT-STANDARDS.md.

Solicitud del usuario: [tu solicitud]

Ejecuta el flujo según tu definición."
```

El LLM leerá su definición, consultará los estándares, y ejecutará su rol.

---

## 🛠️ Configuración del Documento de Estándares

**Archivo crítico**: `core/00-DOCUMENT-PRODUCT-STANDARDS.md`

Este archivo es consultado por **TODOS los agentes** en **CADA fase**.

### **Qué Configurar (Mínimo Indispensable)**

#### 1. **Stack Tecnológico** (~Línea 15-30)
```markdown
## Stack Tecnológico

### Frontend
- **Framework**: Next.js 14+ con App Router
- **Librería UI**: React 18+
- **Lenguaje**: TypeScript 5.0+
- **Estilos**: Tailwind CSS 3.4+
- **Animaciones**: Framer Motion
- **Iconos**: React Icons / Heroicons

### Testing
- **Unit tests**: Jest + React Testing Library
- **E2E tests**: Playwright
- **Visual tests**: Chromatic (opcional)
- **Accesibilidad**: axe-core
```

#### 2. **Estándares de Código** (~Línea 70-100)
```markdown
## Estándares de Código

### Nomenclatura
- Componentes: PascalCase (Button.tsx, HeroSection.tsx)
- Hooks personalizados: camelCase con prefijo 'use' (useScroll, useTheme)
- Utilities: camelCase (formatDate, validateEmail)
- Constantes: UPPER_SNAKE_CASE (API_URL, MAX_WIDTH)
- Archivos CSS: kebab-case (global-styles.css)

### Límites
- Máximo 200 líneas por componente
- Máximo 5 props por componente (luego usar objeto config)
- Componentes reutilizables en /components/common/
- Páginas en /app/ (Next.js App Router)
```

#### 3. **Cobertura de Tests** (~Línea 150-180)
```markdown
## Estándares de Testing

### Cobertura Mínima
- Componentes críticos (Hero, Form, Checkout): 95%
- Componentes reutilizables: 90%
- Hooks personalizados: 95%
- Utils/helpers: 85%
- Páginas: 80%

### Accesibilidad
- Lighthouse Accessibility score: >90
- Cumplimiento WCAG 2.1 nivel AA
- Tests automatizados con axe-core
```

---

## 🎬 Otros Casos de Uso

### **Caso 2: Bug Fix**
```
"Fix: El formulario de contacto permite envíos duplicados

Reproduce: Hacer click rápido 2 veces en botón 'Enviar'
Resultado actual: Se envían 2 emails duplicados
Resultado esperado: Solo 1 envío, botón deshabilitado durante el proceso
"
```

**Flujo automatizado** (más corto para bugs):
1. Planificador: Análisis del bug + estrategia
2. Desarrollador: Implementa fix (estado de loading + debounce)
3. Tester: Tests de regresión + caso específico
4. Documentador: Actualiza troubleshooting

**Tiempo**: ~2 horas

---

### **Caso 3: Nueva Feature Compleja**
```
"Implementa un blog multi-idioma con CMS headless

Requisitos:
- Integración con Contentful/Sanity CMS
- Sistema de i18n (Español, Inglés, Portugués)
- Categorías y tags dinámicos
- Búsqueda en tiempo real con Algolia
- Sistema de comentarios con moderación
- Related posts con IA
- RSS feed automático
- Sitemap dinámico
- Open Graph y Twitter Cards
- Tiempo de lectura estimado
- Modo lectura (sin distracciones)
- Compartir en redes sociales
- Newsletter subscription integrado

Stack: Next.js 14 + TypeScript + Contentful + Algolia + Tailwind
"
```

**Flujo completo** (todas las fases):
1-11. Flujo completo con validaciones

**Tiempo**: ~16 horas de trabajo automatizado

---

### **Caso 4: E-commerce Landing Page**
```
"Implementa una landing page de e-commerce para lanzamiento de producto

Requisitos:
- Hero con countdown para lanzamiento
- Galería de productos (carousel + zoom)
- Sección de características con iconos animados
- Pricing table con comparación
- FAQs acordeón
- Early bird signup form
- Instagram feed integrado
- Video showcase (YouTube embed)
- Trust badges y testimonios
- Sticky 'Pre-order Now' button
- Pixel de Facebook y Google Analytics

Stack: Next.js 14 + TypeScript + Tailwind + Stripe (checkout básico)
"
```

**Tiempo**: ~10 horas de trabajo automatizado

---

## 📊 Ventajas del Sistema

✅ **Autonomía**: 80% menos intervención humana
✅ **Calidad**: Validación automática en cada fase
✅ **Consistencia**: Estándares aplicados siempre
✅ **Trazabilidad**: Todo documentado (estados, planes, diseños, decisiones)
✅ **Detección temprana**: Problemas encontrados antes de implementar
✅ **Documentación**: Se genera automáticamente

---

## 🔧 Comandos del Coordinador

Durante la ejecución, puedes enviar comandos:

- `/estado` - Ver estado actual detallado
- `/continuar` - Continuar desde pausa
- `/pausa` - Pausar el flujo
- `/reintentar [paso]` - Reintentar paso específico
- `/historial` - Ver historial de decisiones

---

## 📝 Outputs Generados

Todos los archivos se generan en `outputs/`:

| Carpeta | Contenido | Generado Por |
|---------|-----------|--------------|
| `estados/` | Estado del proyecto en tiempo real | Coordinador |
| `planes/` | Planes de implementación (13 secciones) | Planificador |
| `disenos/` | Diseños técnicos + ADRs | Diseñador |
| `reportes/` | Reportes de testing + validación | Tester + Validador |

---

## ⚠️ Notas Importantes

### **Este NO es Software Tradicional**

No es un programa que ejecutas. Es un **framework de prompts estructurados** que:
- Define roles de agentes
- Establece flujos de trabajo
- Aplica estándares consistentemente
- Genera outputs documentados

### **Requiere un LLM**

Necesitas usar un LLM (Claude, GPT-4, etc.) para:
1. Leer las definiciones de agentes
2. Ejecutar sus instrucciones
3. Generar los outputs

### **Es Modular**

Puedes:
- ✅ Usar solo algunos agentes
- ✅ Modificar sus definiciones
- ✅ Adaptar los estándares
- ✅ Cambiar el flujo

---

## 🚀 Empezar AHORA

```bash
# 1. Configura estándares
vi core/00-DOCUMENT-PRODUCT-STANDARDS.md

# 2. Lee la definición del Coordinador
cat core/agentes/01-AGENTE-COORDINADOR.md

# 3. Envía tu solicitud al LLM con el prompt:
"Actúa como el Agente Coordinador según la definición en core/agentes/01-AGENTE-COORDINADOR.md.

Consulta los estándares en core/00-DOCUMENT-PRODUCT-STANDARDS.md.

Solicitud: Implementa una landing page corporativa moderna y responsiva.

Requisitos:
- Hero section con CTA
- Sección de servicios (4 servicios)
- Portafolio con filtros
- Testimonios carousel
- Formulario de contacto con validación
- Footer completo
- Navegación sticky
- Modo oscuro/claro
- 100% responsive
- SEO optimizado

Stack: React + Next.js 14 + TypeScript + Tailwind CSS"

# 4. Monitorea los outputs en:
ls -la outputs/estados/
ls -la outputs/planes/
ls -la outputs/disenos/
```

---

## 📚 Leer Más

Si necesitas la versión completa con:
- Guías detalladas
- Ejemplos completos
- Scripts de automatización
- Documentación extensa

**Cambia a la rama `main`**:
```bash
git checkout main
```

---

**Versión**: Minimal 1.0
**Para**: Empezar rápido sin complejidad
**Contiene**: Solo lo esencial para usar el sistema

¿Preguntas? Lee las definiciones de agentes en `core/agentes/`
