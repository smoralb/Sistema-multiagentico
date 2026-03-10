# 📦 Archivos Esenciales - Rama Minimal

Lista de archivos mínimos necesarios para usar el sistema multiagente.

---

## 📋 Resumen Rápido

**Total**: 12 archivos de contenido + 6 `.gitkeep` = **18 archivos**

- **Documentación**: 5 archivos (README, CHANGELOG, etc.)
- **Configuración**: 2 archivos (Producto + Restricciones)
- **Agentes**: 8 archivos (Definiciones de agentes)
- **Otros**: 1 archivo (.gitignore)
- **Estructura**: 6 archivos (.gitkeep para mantener carpetas)

---

## 📁 Estructura Completa

```
sistema-multiagentico/
│
├── 📄 README.md                              [1] Guía principal de uso
├── 📄 CHANGELOG.md                           [2] Registro de cambios
├── 📄 GUIA-MIGRACION.md                      [3] Guía de migración v1→v2
├── 📄 MINIMAL-INFO.md                        [4] Info de rama minimal
├── 📄 ARCHIVOS-ESENCIALES.md                 [5] Este archivo
├── 📄 .gitignore                             [6] Configuración Git
│
├── core/
│   ├── 📄 00-DOCUMENT-PRODUCT.md            [7] QUÉ construir
│   ├── 📄 01-DOCUMENT-TECHNICAL-CONSTRAINTS.md [8] Restricciones (opcional)
│   └── agentes/
│       ├── 📄 01-AGENTE-COORDINADOR.md      [9]  Director del flujo
│       ├── 📄 08-AGENTE-ARQUITECTO.md       [10] Decisiones técnicas ⭐
│       ├── 📄 02-AGENTE-PLANIFICADOR.md     [11] Estratega
│       ├── 📄 03-AGENTE-VALIDADOR.md        [12] Guardian de calidad
│       ├── 📄 04-AGENTE-DISENADOR.md        [13] Diseñador técnico
│       ├── 📄 05-AGENTE-DESARROLLADOR.md    [14] Constructor
│       ├── 📄 06-AGENTE-TESTING.md          [15] Inspector
│       └── 📄 07-AGENTE-DOCUMENTACION.md    [16] Escritor
│
└── outputs/                                  [Se generan automáticamente]
    ├── .gitkeep
    ├── estados/.gitkeep
    ├── planes/.gitkeep
    ├── disenos/.gitkeep
    ├── reportes/.gitkeep
    └── tests/.gitkeep
```

---

## 📄 Descripción Detallada

### 🔵 Documentación (5 archivos)

#### 1. README.md
**Propósito**: Guía principal de uso del sistema
**Tamaño**: ~15KB
**Tiempo de lectura**: 15 minutos
**Contenido**:
- Qué es el sistema (8 agentes especializados)
- Caso de uso principal (Landing page corporativa)
- Inicio rápido en 4 pasos
- Descripción de los 8 agentes
- Flujo de trabajo completo
- Configuración de documentos
- Ejemplos de uso
- Cómo funciona con LLMs
**Cuándo leer**: PRIMERO, antes de usar el sistema

---

#### 2. CHANGELOG.md
**Propósito**: Registro completo de cambios del sistema
**Tamaño**: ~12KB
**Tiempo de lectura**: 10 minutos
**Contenido**:
- v2.0.0: Agente Arquitecto + Separación de documentos
- v1.0.0: Versión inicial
- Breaking changes
- Nuevas funcionalidades
- Archivos eliminados/agregados
- Ejemplos de migración
**Cuándo leer**: Cuando quieras entender qué cambió entre versiones

---

#### 3. GUIA-MIGRACION.md
**Propósito**: Guía práctica para migrar de v1.0 a v2.0
**Tamaño**: ~8KB
**Tiempo de lectura**: 5 minutos
**Contenido**:
- 3 pasos de migración (5 minutos)
- Ejemplos prácticos
- Verificación post-migración
- FAQ
- Problemas comunes y soluciones
**Cuándo leer**: Si vienes de v1.0 o tienes `00-DOCUMENT-PRODUCT-STANDARDS.md`

---

#### 4. MINIMAL-INFO.md
**Propósito**: Información sobre la rama minimal
**Tamaño**: ~5KB
**Tiempo de lectura**: 5 minutos
**Contenido**:
- Qué contiene esta rama
- Comparación con rama main
- Cuándo usar cada rama
- Estructura de archivos
- Cómo cambiar entre ramas
**Cuándo leer**: Para entender diferencias entre ramas

