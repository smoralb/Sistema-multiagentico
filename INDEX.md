# 📑 Índice del Sistema Multiagente

## 🚀 Inicio Rápido

1. **[GUIA-RAPIDA.md](core/docs/GUIA-RAPIDA.md)** ← ⚡ **Empieza aquí (5 min)**
2. **[README.md](README.md)** ← Documentación completa
3. **[EJEMPLO-EJECUCION-COMPLETA.md](core/docs/EJEMPLO-EJECUCION-COMPLETA.md)** ← Ejemplo real paso a paso
4. **[Init Script](scripts/init-project.sh)** ← Inicializa un nuevo proyecto

## ⚙️ Configuración

**[core/00-DOCUMENT-PRODUCT-STANDARDS.md](core/00-DOCUMENT-PRODUCT-STANDARDS.md)** ← ⭐ **EDITA ESTO PRIMERO**
- Fuente única de verdad
- Define tus estándares de proyecto
- Consultado por todos los agentes

## 🤖 Los 7 Agentes

### Agente Coordinador
**[core/agents/01-AGENTE-COORDINADOR.md](core/agents/01-AGENTE-COORDINADOR.md)**
- Orquesta todo el flujo
- Gestiona el estado del proyecto
- Coordina entre agentes
- Maneja feedback loops

### Agente Planificador
**[core/agents/02-AGENTE-PLANIFICADOR.md](core/agents/02-AGENTE-PLANIFICADOR.md)**
- Analiza requerimientos
- Identifica dependencias
- Define tareas y fases
- Evalúa riesgos

### Agente Validador
**[core/agents/03-AGENTE-VALIDADOR.md](core/agents/03-AGENTE-VALIDADOR.md)**
- Valida cada output contra estándares
- Aplica checklists específicos
- Genera feedback accionable
- Aprueba/rechaza cada fase

### Agente Diseñador
**[core/agents/04-AGENTE-DISENADOR.md](core/agents/04-AGENTE-DISENADOR.md)**
- Define arquitectura técnica
- Especifica interfaces
- Selecciona patrones de diseño
- Documenta decisiones

### Agente Desarrollador
**[core/agents/05-AGENTE-DESARROLLADOR.md](core/agents/05-AGENTE-DESARROLLADOR.md)**
- Implementa el código
- Escribe tests unitarios
- Sigue estándares
- Auto-revisa su código

### Agente de Testing
**[core/agents/06-AGENTE-TESTING.md](core/agents/06-AGENTE-TESTING.md)**
- Crea suite de tests completa
- Tests de integración y E2E
- Valida cobertura
- Reporta bugs

### Agente de Documentación
**[core/agents/07-AGENTE-DOCUMENTACION.md](core/agents/07-AGENTE-DOCUMENTACION.md)**
- Actualiza documentación técnica
- Documenta APIs
- Crea guías de uso
- Mantiene ADRs

## 📋 Templates

**[core/templates/08-TEMPLATE-ESTADO-PROYECTO.md](core/templates/08-TEMPLATE-ESTADO-PROYECTO.md)**
- Template para tracking de progreso
- Usado por el Coordinador
- Se genera automáticamente en `outputs/states/`

## 📚 Documentación Adicional

### Guía Rápida
**[core/docs/GUIA-RAPIDA.md](core/docs/GUIA-RAPIDA.md)**
- Inicio en 5 minutos
- Casos de uso
- Comandos básicos
- FAQ

### Ejemplo Completo
**[core/docs/EJEMPLO-EJECUCION-COMPLETA.md](core/docs/EJEMPLO-EJECUCION-COMPLETA.md)**
- Ejemplo real: Autenticación JWT
- Flujo completo paso a paso
- 8 horas de trabajo automatizado
- Outputs de cada agente

### Ejemplos Reales
**[examples/](examples/)**
- Casos de uso completados
- Referencias de implementación
- Ver `examples/README.md` para más detalles

## 🛠️ Scripts de Automatización

