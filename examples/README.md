# Examples - Casos de Uso Reales

Este directorio contiene **ejemplos completos de ejecuciones del sistema** para referencia y aprendizaje.

## 📁 Estructura

```
examples/
├── jwt-authentication/           # Ejemplo: Implementación de JWT auth
│   ├── 1-estado-inicial.md
│   ├── 2-plan.md
│   ├── 3-diseno.md
│   ├── 4-codigo/
│   ├── 5-tests/
│   └── 6-documentacion.md
├── api-crud-usuarios/            # Ejemplo: API REST CRUD
└── refactor-arquitectura/        # Ejemplo: Refactorización
```

## 🎯 Propósito

Estos ejemplos sirven para:
- ✅ **Onboarding**: Nuevos usuarios entienden cómo funciona el sistema
- ✅ **Referencia**: Ver salidas esperadas de cada fase
- ✅ **Benchmarking**: Comparar calidad de tus outputs vs. ejemplos
- ✅ **Debugging**: Identificar diferencias cuando algo no funciona como esperado
- ✅ **Training**: Entrenar nuevos agentes LLM con ejemplos de calidad

## 📝 Estructura de un Ejemplo Completo

Cada ejemplo debe contener:

```
ejemplo-[nombre]/
├── README.md                     # Contexto y descripción del ejemplo
├── 0-request-original.md         # Solicitud original del usuario
├── 1-estado-proyecto.md          # Estado generado por Coordinador
├── 2-plan-implementacion.md      # Plan del Planificador
├── 3-validacion-plan.md          # Resultado validación del plan
├── 4-diseno-tecnico.md           # Diseño del Diseñador
├── 5-validacion-diseno.md        # Resultado validación del diseño
├── 6-codigo/                     # Código implementado
│   ├── src/
│   └── tests/
├── 7-validacion-codigo.md        # Resultado validación del código
├── 8-reporte-testing.md          # Reporte completo de tests
├── 9-documentacion.md            # Documentación generada
└── 10-reporte-final.md           # Reporte final del Coordinador
```

## 🚀 Ejemplos Incluidos

### 1. JWT Authentication (Completo)
**Complejidad**: Media
**Fases ejecutadas**: Todas (10 fases)
**Características**:
- Feature completo de autenticación
- Incluye middleware, controllers, services
- Tests unitarios, integración y seguridad
- Documentación completa con ejemplos de API
- 2 iteraciones en fase de diseño (demostración de feedback loop)

**Lecciones aprendidas**:
- Importancia de definir refresh token strategy desde diseño
- Validación de tokens expone edge cases en testing
- ADR crítico: JWT vs Sessions

### 2. API CRUD Usuarios (Próximamente)
**Complejidad**: Baja
**Tipo de tarea**: Feature nueva
**Características**:
- Endpoints REST estándar
- Validación de datos con DTOs
- Paginación y filtros
- Tests de integración

### 3. Refactor Arquitectura (Próximamente)
**Complejidad**: Alta
**Tipo de tarea**: Refactorización
**Características**:
- Migración de arquitectura monolítica a capas
- Tests de regresión extensivos
- Estrategia de rollback documentada

## 📖 Cómo Usar los Ejemplos

### Para Aprender
1. Lee el `0-request-original.md` para entender la solicitud
2. Revisa el `2-plan-implementacion.md` para ver cómo se descompone
3. Estudia el `4-diseno-tecnico.md` para ver decisiones arquitectónicas
4. Examina el código en `6-codigo/` para ver estándares aplicados
5. Revisa `8-reporte-testing.md` para ver métricas de calidad

### Para Comparar Tus Resultados
```bash
# Diff tu plan vs. el ejemplo
diff outputs/planes/plan-mi-feature.md examples/jwt-authentication/2-plan-implementacion.md

# Comparar estructura de tests
diff -r outputs/tests/ examples/jwt-authentication/6-codigo/tests/
```

### Para Entrenar Agentes
Usa estos ejemplos como few-shot examples al configurar tus prompts de agentes.

## 🔄 Contribuir Nuevos Ejemplos

Si ejecutaste el sistema y produjo buenos resultados:

1. Crea carpeta: `examples/[nombre-descriptivo]/`
2. Copia todos los archivos generados
3. Agrega `README.md` explicando el contexto
4. Incluye métricas finales (tiempo, iteraciones, coverage)
5. Documenta lecciones aprendidas

## 📊 Métricas de Ejemplos

| Ejemplo | Fases | Iteraciones | Coverage | Tiempo | Severidad Issues |
|---------|-------|-------------|----------|--------|------------------|
| JWT Auth | 10 | 2 (diseño) | 96% | - | 1 IMPORTANTE, 3 MENOR |
| CRUD API | - | - | - | - | - |
| Refactor | - | - | - | - | - |

## ⚠️ Nota sobre Confidencialidad

- ✅ Solo incluye ejemplos de código no-propietario
- ✅ Sanitiza cualquier dato sensible
- ✅ Usa datos de ejemplo ficticios
- ✅ No incluyas credenciales reales (incluso en ejemplos)