---

#### 5. ARCHIVOS-ESENCIALES.md
**Propósito**: Este archivo - lista de archivos esenciales
**Tamaño**: ~4KB
**Tiempo de lectura**: 3 minutos
**Contenido**:
- Lista completa de archivos
- Descripción de cada uno
- Cuándo usar/modificar cada archivo
**Cuándo leer**: Para referencia rápida de estructura

---

### 🟢 Configuración (2 archivos - TÚ MODIFICAS ESTOS)

#### 6. .gitignore
**Propósito**: Configuración de Git (archivos a ignorar)
**Tamaño**: ~300 bytes
**Modificar**: Solo si necesitas agregar más reglas
**Contenido**:
- Outputs temporales
- Archivos de sistema (.DS_Store)
- Configuraciones locales sensibles

---

#### 7. core/00-DOCUMENT-PRODUCT.md
**Propósito**: Define QUÉ construir (requisitos de negocio)
**Tamaño**: ~15KB (template con ejemplos)
**Modificar**: ✅ SÍ - PERSONALIZA CON TU PROYECTO
**Consultado por**: TODOS los agentes, especialmente Arquitecto
**Contenido**:
- Visión del producto (misión, usuarios, propuesta de valor)
- Funcionalidades principales detalladas
- Requisitos no funcionales (performance, SEO, accesibilidad)
- Experiencia de usuario (flujos, interacciones)
- Diseño visual (colores, tipografía)
- Métricas de éxito
- Fases de desarrollo
**NO incluir**: Stack tecnológico, arquitectura, patrones (el Arquitecto decide)
**Cuándo modificar**: Al inicio de cada proyecto nuevo

---

#### 8. core/01-DOCUMENT-TECHNICAL-CONSTRAINTS.md
**Propósito**: Define restricciones técnicas SI existen
**Tamaño**: ~10KB (template con ejemplos)
**Modificar**: ✅ SÍ - SI TIENES RESTRICCIONES, sino eliminar
**Consultado por**: Agente Arquitecto
**Contenido**:
- Tecnologías prohibidas (ej: no usar Vue)
- Tecnologías requeridas (ej: debe usar TypeScript)
- Restricciones de presupuesto
- Limitaciones de equipo
- Deadlines críticos
- Compliance/regulaciones
**Cuándo modificar**:
- Al inicio si hay restricciones técnicas
- Cuando cambian políticas de empresa
- Cuando cambia experiencia del equipo
**Cuándo eliminar**: Si el Arquitecto tiene libertad total

---

### 🟣 Agentes (8 archivos - RARAMENTE MODIFICADOS)

Estos archivos definen el comportamiento de cada agente. Son el "código" del sistema.

#### 9. core/agentes/01-AGENTE-COORDINADOR.md
**Propósito**: Director del flujo, orquesta todos los agentes
**Tamaño**: ~18KB
**Modificar**: ⚠️ Raramente (solo si cambias lógica de orquestación)
**Responsabilidades**:
- Analiza solicitud del usuario
- Determina tipo y complejidad del proyecto
- Activa agentes en orden correcto
- Gestiona feedback loops (máx 2 iteraciones)
- Escala al usuario si necesario
- Mantiene documento de estado
**Output**: `outputs/estados/estado-[proyecto].md`

---

#### 10. core/agentes/08-AGENTE-ARQUITECTO.md ⭐ NUEVO
**Propósito**: Toma decisiones técnicas inteligentes
**Tamaño**: ~25KB
**Modificar**: ⚠️ Raramente (solo si cambias metodología de análisis)
**Responsabilidades**:
- Lee documento de producto
- Lee restricciones técnicas (si existen)
- Analiza complejidad con score cuantificable
- Decide stack tecnológico apropiado
- Decide arquitectura de software
- Decide patrones de diseño
- Define estrategias de performance, testing, deployment
- Justifica TODAS las decisiones
- Identifica riesgos y propone mitigaciones
- Genera ADRs automáticamente
**Output**: `outputs/disenos/arquitectura-[proyecto].md`
**Posición**: Se ejecuta después de Coordinador, antes de Planificador

---

