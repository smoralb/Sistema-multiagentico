# 🔄 Guía de Migración a v2.0.0

Guía rápida para migrar de v1.0.0 a v2.0.0 con el nuevo Agente Arquitecto.

---

## 📊 Resumen de Cambios

### Lo Nuevo
✅ **Agente Arquitecto**: Toma decisiones técnicas inteligentes
✅ **Separación de documentos**: Producto (QUÉ) vs Técnico (CÓMO)
✅ **Stack adaptativo**: Se ajusta a complejidad del proyecto

### Lo Eliminado
❌ `core/00-DOCUMENT-PRODUCT-STANDARDS.md` (documento mezclado)

### Lo Reemplazado
📄 `00-DOCUMENT-PRODUCT.md` (solo requisitos de negocio)
📄 `01-DOCUMENT-TECHNICAL-CONSTRAINTS.md` (solo restricciones técnicas)

---

## 🚀 Migración en 3 Pasos (5 minutos)

### PASO 1: Crear Documento de Producto

```bash
# Crear nuevo documento
vi core/00-DOCUMENT-PRODUCT.md
```

**Incluir**:
```markdown
## Visión del Producto
[Tu proyecto: qué es, para quién, qué problema resuelve]

## Funcionalidades Principales
1. [Funcionalidad 1]
2. [Funcionalidad 2]
...

## Requisitos No Funcionales
- Performance: [targets]
- SEO: [requisitos]
- Accesibilidad: [nivel]
- Responsive: [dispositivos]
```

**NO incluir**:
- ❌ Stack tecnológico (React, Next.js, etc.)
- ❌ Arquitectura de software (MVC, Clean, etc.)
- ❌ Patrones de diseño
- ❌ Estándares de código

> **El Arquitecto decidirá todo esto automáticamente**

---

### PASO 2: (Opcional) Crear Restricciones Técnicas

**¿Tienes restricciones reales?**

✅ **SÍ** (tecnologías prohibidas/requeridas, limitaciones) → Crear documento
❌ **NO** (libertad total para decidir) → Saltar este paso

```bash
# Solo si tienes restricciones
vi core/01-DOCUMENT-TECHNICAL-CONSTRAINTS.md
```

**Ejemplo**:
```markdown
## Restricciones Obligatorias

### Tecnologías Requeridas
✅ DEBE usar:
- TypeScript (política de empresa)
- PostgreSQL (base de datos estandarizada)

### Tecnologías Prohibidas
❌ NO usar:
- Vue.js (equipo sin experiencia)
- MongoDB (queremos SQL)

### Restricciones de Presupuesto
- Hosting: Máximo $20/mes
- Preferir tier gratuito

### Experiencia del Equipo
- Equipo: 2 devs con React/Node.js
- Sin experiencia en Python, Go
```

---

### PASO 3: Eliminar Documento Antiguo

```bash
# Eliminar archivo obsoleto
rm core/00-DOCUMENT-PRODUCT-STANDARDS.md

# Verificar estructura
ls -la core/
# Deberías ver:
# - 00-DOCUMENT-PRODUCT.md ✓
# - 01-DOCUMENT-TECHNICAL-CONSTRAINTS.md ✓ (si lo creaste)
# - agentes/ ✓
```

---

## 📝 Actualizar Prompts

### ANTES (v1.0.0)
```
"Actúa como el Agente Coordinador.

Consulta los estándares en core/00-DOCUMENT-PRODUCT-STANDARDS.md.

Solicitud: Implementa landing page con React + Next.js + Tailwind."
```

### DESPUÉS (v2.0.0)
```
"Actúa como el Agente Coordinador.

Consulta el documento de producto en core/00-DOCUMENT-PRODUCT.md.

Solicitud: Implementa landing page corporativa.

Requisitos:
- Hero con CTA
- Sección de servicios
- Formulario de contacto
- 100% responsive
- Lighthouse >90

IMPORTANTE: NO especifiques tecnologías.
El Agente Arquitecto analizará la complejidad y decidirá el stack apropiado."
```

