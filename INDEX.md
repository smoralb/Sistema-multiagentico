# 📑 Índice del Sistema Multiagente

## 🚀 Inicio Rápido

1. **[GUIA-RAPIDA.md](docs/GUIA-RAPIDA.md)** ← ⚡ **Empieza aquí (5 min)**
2. **[README.md](README.md)** ← Documentación completa
3. **[EJEMPLO-EJECUCION-COMPLETA.md](docs/EJEMPLO-EJECUCION-COMPLETA.md)** ← Ejemplo real paso a paso

## ⚙️ Configuración

**[00-DOCUMENT-PRODUCT-STANDARDS.md](00-DOCUMENT-PRODUCT-STANDARDS.md)** ← ⭐ **EDITA ESTO PRIMERO**
- Fuente única de verdad
- Define tus estándares de proyecto
- Consultado por todos los agentes

## 🤖 Los 7 Agentes

### Agente Coordinador
**[agentes/01-AGENTE-COORDINADOR.md](agentes/01-AGENTE-COORDINADOR.md)**
- Orquesta todo el flujo
- Gestiona el estado del proyecto
- Coordina entre agentes
- Maneja feedback loops

### Agente Planificador
**[agentes/02-AGENTE-PLANIFICADOR.md](agentes/02-AGENTE-PLANIFICADOR.md)**
- Analiza requerimientos
- Identifica dependencias
- Define tareas y fases
- Evalúa riesgos

### Agente Validador
**[agentes/03-AGENTE-VALIDADOR.md](agentes/03-AGENTE-VALIDADOR.md)**
- Valida cada output contra estándares
- Aplica checklists específicos
- Genera feedback accionable
- Aprueba/rechaza cada fase

### Agente Diseñador
**[agentes/04-AGENTE-DISENADOR.md](agentes/04-AGENTE-DISENADOR.md)**
- Define arquitectura técnica
- Especifica interfaces
- Selecciona patrones de diseño
- Documenta decisiones

### Agente Desarrollador
**[agentes/05-AGENTE-DESARROLLADOR.md](agentes/05-AGENTE-DESARROLLADOR.md)**
- Implementa el código
- Escribe tests unitarios
- Sigue estándares
- Auto-revisa su código

### Agente de Testing
**[agentes/06-AGENTE-TESTING.md](agentes/06-AGENTE-TESTING.md)**
- Crea suite de tests completa
- Tests de integración y E2E
- Valida cobertura
- Reporta bugs

### Agente de Documentación
**[agentes/07-AGENTE-DOCUMENTACION.md](agentes/07-AGENTE-DOCUMENTACION.md)**
- Actualiza documentación técnica
- Documenta APIs
- Crea guías de uso
- Mantiene ADRs

## 📋 Templates

**[templates/08-TEMPLATE-ESTADO-PROYECTO.md](templates/08-TEMPLATE-ESTADO-PROYECTO.md)**
- Template para tracking de progreso
- Usado por el Coordinador
- Se genera automáticamente para cada proyecto

## 📚 Documentación Adicional

### Guía Rápida
**[docs/GUIA-RAPIDA.md](docs/GUIA-RAPIDA.md)**
- Inicio en 5 minutos
- Casos de uso
- Comandos básicos
- FAQ

### Ejemplo Completo
**[docs/EJEMPLO-EJECUCION-COMPLETA.md](docs/EJEMPLO-EJECUCION-COMPLETA.md)**
- Ejemplo real: Autenticación JWT
- Flujo completo paso a paso
- 8 horas de trabajo automatizado
- Outputs de cada agente

## 🔄 Flujo del Sistema

```
Usuario solicita funcionalidad
          ↓
  [01] Coordinador analiza
          ↓
  [02] Planificador crea plan
          ↓
  [03] Validador revisa ✅/❌
          ↓ (si ❌: feedback loop)
  [04] Diseñador crea diseño técnico
          ↓
  [03] Validador revisa ✅/❌
          ↓
  [05] Desarrollador implementa + tests
          ↓
  [03] Validador revisa código ✅/❌
          ↓
  [06] Tester crea tests completos
          ↓
  [03] Validador revisa tests ✅/❌
          ↓
  [07] Documentador actualiza docs
          ↓
  [01] Coordinador: Revisión final
          ↓
      ✅ COMPLETADO
```