#### 11. core/agentes/02-AGENTE-PLANIFICADOR.md
**Propósito**: Crea plan detallado de implementación
**Tamaño**: ~20KB
**Modificar**: ⚠️ Raramente
**Responsabilidades**:
- Usa arquitectura decidida por Arquitecto
- Analiza requisitos funcionales
- Identifica dependencias (internas/externas)
- Desglosa en tareas específicas
- Evalúa riesgos
- Estima complejidad de tareas
- Define criterios de éxito
**Output**: `outputs/planes/plan-[proyecto].md`

---

#### 12. core/agentes/03-AGENTE-VALIDADOR.md
**Propósito**: Guardian de calidad, valida outputs de todos los agentes
**Tamaño**: ~22KB
**Modificar**: ⚠️ Raramente (solo si cambias criterios de validación)
**Responsabilidades**:
- Valida outputs contra requisitos
- Aplica checklists específicos por fase
- Genera feedback accionable
- Clasifica observaciones por severidad
- Aprueba, aprueba con observaciones, o rechaza
**Output**: Resultado de validación (✅/⚠️/❌) + Feedback
**Se ejecuta**: Después de Arquitecto, Planificador, Diseñador, Desarrollador, Tester

---

#### 13. core/agentes/04-AGENTE-DISENADOR.md
**Propósito**: Diseño técnico detallado
**Tamaño**: ~20KB
**Modificar**: ⚠️ Raramente
**Responsabilidades**:
- Usa arquitectura del Arquitecto
- Define componentes específicos
- Especifica interfaces y contratos
- Define modelos de datos (Entities, DTOs, VOs)
- Crea diagramas de secuencia
- Define estrategia de manejo de errores
**Output**: `outputs/disenos/diseno-[proyecto].md`

---

#### 14. core/agentes/05-AGENTE-DESARROLLADOR.md
**Propósito**: Implementa el código
**Tamaño**: ~18KB
**Modificar**: ⚠️ Raramente
**Responsabilidades**:
- Usa stack del Arquitecto y diseño del Diseñador
- Implementa código siguiendo estándares
- Escribe tests unitarios (80%+ coverage)
- Documenta código (JSDoc, comentarios)
- Auto-revisa con checklist
**Output**: Código + Tests unitarios

---

#### 15. core/agentes/06-AGENTE-TESTING.md
**Propósito**: Crea suite completa de tests
**Tamaño**: ~19KB
**Modificar**: ⚠️ Raramente
**Responsabilidades**:
- Tests unitarios adicionales (95%+ business logic)
- Tests de integración
- Tests E2E para flujos críticos
- Tests de performance
- Tests de seguridad (XSS, SQL injection, etc.)
- Tests de accesibilidad
**Output**: `outputs/reportes/reporte-testing-[proyecto].md` + Suite de tests

---

#### 16. core/agentes/07-AGENTE-DOCUMENTACION.md
**Propósito**: Mantiene documentación actualizada
**Tamaño**: ~17KB
**Modificar**: ⚠️ Raramente
**Responsabilidades**:
- Genera/actualiza README
- Documenta API (OpenAPI/Swagger)
- Crea guías de uso con ejemplos
- Mantiene ADRs (algunos generados por Arquitecto)
- Actualiza CHANGELOG
- Crea guías de troubleshooting
**Output**: Documentación completa del proyecto

---

### 🟡 Outputs (6 .gitkeep - Automáticos)

Estos archivos mantienen las carpetas vacías en Git. No modificarlos.

```
outputs/.gitkeep
outputs/estados/.gitkeep
outputs/planes/.gitkeep
outputs/disenos/.gitkeep
outputs/reportes/.gitkeep
outputs/tests/.gitkeep
```

**Propósito**: Git no versiona carpetas vacías, estos archivos las preservan
**Contenido**: Vacíos
**Modificar**: ❌ No tocar

---

## ✅ Qué Archivos Debes Modificar

### 🎯 SIEMPRE (Para cada proyecto)
1. ✅ `core/00-DOCUMENT-PRODUCT.md` - Define tu proyecto

### 📋 A VECES (Si tienes restricciones)
2. ✅ `core/01-DOCUMENT-TECHNICAL-CONSTRAINTS.md` - Define restricciones técnicas

### 🔧 RARAMENTE (Solo si cambias comportamiento del sistema)
3. ⚠️ `core/agentes/*.md` - Definiciones de agentes
4. ⚠️ `.gitignore` - Reglas Git

### ❌ NUNCA
5. ❌ `outputs/**/*` - Generados automáticamente
6. ❌ `README.md` - Documentación del sistema
7. ❌ `CHANGELOG.md` - Registro de versiones
8. ❌ Otros archivos de documentación

