# Ejemplo Práctico: Sistema Multiagente

## 🎯 Qué es esto

Ejemplo real de uso del sistema multiagente para crear una web simple que muestra "Hola multiagentes".

---

## 📋 Pasos Ejecutados

### 0. Usar Claude Code con el Sistema (1 min)

**Opción A: Prompt directo**
```
Actúa como el Agente Coordinador definido en core/agents/01-AGENTE-COORDINADOR.md

Lee el documento de producto en core/00-DOCUMENT-PRODUCT.md

Solicitud: Implementa una web simple que muestre el mensaje "Hola multiagentes"

Ejecuta el flujo completo del sistema multiagente.
```

**Opción B: Prompt con contexto completo**
```
Eres el sistema multiagente para desarrollo de software.

1. Lee core/agents/01-AGENTE-COORDINADOR.md
2. Lee core/00-DOCUMENT-PRODUCT.md
3. Activa los 8 agentes en secuencia:
   - Coordinador → Arquitecto → Planificador → Diseñador → Desarrollador → Tester → Documentador
4. Cada agente debe generar su output en outputs/
5. Implementa el código final en web/

Solicitud: Implementa una web que muestre "Hola multiagentes"
```

**Resultado**: Claude Code ejecuta todos los agentes automáticamente y genera todos los archivos.

---

### 1. Definir el Producto (2 min)
Edité `core/00-DOCUMENT-PRODUCT.md` describiendo QUÉ quiero construir:
- Web simple
- Mensaje: "Hola multiagentes"
- Sin complejidad

### 2. Ejecutar el Sistema (automático)
Los agentes trabajaron en este orden:

**Coordinador** → Analizó la solicitud y estimó complejidad BAJA
- Output: `outputs/states/estado-hola-multiagentes.md`

**Arquitecto** → Decidió stack: HTML + CSS puro (sin frameworks)
- Output: `outputs/designs/arquitectura-hola-multiagentes.md`
- Justificación: Para algo tan simple, frameworks sería over-engineering

**Planificador** → Generó plan de 2 tareas (15 min estimados)
- Output: `outputs/plans/plan-hola-multiagentes.md`

**Diseñador** → Definió estructura HTML y estilos CSS
- Output: `outputs/designs/diseno-hola-multiagentes.md`

**Desarrollador** → Implementó el código
- Output: `web/index.html`

**Tester** → Verificó funcionamiento (6 tests, todos pasados)
- Output: `outputs/reports/reporte-testing-hola-multiagentes.md`

### 3. Resultado Final
Archivo `web/index.html` funcional

---

## ▶️ Cómo Probarlo

### Opción 1: Abrir directamente
```bash
open web/index.html
```

### Opción 2: Servidor local
```bash
cd web
python3 -m http.server 8000
# Abre http://localhost:8000
```

---

## 📁 Estructura de Este Ejemplo

```
.
├── README.md                                    ← Este archivo
├── core/
│   ├── 00-DOCUMENT-PRODUCT.md                  ← Input: Definición del producto
│   └── agents/                                  ← Definiciones de los 8 agentes
│
├── outputs/                                     ← Outputs generados por agentes
│   ├── states/estado-hola-multiagentes.md      ← Estado del proyecto
│   ├── plans/plan-hola-multiagentes.md         ← Plan de implementación
│   ├── designs/
│   │   ├── arquitectura-hola-multiagentes.md   ← Decisiones arquitectónicas
│   │   └── diseno-hola-multiagentes.md         ← Diseño técnico detallado
│   └── reports/
│       └── reporte-testing-hola-multiagentes.md ← Tests ejecutados
│
└── web/
    └── index.html                               ← Código final generado
```

---

## 🔍 Cómo Funciona el Sistema

### Input (lo que TÚ haces)
1. Defines QUÉ quieres en `core/00-DOCUMENT-PRODUCT.md`
2. Abres Claude Code en el directorio del proyecto
3. Envías un prompt solicitando al Coordinador que ejecute el flujo

### Proceso (automático con Claude Code)
Claude Code ejecuta los 8 agentes en secuencia:
- Cada agente lee las especificaciones (archivos .md)
- Genera su output correspondiente
- El siguiente agente usa ese output
- Claude Code tiene acceso a herramientas de lectura/escritura de archivos

### Output (lo que obtienes)
- ✅ Documentos de decisión (arquitectura, plan, diseño)
- ✅ Código implementado
- ✅ Tests y validación
- ✅ Todo documentado

**Ventaja**: Claude Code automatiza todo el proceso. Solo defines el producto y él ejecuta los 8 agentes.

---

## 💡 Lección Clave

**Para este proyecto simple:**
- El Arquitecto eligió HTML puro (no React, no Vue)
- ¿Por qué? Porque analizó la complejidad y determinó que frameworks serían innecesarios

**Si el proyecto fuera más complejo:**
- El mismo Arquitecto habría elegido Next.js, React, etc.
- El stack se adapta al proyecto, no al revés

---

## 🚀 Siguiente Paso

Para usar el sistema con TU proyecto:

1. Clona desde rama `minimal`:
```bash
git checkout minimal
```

2. Edita `core/00-DOCUMENT-PRODUCT.md` con TU proyecto

3. Abre Claude Code en el directorio y envía este prompt:
```
Actúa como el Agente Coordinador en core/agents/01-AGENTE-COORDINADOR.md

Lee core/00-DOCUMENT-PRODUCT.md

Solicitud: [TU PROYECTO AQUÍ]

Ejecuta el flujo completo activando todos los agentes.
```

4. Claude Code ejecutará todos los agentes y generará:
   - Arquitectura y decisiones técnicas
   - Plan de implementación
   - Código funcional
   - Tests y validación
   - Documentación completa

---

## 📚 Ver Documentación Completa

```bash
git checkout main  # Rama con documentación extensa
```

---

**Rama**: `example-practical`
**Propósito**: Demostración práctica mínima
**Tiempo de ejecución**: ~15 minutos
**Resultado**: Web funcional
