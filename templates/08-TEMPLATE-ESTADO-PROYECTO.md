# Estado del Proyecto: [Nombre de la Funcionalidad]

> Este documento es generado y mantenido por el Agente Coordinador
> Template Version: 1.0

## Metadata

```yaml
id: [UUID único del proyecto]
nombre: [Nombre descriptivo de la funcionalidad]
tipo: nueva_funcionalidad | bug_fix | mejora | refactor
prioridad: alta | media | baja
fecha_inicio: [timestamp]
fecha_actualizacion: [timestamp]
estado_general: en_progreso | completado | bloqueado | pausado
fase_actual: coordinacion | planificacion | diseno | desarrollo | testing | documentacion | revision_final
```

## Estado Actual

### Resumen Ejecutivo
[Resumen de 2-3 líneas del estado actual del proyecto]

### Progreso General
```
[▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░] 50% completado
```

Fase actual: **[Nombre de la fase]**

### Últimas Actualizaciones
- **[timestamp]**: [Evento importante]
- **[timestamp]**: [Evento importante]
- **[timestamp]**: [Evento importante]

## Flujo de Trabajo

### Estados de las Fases

- [x] **Coordinación Inicial** ✅
  - Duración: [tiempo]
  - Resultado: Flujo definido

- [x] **Planificación** ✅
  - Duración: [tiempo]
  - Resultado: Plan aprobado
  - Iteraciones: 1

- [ ] **Validación de Plan** ⏳
  - Estado: En progreso
  - Agente: Validador
  - Inicio: [timestamp]

- [ ] **Diseño Técnico**
  - Estado: Pendiente
  - Agente: Diseñador
  - Bloqueado por: Validación de Plan

- [ ] **Validación de Diseño**
  - Estado: Pendiente
  - Agente: Validador

- [ ] **Desarrollo**
  - Estado: Pendiente
  - Agente: Desarrollador

- [ ] **Validación de Código**
  - Estado: Pendiente
  - Agente: Validador

- [ ] **Testing**
  - Estado: Pendiente
  - Agente: Testing

- [ ] **Validación de Tests**
  - Estado: Pendiente
  - Agente: Validador

- [ ] **Documentación**
  - Estado: Pendiente
  - Agente: Documentación

- [ ] **Revisión Final**
  - Estado: Pendiente
  - Agente: Coordinador

## Resultados por Agente

### Agente Planificador

**Estado**: Completado ✅
**Fecha ejecución**: [timestamp]
**Duración**: [tiempo]
**Iteraciones**: 1

**Output**:
- Documento: `[ruta al plan]`
- Requisitos funcionales: 8
- Requisitos no funcionales: 5
- Riesgos identificados: 3
- Complejidad: Media

**Validación**:
- Estado: Aprobado ✅
- Fecha: [timestamp]
- Feedback: "Plan claro y completo. Riesgos bien identificados."

### Agente Diseñador

**Estado**: En progreso ⏳
**Fecha inicio**: [timestamp]
**Progreso**: 60%

**Avances**:
- [x] Diagrama de arquitectura
- [x] Interfaces definidas
- [ ] Flujos de datos (en progreso)
- [ ] Patrones de diseño

**Pendiente**:
- Completar diagramas de secuencia
- Documentar decisiones arquitectónicas

### Agente Desarrollador

**Estado**: Pendiente ⏸️
**Fecha estimada de inicio**: [timestamp]

### Agente de Testing

**Estado**: Pendiente ⏸️

### Agente de Documentación

**Estado**: Pendiente ⏸️

## Decisiones Tomadas

### DEC-001: [Título de la decisión]
**Fecha**: [YYYY-MM-DD]
**Fase**: [En qué fase se tomó]
**Tomada por**: [Agente o Usuario]

**Contexto**:
[Por qué se necesitaba tomar esta decisión]

**Opciones consideradas**:
1. Opción A: [Descripción] - Descartada porque [razón]
2. Opción B: [Descripción] - **Elegida**
3. Opción C: [Descripción] - Descartada porque [razón]

**Decisión**:
[Qué se decidió exactamente]

**Razón**:
[Por qué se tomó esta decisión]

**Impacto**:
- **Positivo**: [Impactos positivos]
- **Negativo**: [Trade-offs]
- **Módulos afectados**: [Lista]

**Reversibilidad**: Alta | Media | Baja
[Qué tan fácil es revertir esta decisión]

---

### DEC-002: [Otra decisión]
...

## Problemas y Resoluciones

### PROB-001: [Título del problema]
**Severidad**: Crítica | Alta | Media | Baja
**Estado**: Resuelto | En progreso | Bloqueado
**Fecha detección**: [timestamp]
**Fase**: [En qué fase ocurrió]

**Descripción**:
[Descripción detallada del problema]

**Impacto**:
[Cómo afecta al proyecto]

**Intentos de resolución**:
1. **Intento 1** ([timestamp]):
   - Acción: [Qué se intentó]
   - Resultado: [Qué pasó]
   - Razón de fallo: [Por qué no funcionó]

