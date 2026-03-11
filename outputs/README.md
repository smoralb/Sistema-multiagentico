# Outputs - Archivos Generados por Agentes

Este directorio contiene todos los **archivos generados automáticamente** durante la ejecución del sistema de multiagente.

## 📁 Estructura

```
outputs/
├── states/        # Documentos de estado del proyecto (estado-*.md)
├── plans/         # Planes de implementación (plan-*.md)
├── designs/        # Diseños técnicos (diseno-*.md, adr-*.md)
├── reports/       # Reportes de testing y validación (reporte-*.md)
└── tests/          # Suites de pruebas generadas
```

## 🤖 Archivos Generados

### `states/`
**Generado por**: Agente Coordinador
**Formato**: `estado-[nombre-feature].md`
**Propósito**: Tracking en tiempo real del progreso del proyecto
**Contenido**:
- Fase actual de ejecución
- Historial de validaciones
- Observaciones y problemas encontrados
- Próximos pasos

**Ejemplo**: `estado-jwt-authentication.md`

### `plans/`
**Generado por**: Agente Planificador
**Formato**: `plan-[nombre-feature].md`
**Propósito**: Plan detallado de implementación con 13 secciones
**Contenido**:
- Requisitos funcionales y no funcionales
- Análisis de dependencias
- Desglose de tareas con estimaciones
- Riesgos y estrategias de mitigación
- Criterios de éxito y Definition of Done

**Ejemplo**: `plan-jwt-authentication.md`

### `designs/`
**Generado por**: Agente Diseñador
**Formato**: `diseno-[nombre-feature].md`, `adr-[numero]-[titulo].md`
**Propósito**: Diseño técnico detallado y decisiones arquitectónicas
**Contenido**:
- Diagramas de arquitectura (capas, componentes)
- Definiciones de interfaces y contratos
- Modelos de datos (Entidades, DTOs, Value Objects)
- Diagramas de secuencia
- ADRs (Architecture Decision Records)

**Ejemplo**:
- `diseno-jwt-authentication.md`
- `adr-001-jwt-vs-sessions.md`

### `reports/`
**Generado por**: Agente de Testing + Agente Validador
**Formato**: `reporte-testing-[nombre-feature].md`, `reporte-validacion-[fase].md`
**Propósito**: Resultados de pruebas y validaciones
**Contenido**:
- Coverage reports con métricas
- Resultados de tests (unit, integration, e2e)
- Bugs encontrados con severidad
- Performance benchmarks
- Resultados de validación por fase

**Ejemplo**: `reporte-testing-jwt-authentication.md`

### `tests/`
**Generado por**: Agente de Testing + Agente Desarrollador
**Formato**: Archivos de código según framework configurado
**Propósito**: Suites de pruebas completas
**Contenido**:
- Unit tests (95%+ coverage)
- Integration tests
- E2E tests
- Performance tests
- Security tests

## 🔄 Ciclo de Vida

1. **Creación**: Generados automáticamente por agentes durante ejecución
2. **Validación**: Pasan por Agente Validador antes de considerarse finales
3. **Versionado**: Commitear en Git cuando feature está completo
4. **Limpieza**: Puede limpiarse periódicamente (mantener solo features activas)

## 🧹 Gestión de Limpieza

```bash
# Ver archivos generados en los últimos 7 días
find outputs/ -type f -mtime -7

# Archivar outputs de features completadas (más de 30 días)
find outputs/ -type f -mtime +30 -exec mv {} outputs/archive/ \;

# Limpiar todos los outputs (⚠️ CUIDADO)
rm -rf outputs/*/{estados,planes,disenos,reportes}/*
```

## 📊 Estadísticas Útiles

```bash
# Contar features en progreso
ls -1 outputs/states/ | wc -l

# Ver última actividad
ls -lt outputs/states/ | head -5

# Tamaño total de outputs
du -sh outputs/
```

## ⚠️ Notas Importantes

- ✅ **GIT-IGNORED por defecto**: Considera agregar `outputs/` al `.gitignore` si son archivos de trabajo temporal
- ✅ **GIT-TRACKED**: O comittea los outputs finales si quieres historial completo de cada feature
- 🔒 **NO modificar manualmente**: Estos archivos son generados por agentes
- 📋 **Útiles para debugging**: Si un agente falla, revisa estos archivos para entender qué pasó