**[scripts/](scripts/)**
- `init-project.sh` - Inicializa un nuevo proyecto
- `clean-outputs.sh` - Limpia archivos generados
- `archive-completed.sh` - Archiva features completadas
- `generate-metrics.sh` - Genera reporte de métricas
- Ver `scripts/README.md` para más detalles

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
sistema-multiagentico/
│
├── INDEX.md                                ← Este archivo
├── README.md                               ← Doc principal
├── .gitignore                              ← Git ignore configurado
│
├── core/                                   ← 🔒 Sistema base (raramente modificado)
│   ├── 00-DOCUMENT-PRODUCT-STANDARDS.md   ← ⭐ Estándares (EDITA ESTO)
│   ├── README.md                           ← Info sobre el core
│   ├── agents/                            ← Definiciones de agentes
│   │   ├── 01-AGENTE-COORDINADOR.md
│   │   ├── 02-AGENTE-PLANIFICADOR.md
│   │   ├── 03-AGENTE-VALIDADOR.md
│   │   ├── 04-AGENTE-DISENADOR.md
│   │   ├── 05-AGENTE-DESARROLLADOR.md
│   │   ├── 06-AGENTE-TESTING.md
│   │   └── 07-AGENTE-DOCUMENTACION.md
│   ├── docs/                               ← Guías de uso
│   │   ├── GUIA-RAPIDA.md
│   │   └── EJEMPLO-EJECUCION-COMPLETA.md
│   └── templates/                          ← Templates para outputs
│       └── 08-TEMPLATE-ESTADO-PROYECTO.md
│
├── outputs/                                ← 🤖 Archivos generados (auto)
│   ├── README.md                           ← Info sobre outputs
│   ├── states/                            ← Estados del proyecto
│   ├── plans/                             ← Planes de implementación
│   ├── designs/                            ← Diseños técnicos + ADRs
│   ├── reports/                           ← Reportes de testing
│   └── tests/                              ← Suites de pruebas
│
├── examples/                               ← 📚 Ejemplos reales completados
│   ├── README.md                           ← Info sobre ejemplos
│   └── jwt-authentication/                 ← Ejemplo JWT completo
│
└── scripts/                                ← 🛠️ Scripts de automatización
    ├── README.md                           ← Info sobre scripts
    ├── init-project.sh                     ← Inicializar proyecto
    ├── clean-outputs.sh                    ← Limpiar outputs
    ├── archive-completed.sh                ← Archivar completados
    └── generate-metrics.sh                 ← Generar métricas
```

## 🎯 Siguientes Pasos

1. ✅ Lee [GUIA-RAPIDA.md](core/docs/GUIA-RAPIDA.md) (5 minutos)
2. 🛠️ Ejecuta `./scripts/init-project.sh mi-proyecto` para inicializar
3. ✏️ Edita [core/00-DOCUMENT-PRODUCT-STANDARDS.md](core/00-DOCUMENT-PRODUCT-STANDARDS.md) con tus estándares
4. 📖 Revisa [EJEMPLO-EJECUCION-COMPLETA.md](core/docs/EJEMPLO-EJECUCION-COMPLETA.md)
5. 🚀 ¡Empieza a usar el sistema!
6. 📊 Los outputs se generarán automáticamente en `outputs/`

## 🆘 Necesitas Ayuda?

- **Inicio rápido**: [GUIA-RAPIDA.md](core/docs/GUIA-RAPIDA.md)
- **Documentación completa**: [README.md](README.md)
- **Ver ejemplo real**: [EJEMPLO-EJECUCION-COMPLETA.md](core/docs/EJEMPLO-EJECUCION-COMPLETA.md)
- **FAQ**: Ver sección en [GUIA-RAPIDA.md](core/docs/GUIA-RAPIDA.md#-faq-rápido)
- **Scripts**: [scripts/README.md](scripts/README.md)

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
1. [GUIA-RAPIDA.md](core/docs/GUIA-RAPIDA.md) - Cómo usar el sistema
2. [EJEMPLO-EJECUCION-COMPLETA.md](core/docs/EJEMPLO-EJECUCION-COMPLETA.md) - Qué esperar
3. [outputs/states/](outputs/states/) - Ver progreso en tiempo real

### Para el Tech Lead
1. [core/00-DOCUMENT-PRODUCT-STANDARDS.md](core/00-DOCUMENT-PRODUCT-STANDARDS.md) - Configurar estándares
2. [README.md](README.md) - Arquitectura completa
3. [core/agents/03-AGENTE-VALIDADOR.md](core/agents/03-AGENTE-VALIDADOR.md) - Criterios de validación
4. [scripts/](scripts/) - Automatización y métricas

### Para el Desarrollador
1. [core/agents/05-AGENTE-DESARROLLADOR.md](core/agents/05-AGENTE-DESARROLLADOR.md) - Guía de desarrollo
2. [core/00-DOCUMENT-PRODUCT-STANDARDS.md](core/00-DOCUMENT-PRODUCT-STANDARDS.md) - Estándares a seguir
3. [outputs/plans/](outputs/plans/) - Ver planes de implementación
4. [examples/](examples/) - Ejemplos de referencia

### Para el QA/Tester
1. [core/agents/06-AGENTE-TESTING.md](core/agents/06-AGENTE-TESTING.md) - Estrategia de testing
2. [core/agents/03-AGENTE-VALIDADOR.md](core/agents/03-AGENTE-VALIDADOR.md) - Criterios de calidad
3. [outputs/reports/](outputs/reports/) - Ver reportes de tests

---

**Versión**: 1.0
**Última actualización**: 2024-03-09
**Ubicación**: `/Users/smoralber/sistema-multiagentico/`
