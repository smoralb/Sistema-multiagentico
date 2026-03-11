# 🚀 Sistema Multiagente - Versión Minimal

Sistema autónomo de **8 agentes especializados** que automatiza el desarrollo de software completo con validación en cada etapa. Incluye un **Agente Arquitecto** que toma decisiones técnicas inteligentes basándose en la complejidad del proyecto.

---

## 📦 ¿Qué Contiene Esta Versión?

**Rama MINIMAL - SOLO lo esencial (17 archivos):**

```
sistema-multiagentico/
│
├── README.md                                ← Este archivo (guía completa)
├── .gitignore                               ← Configuración Git
│
├── core/
│   ├── 00-DOCUMENT-PRODUCT.md              ← Template: QUÉ construir
│   └── agents/                              ← 8 agentes especializados
│       ├── 01-AGENTE-COORDINADOR.md
│       ├── 08-AGENTE-ARQUITECTO.md         ← NUEVO: Decide stack/arquitectura
│       ├── 02-AGENTE-PLANIFICADOR.md
│       ├── 03-AGENTE-VALIDADOR.md
│       ├── 04-AGENTE-DISENADOR.md
│       ├── 05-AGENTE-DESARROLLADOR.md
│       ├── 06-AGENTE-TESTING.md
│       └── 07-AGENTE-DOCUMENTACION.md
│
└── outputs/                                 ← Se generan aquí automáticamente
    ├── states/
    ├── plans/
    ├── designs/
    └── reports/
```

**Archivo Opcional** (crear solo si tienes restricciones técnicas):
- `core/01-DOCUMENT-TECHNICAL-CONSTRAINTS.md` - Solo si hay techs prohibidas/requeridas

---

## ℹ️ Sobre Esta Rama

**Rama**: `minimal` (versión simplificada)
**Propósito**: Solo archivos esenciales para usar el sistema
**Total**: 17 archivos base + 1 opcional = 18 archivos máximo

### ¿Cuándo usar `minimal`?
✅ Quieres empezar rápido sin documentación extensa
✅ Solo necesitas las definiciones de agentes
✅ Prefieres simplicidad sobre guías detalladas

### ¿Cuándo usar `main`?
✅ Necesitas guías paso a paso
✅ Quieres ejemplos completos
✅ Necesitas scripts de automatización
✅ Quieres ver CHANGELOG y guías de migración

**Cambiar a rama completa:**
```bash
git checkout main
```

---

## ⚡ INICIO RÁPIDO (5 minutos)

### **Caso de Uso: Implementar una Landing Page Corporativa Completa**

#### **PASO 1: Define el Producto (2 min)**

Edita `core/00-DOCUMENT-PRODUCT.md` y describe QUÉ quieres construir:

```bash
vi core/00-DOCUMENT-PRODUCT.md
```

**Completa estas secciones**:
- **Visión del Producto**: Qué problema resuelve, para quién, propuesta de valor
- **Funcionalidades**: Hero, servicios, portafolio, formulario, etc.
- **Requisitos no funcionales**: Performance, SEO, accesibilidad
- **Experiencia de usuario**: Flujos principales, interacciones clave

**Nota**: NO especifiques tecnologías aquí. El **Agente Arquitecto** decidirá el stack basándose en la complejidad.

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
   └─> Crea: outputs/states/estado-landing-corporativa.md
   └─> Determina: Tipo de proyecto, complejidad estimada

2. 🆕 ARQUITECTO: Toma decisiones técnicas inteligentes
   └─> Lee: core/00-DOCUMENT-PRODUCT.md (requisitos)
   └─> Lee: core/01-DOCUMENT-TECHNICAL-CONSTRAINTS.md (restricciones si existen)
   └─> Analiza: Complejidad del proyecto (Baja/Media/Alta/Muy Alta)
   └─> Decide: Stack tecnológico apropiado
   └─> Decide: React + Next.js 14 + TypeScript + Tailwind CSS
   └─> Decide: Arquitectura (Feature-based, patrones a usar)
   └─> Justifica: Por qué eligió este stack vs alternativas
   └─> Crea: outputs/designs/arquitectura-landing-corporativa.md
   └─> Crea: ADRs para decisiones críticas

3. VALIDADOR: Revisa arquitectura
   └─> ✅ Aprobado o ❌ Rechazado con feedback

4. PLANIFICADOR: Genera plan detallado usando la arquitectura
   └─> Crea: outputs/plans/plan-landing-corporativa.md
   └─> Desglose: Tareas específicas según stack elegido
   └─> Usa: Componentes React, estructura Next.js definida

5. VALIDADOR: Revisa el plan
   └─> ✅ Aprobado o ❌ Rechazado con feedback

