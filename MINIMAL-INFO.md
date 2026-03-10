# ℹ️ Rama MINIMAL - Información

Esta es la **rama minimal** del Sistema Multiagente. Contiene SOLO lo esencial para usar el sistema.

---

## 🎯 ¿Qué Contiene Esta Rama?

### ✅ Incluido (Lo Esencial)
- `core/00-DOCUMENT-PRODUCT.md` - Define QUÉ construir (producto, no técnico)
- `core/01-DOCUMENT-TECHNICAL-CONSTRAINTS.md` - Restricciones técnicas (opcional)
- `core/agentes/*.md` - **8 agentes especializados** (incluye nuevo Agente Arquitecto)
- `outputs/` - Estructura vacía (se llena automáticamente)
- `README.md` - Guía de inicio rápido con caso de uso
- `.gitignore` - Configuración Git simplificada
- `MINIMAL-INFO.md` - Este archivo

### ❌ Excluido (Disponible en rama `main`)
- `core/docs/` - Guías detalladas y ejemplos extensos
- `core/templates/` - Templates de documentos
- `scripts/` - Scripts de automatización
- `examples/` - Ejemplos completos de ejecuciones
- `MIGRATION-SUMMARY.md` - Historial de cambios
- `INDEX.md` - Índice de navegación

---

## 📊 Comparación de Ramas

| Aspecto | Rama `minimal` | Rama `main` |
|---------|----------------|-------------|
| **Archivos** | 11 archivos (con nuevo Arquitecto) | 30+ archivos |
| **Agentes** | 8 agentes (incluye Arquitecto) | 8 agentes + extras |
| **Documentación** | 1 README conciso | Múltiples guías detalladas |
| **Complejidad** | Mínima | Completa |
| **Tiempo de lectura** | 15 minutos | 60+ minutos |
| **Caso de uso** | Empezar rápido | Documentación completa |
| **Scripts** | ❌ No incluidos | ✅ Automatización completa |
| **Ejemplos** | ❌ Solo descripción | ✅ Ejemplos completos ejecutados |
| **Innovación** | ✅ Agente Arquitecto decide stack | ✅ Agente Arquitecto decide stack |

---

## 🚀 Cuándo Usar Esta Rama

### Usa `minimal` si:
✅ Quieres empezar inmediatamente sin leer mucho
✅ Ya entiendes el concepto de sistemas multiagente
✅ Prefieres simplicidad sobre documentación extensa
✅ Solo necesitas las definiciones de agentes
✅ Vas a explorar por tu cuenta

### Usa `main` si:
✅ Necesitas guías paso a paso detalladas
✅ Quieres scripts de automatización
✅ Necesitas ejemplos completos de referencia
✅ Vas a onboardear a un equipo
✅ Quieres documentación exhaustiva

---

## 🔄 Cambiar Entre Ramas

### Ver rama actual:
```bash
git branch
```

### Cambiar a rama completa:
```bash
git checkout main
```

### Volver a rama minimal:
```bash
git checkout minimal
```

---

## 📦 Estructura de Esta Rama

```
sistema-multiagentico/
├── core/
│   ├── 00-DOCUMENT-PRODUCT.md              ← Define QUÉ construir
│   ├── 01-DOCUMENT-TECHNICAL-CONSTRAINTS.md ← Restricciones (opcional)
│   └── agentes/                             ← 8 agentes
│       ├── 01-AGENTE-COORDINADOR.md
│       ├── 08-AGENTE-ARQUITECTO.md         ← NUEVO: Decide stack
│       ├── 02-AGENTE-PLANIFICADOR.md
│       ├── 03-AGENTE-VALIDADOR.md
│       ├── 04-AGENTE-DISENADOR.md
│       ├── 05-AGENTE-DESARROLLADOR.md
│       ├── 06-AGENTE-TESTING.md
│       └── 07-AGENTE-DOCUMENTACION.md
├── outputs/                                 ← Se genera aquí
│   ├── estados/
│   ├── planes/
│   ├── disenos/
│   └── reportes/
├── .gitignore
├── MINIMAL-INFO.md                          ← Este archivo
└── README.md                                ← Inicio rápido
```

**Total**: 11 archivos esenciales (2 docs producto + 8 agentes + 3 otros)

---

## ⚡ Inicio Rápido (Desde Aquí)

```bash
# 1. Leer el README
cat README.md

# 2. Definir producto (QUÉ construir, no CÓMO)
vi core/00-DOCUMENT-PRODUCT.md

# 3. (Opcional) Definir restricciones técnicas
vi core/01-DOCUMENT-TECHNICAL-CONSTRAINTS.md

# 4. Leer definición del Coordinador
cat core/agentes/01-AGENTE-COORDINADOR.md

# 5. Leer definición del NUEVO Agente Arquitecto
cat core/agentes/08-AGENTE-ARQUITECTO.md

# 6. ¡Empezar a usar con tu LLM!
# El Arquitecto analizará tu proyecto y decidirá el stack más apropiado
```

---

## 🎓 Filosofía de Esta Rama

**Menos es más**. Esta rama sigue el principio de:
- ✅ Proporcionar solo lo necesario para empezar
- ✅ Minimizar la sobrecarga cognitiva
- ✅ Permitir exploración rápida
- ✅ Facilitar personalización
- ❌ No abrumar con documentación
- ❌ No incluir "extras" opcionales

---

## 🛠️ Mantenimiento

Esta rama se mantiene sincronizada con `main` en:
- ✅ Definiciones de agentes
- ✅ Archivo de estándares
- ✅ Estructura de outputs

Pero NO incluye:
- ❌ Documentación extensa
- ❌ Scripts auxiliares
- ❌ Ejemplos completos
- ❌ Templates adicionales

---

## 📝 Notas

### ¿Por Qué Dos Ramas?

**Diferentes usuarios, diferentes necesidades:**
- Usuarios avanzados → prefieren minimal
- Equipos completos → prefieren main
- Exploradores → prefieren minimal
- Implementadores → prefieren main

### ¿Puedo Contribuir?

¡Sí! Pero recuerda:
- Esta rama debe permanecer **minimal**
- Si tu contribución añade complejidad → va a `main`
- Si mejora claridad sin añadir archivos → puede ir aquí

---

**Versión**: Minimal 1.0
**Última actualización**: 10 de Marzo de 2026
**Mantenedor**: Sistema Multiagente

Para documentación completa, scripts y ejemplos: `git checkout main`
