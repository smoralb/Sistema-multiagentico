# ℹ️ Rama MINIMAL - Información

Esta es la **rama minimal** del Sistema Multiagente. Contiene SOLO lo esencial para usar el sistema.

---

## 🎯 ¿Qué Contiene Esta Rama?

### ✅ Incluido (Lo Esencial)
- `core/00-DOCUMENT-PRODUCT-STANDARDS.md` - Configuración de estándares
- `core/agentes/*.md` - Las 7 definiciones de agentes
- `outputs/` - Estructura vacía (se llena automáticamente)
- `README.md` - Guía de inicio rápido con caso de uso
- `.gitignore` - Configuración Git simplificada

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
| **Archivos** | 9 archivos | 30+ archivos |
| **Documentación** | 1 README conciso | Múltiples guías detalladas |
| **Complejidad** | Mínima | Completa |
| **Tiempo de lectura** | 10 minutos | 60+ minutos |
| **Caso de uso** | Empezar rápido | Documentación completa |
| **Scripts** | ❌ No incluidos | ✅ Automatización completa |
| **Ejemplos** | ❌ Solo descripción | ✅ Ejemplos completos ejecutados |

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
│   ├── 00-DOCUMENT-PRODUCT-STANDARDS.md  ← Configura esto
│   └── agentes/                           ← 7 agentes
│       ├── 01-AGENTE-COORDINADOR.md
│       ├── 02-AGENTE-PLANIFICADOR.md
│       ├── 03-AGENTE-VALIDADOR.md
│       ├── 04-AGENTE-DISENADOR.md
│       ├── 05-AGENTE-DESARROLLADOR.md
│       ├── 06-AGENTE-TESTING.md
│       └── 07-AGENTE-DOCUMENTACION.md
├── outputs/                               ← Se genera aquí
│   ├── estados/
│   ├── planes/
│   ├── disenos/
│   └── reportes/
├── .gitignore
├── MINIMAL-INFO.md                        ← Este archivo
└── README.md                              ← Inicio rápido
```

**Total**: 9 archivos esenciales

---

## ⚡ Inicio Rápido (Desde Aquí)

```bash
# 1. Leer el README
cat README.md

# 2. Configurar estándares
vi core/00-DOCUMENT-PRODUCT-STANDARDS.md

# 3. Leer definición del Coordinador
cat core/agentes/01-AGENTE-COORDINADOR.md

# 4. ¡Empezar a usar con tu LLM!
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