---

## 🔄 Ciclo de Vida de los Archivos

### Al Inicio (Setup)
1. Leer `README.md`
2. Personalizar `core/00-DOCUMENT-PRODUCT.md`
3. (Opcional) Crear `core/01-DOCUMENT-TECHNICAL-CONSTRAINTS.md`

### Durante Ejecución
- Agentes leen documentos de configuración
- Agentes generan outputs en `outputs/`
- Usuario NO modifica nada

### Post-Ejecución
- Revisar `outputs/disenos/arquitectura-*.md` (decisiones del Arquitecto)
- Revisar `outputs/estados/estado-*.md` (progreso)
- Revisar `outputs/planes/plan-*.md` (tareas)
- Revisar `outputs/reportes/reporte-testing-*.md` (resultados)

### Nueva Versión del Sistema
1. Leer `CHANGELOG.md`
2. Si vienes de v1.0: Leer `GUIA-MIGRACION.md`
3. Migrar configuración según guía

---

## 📊 Tamaños y Tiempos

| Archivo | Tamaño | Lectura | Modificación |
|---------|--------|---------|--------------|
| README.md | ~15KB | 15 min | Nunca |
| CHANGELOG.md | ~12KB | 10 min | Nunca |
| GUIA-MIGRACION.md | ~8KB | 5 min | Nunca |
| MINIMAL-INFO.md | ~5KB | 5 min | Nunca |
| ARCHIVOS-ESENCIALES.md | ~4KB | 3 min | Nunca |
| 00-DOCUMENT-PRODUCT.md | ~15KB | 10 min | Siempre (al inicio) |
| 01-DOCUMENT-TECHNICAL-CONSTRAINTS.md | ~10KB | 5 min | A veces |
| 01-AGENTE-COORDINADOR.md | ~18KB | 20 min | Raramente |
| 08-AGENTE-ARQUITECTO.md | ~25KB | 25 min | Raramente |
| 02-AGENTE-PLANIFICADOR.md | ~20KB | 20 min | Raramente |
| 03-AGENTE-VALIDADOR.md | ~22KB | 20 min | Raramente |
| 04-AGENTE-DISENADOR.md | ~20KB | 20 min | Raramente |
| 05-AGENTE-DESARROLLADOR.md | ~18KB | 15 min | Raramente |
| 06-AGENTE-TESTING.md | ~19KB | 15 min | Raramente |
| 07-AGENTE-DOCUMENTACION.md | ~17KB | 15 min | Raramente |

**Total documentación**: ~44KB, ~40 minutos de lectura
**Total agentes**: ~159KB, ~165 minutos de lectura (leer bajo demanda)
**Total configuración**: ~25KB, ~15 minutos de personalización

---

## 🚀 Orden de Lectura Recomendado

### Primera Vez (Total: ~1 hora)
1. `README.md` (15 min) - Entender el sistema
2. `00-DOCUMENT-PRODUCT.md` (10 min) - Ver template de producto
3. `01-DOCUMENT-TECHNICAL-CONSTRAINTS.md` (5 min) - Ver template de restricciones
4. `core/agentes/01-AGENTE-COORDINADOR.md` (20 min) - Entender flujo
5. `core/agentes/08-AGENTE-ARQUITECTO.md` (25 min) - Entender decisiones técnicas

### Referencia (Según Necesidad)
- `CHANGELOG.md` - Cuando quieras ver qué cambió
- `GUIA-MIGRACION.md` - Si vienes de v1.0
- `MINIMAL-INFO.md` - Si quieres comparar con rama main
- Otros agentes - Cuando necesites entender su funcionamiento específico

---

## ✨ Conclusión

Esta rama minimal contiene **exactamente lo necesario** para usar el sistema multiagente:
- ✅ 5 documentos de referencia (no modificar)
- ✅ 2 documentos de configuración (personalizar)
- ✅ 8 agentes especializados (raramente modificar)
- ✅ Estructura de outputs (auto-generada)

**Todo está diseñado para ser:**
- 📖 Fácil de entender
- ⚡ Rápido de configurar (15 minutos)
- 🎯 Directo al grano
- 🔧 Fácil de mantener

---

**Versión**: 2.0.0
**Última actualización**: 2026-03-10
**Archivos totales**: 18 (12 contenido + 6 .gitkeep)