## 📂 Ubicación de Archivos

```
/Users/smoralber/sistema-multiagentico/
│
├── INDEX.md                           ← Este archivo
├── README.md                          ← Doc principal
├── 00-DOCUMENT-PRODUCT-STANDARDS.md   ← Estándares
│
├── agentes/                           ← 7 agentes
│   ├── 01-AGENTE-COORDINADOR.md
│   ├── 02-AGENTE-PLANIFICADOR.md
│   ├── 03-AGENTE-VALIDADOR.md
│   ├── 04-AGENTE-DISENADOR.md
│   ├── 05-AGENTE-DESARROLLADOR.md
│   ├── 06-AGENTE-TESTING.md
│   └── 07-AGENTE-DOCUMENTACION.md
│
├── docs/                              ← Guías
│   ├── GUIA-RAPIDA.md
│   └── EJEMPLO-EJECUCION-COMPLETA.md
│
└── templates/                         ← Templates
    └── 08-TEMPLATE-ESTADO-PROYECTO.md
```

## 🎯 Siguientes Pasos

1. ✅ Lee [GUIA-RAPIDA.md](docs/GUIA-RAPIDA.md) (5 minutos)
2. ✏️ Edita [00-DOCUMENT-PRODUCT-STANDARDS.md](00-DOCUMENT-PRODUCT-STANDARDS.md) con tus estándares
3. 📖 Revisa [EJEMPLO-EJECUCION-COMPLETA.md](docs/EJEMPLO-EJECUCION-COMPLETA.md)
4. 🚀 ¡Empieza a usar el sistema!

## 🆘 Necesitas Ayuda?

- **Inicio rápido**: [GUIA-RAPIDA.md](docs/GUIA-RAPIDA.md)
- **Documentación completa**: [README.md](README.md)
- **Ver ejemplo real**: [EJEMPLO-EJECUCION-COMPLETA.md](docs/EJEMPLO-EJECUCION-COMPLETA.md)
- **FAQ**: Ver sección en [GUIA-RAPIDA.md](docs/GUIA-RAPIDA.md#-faq-rápido)

## 📊 Tamaño de los Archivos

| Archivo | Tamaño | Tiempo de Lectura |
|---------|--------|-------------------|
| GUIA-RAPIDA.md | ~8 KB | 5 min |
| README.md | ~17 KB | 15 min |
| EJEMPLO-EJECUCION-COMPLETA.md | ~35 KB | 30 min |
| 00-DOCUMENT-PRODUCT-STANDARDS.md | ~6 KB | 10 min |
| Cada Agente | ~7-22 KB | 10-20 min |

## ⚡ Acceso Rápido por Rol

### Para el Usuario/Product Manager
1. [GUIA-RAPIDA.md](docs/GUIA-RAPIDA.md) - Cómo usar el sistema
2. [EJEMPLO-EJECUCION-COMPLETA.md](docs/EJEMPLO-EJECUCION-COMPLETA.md) - Qué esperar

### Para el Tech Lead
1. [00-DOCUMENT-PRODUCT-STANDARDS.md](00-DOCUMENT-PRODUCT-STANDARDS.md) - Configurar estándares
2. [README.md](README.md) - Arquitectura completa
3. [agentes/03-AGENTE-VALIDADOR.md](agentes/03-AGENTE-VALIDADOR.md) - Criterios de validación

### Para el Desarrollador
1. [agentes/05-AGENTE-DESARROLLADOR.md](agentes/05-AGENTE-DESARROLLADOR.md) - Guía de desarrollo
2. [00-DOCUMENT-PRODUCT-STANDARDS.md](00-DOCUMENT-PRODUCT-STANDARDS.md) - Estándares a seguir
3. [templates/08-TEMPLATE-ESTADO-PROYECTO.md](templates/08-TEMPLATE-ESTADO-PROYECTO.md) - Tracking

### Para el QA/Tester
1. [agentes/06-AGENTE-TESTING.md](agentes/06-AGENTE-TESTING.md) - Estrategia de testing
2. [agentes/03-AGENTE-VALIDADOR.md](agentes/03-AGENTE-VALIDADOR.md) - Criterios de calidad

---

**Versión**: 1.0
**Última actualización**: 2024-03-09
**Ubicación**: `/Users/smoralber/sistema-multiagentico/`