---

## 🎯 Ejemplos de Migración

### Ejemplo 1: Proyecto Simple

#### ANTES (v1.0.0)
```markdown
# 00-DOCUMENT-PRODUCT-STANDARDS.md

## Stack Tecnológico
- React + Vite
- Tailwind CSS
- TypeScript

## Proyecto
Landing page con 5 secciones
```

#### DESPUÉS (v2.0.0)

**Archivo 1**: `00-DOCUMENT-PRODUCT.md`
```markdown
## Visión del Producto
Landing page corporativa estática.

## Funcionalidades
1. Hero section
2. Servicios (4)
3. Sobre nosotros
4. Contacto
5. Footer

## Requisitos No Funcionales
- Carga: <2 segundos
- SEO: Meta tags completos
- 100% responsive
```

**Archivo 2**: `01-DOCUMENT-TECHNICAL-CONSTRAINTS.md`
```markdown
# Vacío o eliminado (sin restricciones)
```

**Resultado**: Arquitecto decide Astro + Tailwind (más apropiado para estático)

---

### Ejemplo 2: Proyecto con Restricciones

#### ANTES (v1.0.0)
```markdown
# 00-DOCUMENT-PRODUCT-STANDARDS.md

## Stack Tecnológico
- React (obligatorio)
- TypeScript (obligatorio)
- Node.js backend

## Proyecto
Dashboard con autenticación
```

#### DESPUÉS (v2.0.0)

**Archivo 1**: `00-DOCUMENT-PRODUCT.md`
```markdown
## Visión del Producto
Dashboard empresarial con autenticación.

## Funcionalidades
1. Login/Registro
2. Dashboard con métricas
3. Tablas de datos
4. Formularios CRUD
5. Exportación a PDF

## Requisitos No Funcionales
- Autenticación: JWT o sessions
- Performance: Carga <3s
- Seguridad: OWASP Top 10
- Escalabilidad: 1000 usuarios concurrentes
```

**Archivo 2**: `01-DOCUMENT-TECHNICAL-CONSTRAINTS.md`
```markdown
## Restricciones Obligatorias

### Tecnologías Requeridas
✅ DEBE usar:
- React (experiencia del equipo)
- TypeScript (política de empresa)

### Experiencia del Equipo
- 3 devs React/Node.js
- Sin experiencia en Vue, Angular, Python
```

**Resultado**: Arquitecto decide Next.js + TypeScript + tRPC + Prisma (cumple restricciones y es apropiado para complejidad)

---

## 🔍 Verificación Post-Migración

### Checklist
- [ ] `core/00-DOCUMENT-PRODUCT.md` existe y está completo
- [ ] `core/01-DOCUMENT-TECHNICAL-CONSTRAINTS.md` existe (si hay restricciones) O no existe (si no hay)
- [ ] `core/00-DOCUMENT-PRODUCT-STANDARDS.md` eliminado
- [ ] `core/agentes/08-AGENTE-ARQUITECTO.md` existe (debe estar desde Git)
- [ ] Prompts actualizados (no especifican stack tecnológico)
- [ ] Entendimiento del nuevo flujo (Coordinador → Arquitecto → Planificador...)

### Comandos de Verificación
```bash
# Ver archivos en core/
ls -la core/

# Debería mostrar:
# 00-DOCUMENT-PRODUCT.md ✓
# 01-DOCUMENT-TECHNICAL-CONSTRAINTS.md ✓ (opcional)
# agentes/ ✓

# Ver agentes
ls -la core/agentes/

# Debería mostrar 8 archivos (01-07 + 08-ARQUITECTO)

# Verificar que el viejo archivo no existe
ls core/00-DOCUMENT-PRODUCT-STANDARDS.md
# Debería dar error: No such file or directory ✓
```

---

## ❓ FAQ de Migración