6. DISEÑADOR: Diseño técnico detallado
   └─> Crea: outputs/designs/diseno-landing-corporativa.md
   └─> Define: Arquitectura de componentes
   └─> Define: Estructura de carpetas
   └─> Define: Design system

7. VALIDADOR: Revisa el diseño
   └─> ✅ Aprobado

8. DESARROLLADOR: Implementa código + tests unitarios
   └─> Usa: Stack decidido por Arquitecto
   └─> Implementa: Componentes React reutilizables
   └─> Crea: Hooks personalizados (useScroll, useTheme, useForm)
   └─> Coverage: 85%+

9. VALIDADOR: Revisa código
   └─> ✅ Aprobado

10. TESTER: Suite completa de tests
    └─> Crea: outputs/reports/reporte-testing-landing.md
    └─> Tests: Unit (Jest), Component (RTL), E2E (Playwright)
    └─> Tests de accesibilidad (axe-core)
    └─> Performance tests (Lighthouse CI)

11. VALIDADOR: Revisa tests
    └─> ✅ Aprobado

12. DOCUMENTADOR: Documentación completa
    └─> README con setup instructions
    └─> Guía de componentes
    └─> Documentación de deployment

13. COORDINADOR: Revisión final
    └─> ✅ COMPLETADO
```

**💡 Ventaja Clave**: El **Arquitecto** analiza tu proyecto y elige el stack MÁS APROPIADO. Si tu landing es simple, podría elegir Vite + React. Si es compleja con SEO crítico, elegirá Next.js. Tú defines QUÉ quieres, el Arquitecto decide CÓMO construirlo.

#### **PASO 4: Monitorea el Progreso**

Durante la ejecución, consulta:

```bash
# Ver estado actual del proyecto
cat outputs/states/estado-landing-corporativa.md

# Ver plan de implementación
cat outputs/plans/plan-landing-corporativa.md

# Ver diseño técnico
cat outputs/designs/diseno-landing-corporativa.md

# Ver arquitectura de componentes
cat outputs/designs/arquitectura-componentes.md

# Ver reporte de testing
cat outputs/reports/reporte-testing-landing.md
```

---

## 🎯 Los 8 Agentes

### 1. **Coordinador** - El Director
- **Input**: Solicitud del usuario
- **Output**: `outputs/states/estado-[feature].md`
- **Función**: Orquesta todo el flujo, gestiona feedback loops, determina complejidad inicial

### 2. 🆕 **Arquitecto** - El Tomador de Decisiones Técnicas
- **Input**: Requisitos de producto (`00-DOCUMENT-PRODUCT.md`) + Restricciones técnicas (opcional)
- **Output**: `outputs/designs/arquitectura-[feature].md` + ADRs
- **Función**: **Analiza complejidad del proyecto y decide stack tecnológico, arquitectura y patrones más apropiados**
- **Decisiones clave**:
  - Stack tecnológico (React vs Vue, Next.js vs Vite, etc.)
  - Arquitectura de software (MVC, Clean, Feature-based, etc.)
  - Patrones de diseño a usar
  - Estrategias de performance, testing, deployment
  - Justifica TODAS las decisiones con alternativas consideradas

### 3. **Planificador** - El Estratega
- **Input**: Arquitectura del Arquitecto + Requisitos
- **Output**: `outputs/plans/plan-[feature].md`
- **Función**: Crea plan detallado BASADO en el stack y arquitectura ya decididos, identifica dependencias, evalúa riesgos

### 4. **Validador** - El Guardian de Calidad
- **Input**: Output de cualquier agente
- **Output**: ✅ Aprobado / ❌ Rechazado + Feedback
- **Función**: Valida contra requisitos de producto y decisiones arquitectónicas, genera feedback accionable

### 5. **Diseñador** - El Diseñador Técnico Detallado
- **Input**: Plan aprobado + Arquitectura
- **Output**: `outputs/designs/diseno-[feature].md`
- **Función**: Define diseño técnico DETALLADO (componentes, interfaces, contratos) usando la arquitectura ya elegida

### 6. **Desarrollador** - El Constructor
- **Input**: Diseño aprobado
- **Output**: Código + Tests unitarios
- **Función**: Implementa usando el stack decidido por el Arquitecto, sigue patrones definidos, auto-revisa código

### 7. **Tester** - El Inspector
- **Input**: Código implementado
- **Output**: `outputs/reports/reporte-testing-[feature].md` + Suite de tests
- **Función**: Tests completos (unit, integration, e2e, security, performance, accessibility)

### 8. **Documentador** - El Escritor
- **Input**: Feature completada
- **Output**: Docs técnicas, setup guides, deployment docs
- **Función**: Mantiene documentación actualizada y completa

---

## 🔄 Flujo de Trabajo

```
Usuario solicita feature
    ↓
