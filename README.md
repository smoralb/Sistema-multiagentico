# Ejemplo Práctico: Sistema Multiagente

## 🎯 Qué es esto

Ejemplo real de uso del sistema multiagente para crear una web simple que muestra "Hola multiagentes".

---

## 📋 Pasos Ejecutados

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
2. Solicitas al sistema: "Implementa una web que diga Hola multiagentes"

### Proceso (automático)
Los 8 agentes trabajan en secuencia:
- Cada agente lee las especificaciones
- Genera su output correspondiente
- El siguiente agente usa ese output

### Output (lo que obtienes)
- ✅ Documentos de decisión (arquitectura, plan, diseño)
- ✅ Código implementado
- ✅ Tests y validación
- ✅ Todo documentado

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

3. Envía solicitud al Agente Coordinador

4. Los agentes generarán todo automáticamente

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