### P: ¿Debo crear siempre 01-DOCUMENT-TECHNICAL-CONSTRAINTS.md?
**R**: No, solo si tienes restricciones reales. Si el Arquitecto tiene libertad total, puedes eliminar este archivo.

### P: ¿Qué pasa si especifico tecnologías en 00-DOCUMENT-PRODUCT.md?
**R**: El Arquitecto las ignorará. Mejor especificarlas como restricciones en `01-DOCUMENT-TECHNICAL-CONSTRAINTS.md` si son obligatorias.

### P: ¿El Arquitecto siempre elige tecnologías diferentes?
**R**: No, puede elegir las mismas que antes, pero ahora lo hará con justificación basada en análisis de complejidad.

### P: ¿Puedo forzar una tecnología específica?
**R**: Sí, agrégala como "Tecnología Requerida" en `01-DOCUMENT-TECHNICAL-CONSTRAINTS.md`.

### P: ¿Qué pasa con proyectos existentes en progreso?
**R**: Puedes continuar con el stack actual. El Arquitecto es para nuevos proyectos o refactors grandes.

### P: ¿Cuánto tiempo toma el análisis del Arquitecto?
**R**: ~30 minutos adicionales, pero previene refactors futuros (ahorro neto de horas/días).

### P: ¿El Arquitecto puede equivocarse?
**R**: Sí, por eso el Validador revisa su output. Si no estás de acuerdo, puedes agregar restricciones y re-ejecutar.

---

## 🆘 Problemas Comunes

### Problema 1: "No encuentro 08-AGENTE-ARQUITECTO.md"
**Solución**:
```bash
# Verificar que estás en rama minimal
git branch
# Debería mostrar: * minimal

# Si no, cambiar a minimal
git checkout minimal

# Hacer pull para obtener últimos cambios
git pull origin minimal

# Verificar
ls core/agentes/08-AGENTE-ARQUITECTO.md
```

### Problema 2: "El sistema sigue pidiendo 00-DOCUMENT-PRODUCT-STANDARDS.md"
**Solución**: Actualiza tus prompts. El archivo cambió de nombre y contenido.

### Problema 3: "No sé si tengo restricciones técnicas"
**Solución**: Pregúntate:
- ¿Hay tecnologías que NO puedes usar? → SÍ: Crear documento
- ¿Hay tecnologías que DEBES usar? → SÍ: Crear documento
- ¿Hay limitaciones de presupuesto/equipo/tiempo? → SÍ: Crear documento
- ¿Todo es flexible? → NO: Eliminar documento

### Problema 4: "El Arquitecto eligió una tecnología que no conozco"
**Solución**:
1. Revisar `outputs/disenos/arquitectura-[proyecto].md` para ver justificación
2. Agregar restricción en `01-DOCUMENT-TECHNICAL-CONSTRAINTS.md`:
   ```markdown
   ## Experiencia del Equipo
   ❌ NO usar: [tecnología desconocida] (equipo sin experiencia)
   ```
3. Re-ejecutar Arquitecto

---

## ✅ Migración Completada

Si completaste los 3 pasos y pasaste la verificación, ¡estás listo!

### Próximos Pasos
1. Prueba el sistema con un proyecto pequeño
2. Revisa la salida del Arquitecto en `outputs/disenos/arquitectura-*.md`
3. Valida que las decisiones sean apropiadas
4. Ajusta `01-DOCUMENT-TECHNICAL-CONSTRAINTS.md` si es necesario
5. Usa el sistema en proyectos reales

---

## 📚 Recursos Adicionales

- **CHANGELOG.md**: Lista completa de cambios
- **README.md**: Guía de uso actualizada
- **core/agentes/08-AGENTE-ARQUITECTO.md**: Definición completa del agente
- **MINIMAL-INFO.md**: Info sobre rama minimal

---

**Versión de esta guía**: 2.0.0
**Fecha**: 2026-03-10
**Tiempo estimado de migración**: 5 minutos