[Coordinador] Analiza solicitud y estima complejidad
    ↓
[Arquitecto] 🆕 Lee producto, analiza complejidad, DECIDE stack/arquitectura
    ↓
[Validador] ✅/❌ Valida arquitectura
    ↓
[Planificador] Crea plan detallado usando arquitectura decidida
    ↓
[Validador] ✅/❌ (max 2 iteraciones)
    ↓
[Diseñador] Diseño técnico detallado
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
1. Definen qué hace el agente
2. Qué inputs recibe
3. Qué outputs produce
4. Qué criterios debe seguir
5. Cómo interactúa con otros agentes

**Tú o tu LLM lee estos documentos** y ejecuta las instrucciones.

### **La Innovación: Agente Arquitecto Inteligente** 🆕

A diferencia de otros sistemas donde TÚ decides el stack tecnológico, este sistema incluye un **Agente Arquitecto** que:

1. **Lee los requisitos del producto** (QUÉ construir)
2. **Analiza la complejidad** del proyecto
3. **Considera restricciones** técnicas si las hay
4. **Decide el stack MÁS APROPIADO** para ESE proyecto específico
5. **Justifica sus decisiones** con alternativas consideradas

**Ejemplo**:
```
Proyecto Simple (Landing estática, 5 secciones, sin interactividad compleja):
→ Arquitecto decide: Astro + Tailwind (SSG, ultra-rápido, perfecto para estático)

Proyecto Medio (Landing con formularios, animaciones, modo oscuro):
→ Arquitecto decide: React + Vite + Tailwind (SPA, suficiente interactividad)

Proyecto Complejo (Landing + Blog + Multi-idioma + SEO crítico):
→ Arquitecto decide: Next.js 14 + TypeScript + Tailwind (SSR/SSG híbrido, SEO óptimo)

Proyecto Muy Complejo (Portal + Auth + Dashboard + Tiempo real):
→ Arquitecto decide: Next.js + tRPC + Prisma + WebSockets (Full-stack robusto)
```

**Ventaja**: El stack se adapta a TU proyecto, no al revés.

### **Ejemplo de Uso con Claude/GPT**

```
# Prompt a tu LLM:
"Actúa como el Agente Coordinador definido en core/agentes/01-AGENTE-COORDINADOR.md.

Consulta el documento de producto en core/00-DOCUMENT-PRODUCT.md.

Solicitud del usuario: [tu solicitud]

Ejecuta el flujo según tu definición."
```

El LLM:
1. Leerá la definición del Coordinador
2. Consultará el documento de producto
3. Activará al Agente Arquitecto (que analizará y decidirá el stack)
4. Continuará con el flujo usando las decisiones del Arquitecto

---

## 🛠️ Configuración de Documentos

### **Archivo 1: Producto** (Obligatorio)
**Ubicación**: `core/00-DOCUMENT-PRODUCT.md`
**Consultado por**: TODOS los agentes, especialmente el Arquitecto

**Qué incluir**:

#### 1. **Visión del Producto**
```markdown
## Visión del Producto

### Descripción General
[Nombre del Producto] es una landing page corporativa que permite a empresas
de tecnología presentar sus servicios de manera profesional y moderna.

### Misión
Generar leads calificados a través de una experiencia web impactante.

### Usuarios Objetivo
- Potenciales clientes B2B
- Visitantes interesados en servicios tech
- Empresas buscando soluciones tecnológicas
```

#### 2. **Funcionalidades Principales**
```markdown
## Funcionalidades

1. Hero Section: Captura atención con CTA prominente
2. Servicios: Showcase de 4 servicios principales
3. Portafolio: Galería filtrable de proyectos
4. Testimonios: Carousel de clientes satisfechos
5. Formulario de contacto: Con validación y anti-spam
6. Footer: Info completa + redes sociales
```

#### 3. **Requisitos No Funcionales**
```markdown
## Requisitos No Funcionales

### Performance
- Carga inicial: <3 segundos
- Lighthouse Performance: >90

### SEO
- Meta tags completos
- Sitemap.xml
- Schema.org markup

### Accesibilidad
- WCAG 2.1 nivel AA
- Navegación por teclado
- Screen reader friendly

### Responsive
- Mobile-first
- Funcional en todos los dispositivos
```

**NOTA IMPORTANTE**: ❌ NO especifiques tecnologías aquí. El Arquitecto decidirá el stack apropiado.

---