2. **Intento 2** ([timestamp]):
   - Acción: [Qué se intentó]
   - Resultado: ✅ Exitoso
   - Solución: [Qué funcionó]

**Lecciones aprendidas**:
[Qué se aprendió de este problema]

---

### PROB-002: [Otro problema]
...

## Validaciones Realizadas

### Validación de Plan
**Fecha**: [timestamp]
**Resultado**: ✅ Aprobado | ❌ Rechazado | ⚠️ Aprobado con observaciones

**Checklist**:
- ✅ Objetivos claros
- ✅ Requisitos completos
- ✅ Dependencias identificadas
- ✅ Riesgos documentados
- ✅ Complejidad estimada

**Feedback**:
[Comentarios del validador]

**Observaciones** (si las hay):
- [Observación 1]
- [Observación 2]

---

### Validación de Diseño
**Estado**: Pendiente

---

### Validación de Código
**Estado**: Pendiente

---

### Validación de Tests
**Estado**: Pendiente

## Métricas del Proyecto

### Tiempo
```yaml
tiempo_total: [duración desde inicio]
tiempo_por_fase:
  planificacion: 2.5 horas
  diseno: En progreso (1.2 horas hasta ahora)
  desarrollo: -
  testing: -
  documentacion: -

estimado_restante: 8-12 horas
```

### Iteraciones
```yaml
total_iteraciones: 2
iteraciones_por_fase:
  planificacion: 1
  diseno: 1
  desarrollo: 0
  testing: 0

promedio_iteraciones: 1.0
```

### Validaciones
```yaml
total_validaciones: 2
aprobadas: 1
rechazadas: 1
aprobadas_con_observaciones: 0

tasa_aprobacion: 50% (mejorará al terminar)
```

## Archivos Generados/Modificados

### Archivos de Documentación
```
- docs/plan-implementacion.md (Creado)
- docs/diseno-tecnico.md (En progreso)
- docs/adr/adr-001-jwt-auth.md (Creado)
```

### Archivos de Código (cuando aplique)
```
- src/modules/auth/
  - domain/
    - user.entity.ts (Pendiente)
    - ...
  - application/
    - ...
```

### Archivos de Tests (cuando aplique)
```
- __tests__/
  - unit/
    - ...
```

## Comunicaciones con Usuario

### COM-001: Solicitud de clarificación
**Fecha**: [timestamp]
**Razón**: [Por qué se necesitaba input del usuario]

**Pregunta**:
[Qué se preguntó]

**Respuesta del usuario**:
[Qué respondió]

**Acción tomada**:
[Qué se hizo con la respuesta]

---

### COM-002: Escalamiento de problema
**Fecha**: [timestamp]
**Razón**: Validación fallida 2 veces consecutivas

**Problema**:
[Descripción del problema]

**Opciones presentadas**:
a) [Opción A]
b) [Opción B]
c) [Opción C]

**Decisión del usuario**:
[Qué decidió]

## Bloqueos Actuales

### No hay bloqueos activos ✅

<!--
### BLOQUEO-001: [Título del bloqueo]
**Severidad**: Crítica
**Desde**: [timestamp]
**Duración**: [tiempo bloqueado]

**Descripción**:
[Qué está bloqueando el progreso]

**Dependencia**:
[De qué depende resolverlo]

**Acciones para desbloquear**:
1. [Acción 1]
2. [Acción 2]

**Responsable**: [Usuario | Agente | Externo]
-->

## Riesgos Activos

### RIESGO-001: [Título del riesgo]
**Probabilidad**: Alta | Media | Baja
**Impacto**: Alto | Medio | Bajo
**Estado**: Monitoreando | Mitigando | Materializado

**Descripción**:
[Descripción del riesgo]

**Plan de mitigación**:
[Qué se está haciendo para mitigarlo]

**Plan de contingencia** (si se materializa):
[Qué hacer si ocurre]

## Próximos Pasos

### Inmediatos (próximas 2 horas)
1. [ ] [Acción 1]
2. [ ] [Acción 2]

### Corto plazo (próximas 24 horas)
1. [ ] [Acción 1]
2. [ ] [Acción 2]

### Medio plazo (próximos 3-5 días)
1. [ ] [Acción 1]
2. [ ] [Acción 2]

## Checklist Final (para cuando termine)

### Técnico
- [ ] Todos los tests pasan
- [ ] Cobertura de tests >= 80%
- [ ] Linter pasa sin errores
- [ ] Sin vulnerabilidades de seguridad
- [ ] Performance dentro de objetivos
- [ ] Sin warnings importantes

### Documentación
- [ ] README actualizado
- [ ] API documentada
- [ ] ADRs creados
- [ ] Guías de uso escritas
- [ ] Changelog actualizado

### Proceso
- [ ] Todas las validaciones aprobadas
- [ ] Decisiones importantes documentadas
- [ ] Problemas encontrados resueltos
- [ ] Lecciones aprendidas registradas

## Notas Adicionales

[Cualquier nota adicional relevante para el proyecto]

---

**Última actualización**: [timestamp]
**Actualizado por**: Agente Coordinador
**Versión del template**: 1.0
**Estado del documento**: Activo | Archivado
