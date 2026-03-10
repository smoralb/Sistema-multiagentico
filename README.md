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

### **Caso de Uso: Implementar Autenticación JWT en una API REST**

#### **PASO 1: Configura los Estándares (2 min)**

Edita `core/00-DOCUMENT-PRODUCT-STANDARDS.md` y completa:

```bash
vi core/00-DOCUMENT-PRODUCT-STANDARDS.md
```

**Completa mínimo estas secciones:**
- **Línea 15-30**: Stack tecnológico (Node.js/Express, TypeScript, MongoDB, etc.)
- **Línea 70-100**: Estándares de código (camelCase, max 50 líneas por función, etc.)
- **Línea 150-180**: Cobertura de tests (95% business logic, 90% services)

#### **PASO 2: Solicitud al Coordinador (1 min)**

Envía esta solicitud al **Agente Coordinador**:

```
"Implementa un sistema de autenticación JWT completo para la API REST.

Requisitos:
- Login endpoint (POST /api/auth/login)
- Registro endpoint (POST /api/auth/register)
- JWT tokens con 1h de expiración
- Refresh tokens con 7 días de expiración
- Middleware para proteger rutas
- Hash de passwords con bcrypt
- Validación de inputs
- Manejo de errores robusto

Stack: Node.js + Express + TypeScript + MongoDB
"
```

#### **PASO 3: El Sistema Trabaja Automáticamente (2 min para configurar, ~6 horas de trabajo automatizado)**

El **Coordinador** iniciará el flujo automático:

```
1. COORDINADOR: Analiza la solicitud
   └─> Crea: outputs/estados/estado-jwt-auth.md

2. PLANIFICADOR: Genera plan detallado (13 secciones)
   └─> Crea: outputs/planes/plan-jwt-auth.md

3. VALIDADOR: Revisa el plan
   └─> ✅ Aprobado o ❌ Rechazado con feedback

4. DISEÑADOR: Diseño técnico completo
   └─> Crea: outputs/disenos/diseno-jwt-auth.md
   └─> Crea: outputs/disenos/adr-001-jwt-vs-sessions.md

5. VALIDADOR: Revisa el diseño
   └─> ✅ Aprobado

6. DESARROLLADOR: Implementa código + tests unitarios
   └─> Crea código en tu proyecto
   └─> Coverage: 95%+

7. VALIDADOR: Revisa código
   └─> ✅ Aprobado

8. TESTER: Suite completa de tests
   └─> Crea: outputs/reportes/reporte-testing-jwt-auth.md
   └─> Tests: Unit, Integration, E2E, Security

9. VALIDADOR: Revisa tests
   └─> ✅ Aprobado

10. DOCUMENTADOR: Documentación completa
    └─> API docs, guías de uso, troubleshooting

11. COORDINADOR: Revisión final
    └─> ✅ COMPLETADO
```

#### **PASO 4: Monitorea el Progreso**

Durante la ejecución, consulta:

```bash
# Ver estado actual del proyecto
cat outputs/estados/estado-jwt-auth.md

# Ver plan de implementación
cat outputs/planes/plan-jwt-auth.md

# Ver diseño técnico
cat outputs/disenos/diseno-jwt-auth.md

# Ver reporte de testing
cat outputs/reportes/reporte-testing-jwt-auth.md
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

### Backend
- **Framework**: Express.js v4.18+
- **Lenguaje**: TypeScript 5.0+
- **Base de datos**: MongoDB 6.0+
- **ORM/ODM**: Mongoose

### Testing
- **Unit tests**: Jest
- **Integration tests**: Supertest
- **E2E tests**: Cypress
```

#### 2. **Estándares de Código** (~Línea 70-100)
```markdown
## Estándares de Código

### Nomenclatura
- Variables/funciones: camelCase
- Clases/Interfaces: PascalCase
- Constantes: UPPER_SNAKE_CASE
- Archivos: kebab-case

### Límites
- Máximo 50 líneas por función
- Máximo 3-4 parámetros (luego usar objetos)
- Complejidad ciclomática < 10
```

#### 3. **Cobertura de Tests** (~Línea 150-180)
```markdown
## Estándares de Testing

### Cobertura Mínima
- Rutas críticas: 100%
- Business logic: 95%
- Services: 90%
- Utils: 85%
- UI Components: 70%
```

---

## 🎬 Otros Casos de Uso

### **Caso 2: Bug Fix**
```
"Fix: Los usuarios pueden hacer doble-submit del formulario de pago

Reproduce: Hacer click rápido 2 veces en botón 'Pagar'
Resultado actual: Se crean 2 cargos
Resultado esperado: Solo 1 cargo, botón deshabilitado tras primer click
"
```

**Flujo automatizado** (más corto para bugs):
1. Planificador: Análisis del bug + estrategia
2. Desarrollador: Implementa fix (debounce + disabled state)
3. Tester: Tests de regresión + caso específico
4. Documentador: Actualiza troubleshooting

**Tiempo**: ~2 horas

---

### **Caso 3: Nueva Feature Compleja**
```
"Implementa sistema de notificaciones push en tiempo real con WebSockets

Requisitos:
- Notificaciones en tiempo real para usuarios conectados
- Queue para usuarios offline (entregar cuando se conecten)
- Tipos de notificaciones: info, warning, error, success
- Persistencia en BD
- Mark as read/unread
- Badge count en UI
- Rate limiting

Stack: Node.js + Socket.io + Redis + React
"
```

**Flujo completo** (todas las fases):
1-10. Flujo completo con validaciones

**Tiempo**: ~12 horas de trabajo automatizado

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

Solicitud: [tu solicitud aquí]"

# 4. Monitorea los outputs en:
ls -la outputs/estados/
ls -la outputs/planes/
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