### **Archivo 2: Restricciones Técnicas** (Opcional)
**Ubicación**: `core/01-DOCUMENT-TECHNICAL-CONSTRAINTS.md`
**Consultado por**: Agente Arquitecto

**Cuándo crear este archivo**:
- Si tienes tecnologías PROHIBIDAS (ej: no usar Vue)
- Si tienes tecnologías REQUERIDAS (ej: debe usar TypeScript)
- Si hay restricciones de presupuesto
- Si hay limitaciones de equipo (experiencia)
- Si hay deadlines críticos

**Ejemplo**:
```markdown
## Restricciones Obligatorias

### Tecnologías Prohibidas
❌ NO usar:
- Vue.js (equipo no tiene experiencia)
- MongoDB (queremos SQL)

### Tecnologías Requeridas
✅ DEBE usar:
- TypeScript (política de empresa)
- PostgreSQL (estandarizado)

### Presupuesto
- Hosting: Máximo $20/mes
- Preferir tier gratuito cuando sea posible
```

**Si NO tienes restricciones**: No necesitas crear este archivo. El Arquitecto tendrá libertad total para decidir.

**Nota**: Este archivo NO está incluido por defecto en la rama minimal. Créalo solo si tienes restricciones reales.

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
| `states/` | Estado del proyecto en tiempo real | Coordinador |
| `plans/` | Planes de implementación (13 secciones) | Planificador |
| `designs/` | Diseños técnicos + ADRs | Diseñador |
| `reports/` | Reportes de testing + validación | Tester + Validador |

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
# 1. Define el producto (QUÉ construir, no CÓMO)
vi core/00-DOCUMENT-PRODUCT.md

# 2. (Opcional) Define restricciones técnicas si las hay
vi core/01-DOCUMENT-TECHNICAL-CONSTRAINTS.md

# 3. Lee la definición del Coordinador
cat core/agents/01-AGENTE-COORDINADOR.md

# 4. Envía tu solicitud al LLM con el prompt:
"Actúa como el Agente Coordinador según la definición en core/agents/01-AGENTE-COORDINADOR.md.

Consulta el documento de producto en core/00-DOCUMENT-PRODUCT.md.

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
- Performance: Lighthouse >90
- Accesibilidad: WCAG 2.1 AA

IMPORTANTE: NO especifiques stack tecnológico. El Agente Arquitecto analizará
la complejidad y decidirá el stack más apropiado (podría ser React puro,
Next.js, Astro, etc. según lo que sea mejor para ESTE proyecto específico)."

# 5. El flujo automático incluirá al Arquitecto:
# - El Arquitecto leerá los requisitos
# - Analizará complejidad
# - Decidirá stack apropiado
# - Justificará sus decisiones
# - Creará outputs/disenos/arquitectura-[proyecto].md

# 6. Monitorea los outputs en:
ls -la outputs/states/
ls -la outputs/designs/arquitectura-*.md  # Decisiones del Arquitecto
ls -la outputs/plans/
ls -la outputs/designs/
```

---

## 📚 Documentación Adicional

### En Esta Rama (minimal)
- **[core/agents/*.md](core/agents/)** - Definiciones de los 8 agentes (consultar según necesidad)
- **[core/00-DOCUMENT-PRODUCT.md](core/00-DOCUMENT-PRODUCT.md)** - Template de producto (personalizar)

### Documentación Completa en Rama `main`
Si necesitas:
- ✅ **CHANGELOG.md** - Registro completo de cambios (v1.0 → v2.0)
- ✅ **GUIA-MIGRACION.md** - Cómo migrar de v1.0 a v2.0
- ✅ Guías detalladas paso a paso
- ✅ Ejemplos completos ejecutados
- ✅ Scripts de automatización
- ✅ Templates adicionales

**Cambia a la rama `main`**:
```bash
git checkout main
```

---

## 🔄 Versión y Cambios

**Versión actual**: 2.0.0 (Minimal)
**Fecha**: 2026-03-10
**Cambio principal**: Agente Arquitecto + Separación de documentos

**Novedades en v2.0**:
- 🆕 Agente Arquitecto decide stack tecnológico inteligentemente
- 🆕 Separación: Producto (QUÉ) vs Restricciones técnicas (CÓMO)
- 🆕 Stack adaptativo basado en complejidad del proyecto
- 📝 Ver [CHANGELOG.md](CHANGELOG.md) para detalles completos

**Migrando desde v1.0?**
- 📖 Lee [GUIA-MIGRACION.md](GUIA-MIGRACION.md) (5 minutos)

---

**Para**: Empezar rápido con decisiones arquitectónicas inteligentes
**Contiene**: Solo lo esencial + Agente Arquitecto

¿Preguntas? Lee las definiciones de agentes en `core/agents/`
