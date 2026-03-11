# Scripts - Automatización y Utilidades

Este directorio contiene **scripts de automatización** para facilitar el uso del sistema de multiagente.

## 📁 Scripts Disponibles

```
scripts/
├── init-project.sh              # Inicializa un nuevo proyecto
├── clean-outputs.sh             # Limpia archivos generados
├── archive-completed.sh         # Archiva features completadas
├── validate-structure.sh        # Valida estructura de directorios
├── generate-metrics.sh          # Genera reporte de métricas
└── backup-outputs.sh            # Backup de outputs importantes
```

## 🚀 Scripts Principales

### `init-project.sh`
**Propósito**: Inicializa configuración para un nuevo proyecto

**Uso**:
```bash
./scripts/init-project.sh [nombre-proyecto]
```

**Acciones**:
1. Crea `.gitignore` con reglas para outputs temporales
2. Copia `00-DOCUMENT-PRODUCT-STANDARDS.md` como template
3. Crea carpetas en `outputs/`
4. Inicializa Git hooks (opcional)
5. Genera archivo de configuración inicial

**Ejemplo**:
```bash
./scripts/init-project.sh mi-proyecto-api

# Output:
# ✅ Proyecto 'mi-proyecto-api' inicializado
# ✅ Estructura de directorios creada
# ✅ .gitignore configurado
# ✅ Edita core/00-DOCUMENT-PRODUCT-STANDARDS.md con tu stack tecnológico
```

---

### `clean-outputs.sh`
**Propósito**: Limpia archivos generados (útil para empezar de cero)

**Uso**:
```bash
# Modo interactivo (pregunta antes de borrar)
./scripts/clean-outputs.sh

# Modo forzado (borra todo sin preguntar)
./scripts/clean-outputs.sh --force

# Limpiar solo estados
./scripts/clean-outputs.sh --only estados

# Limpiar todo excepto reportes
./scripts/clean-outputs.sh --except reportes
```

**Opciones**:
- `--force`: No pide confirmación
- `--only [tipo]`: Solo limpia tipo específico (states/plans/designs/reportes)
- `--except [tipo]`: Limpia todo excepto tipo especificado
- `--older-than [days]`: Solo archivos más antiguos que X días

---

### `archive-completed.sh`
**Propósito**: Archiva outputs de features completadas

**Uso**:
```bash
# Archivar features completadas hace más de 30 días
./scripts/archive-completed.sh --days 30

# Archivar feature específica
./scripts/archive-completed.sh --feature jwt-authentication
```

**Acciones**:
1. Identifica features completadas basado en estado
2. Mueve outputs a `outputs/archive/[fecha]/[feature]/`
3. Crea archivo ZIP comprimido
4. Genera resumen de archivado

---

### `validate-structure.sh`
**Propósito**: Valida que la estructura de directorios es correcta

**Uso**:
```bash
./scripts/validate-structure.sh

# Modo verbose (muestra detalles)
./scripts/validate-structure.sh -v

# Auto-fix (intenta reparar problemas)
./scripts/validate-structure.sh --fix
```

**Validaciones**:
- ✅ Verifica existencia de carpetas requeridas
- ✅ Comprueba que `00-DOCUMENT-PRODUCT-STANDARDS.md` existe
- ✅ Valida que agents/*.md tienen formato correcto
- ✅ Verifica permisos de escritura en `outputs/`
- ✅ Comprueba que no hay outputs en `core/` (separación)

---

### `generate-metrics.sh`
**Propósito**: Genera reporte de métricas del sistema

**Uso**:
```bash
# Métricas de todas las features
./scripts/generate-metrics.sh

# Métricas de feature específica
./scripts/generate-metrics.sh --feature jwt-authentication

# Exportar a JSON
./scripts/generate-metrics.sh --format json > metrics.json
```

**Métricas generadas**:
```
📊 MÉTRICAS DEL SISTEMA
=======================

Features en progreso: 3
Features completadas: 12
Tasa de éxito: 80%

Por Agente:
- Planificador: 2.1 iteraciones promedio
- Diseñador: 1.8 iteraciones promedio
- Desarrollador: 1.3 iteraciones promedio
- Testing: 1.0 iteraciones promedio

Cobertura de tests:
- Promedio: 94%
- Mínimo: 87%
- Máximo: 99%

Tiempo promedio por fase:
- Planificación: 8 min
- Diseño: 12 min
- Desarrollo: 25 min
- Testing: 10 min
- Documentación: 5 min
```

---

### `backup-outputs.sh`
**Propósito**: Crea backup de outputs importantes

**Uso**:
```bash
# Backup de todos los outputs
./scripts/backup-outputs.sh

# Backup solo de features activas
./scripts/backup-outputs.sh --active-only

# Backup a ubicación específica
./scripts/backup-outputs.sh --dest ~/backups/
```

**Acciones**:
1. Crea archivo `.tar.gz` con timestamp
2. Incluye outputs + configuración
3. Calcula checksum para verificación
4. Almacena en `backups/` por defecto

---

## 🛠️ Scripts de Utilidad

### `git-hooks/pre-commit`
Valida que no se commiteen archivos de outputs temporales por error

### `git-hooks/post-merge`
Valida estructura después de merge para detectar conflictos

---

## 📝 Crear Nuevos Scripts

Template para nuevos scripts:

```bash
#!/bin/bash
# Descripción: [Propósito del script]
# Uso: ./script.sh [opciones]

set -euo pipefail  # Exit on error, undefined vars, pipe failures

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Función de ayuda
show_help() {
    cat << EOF
Uso: ${0##*/} [OPCIONES]

OPCIONES:
    -h, --help       Muestra esta ayuda
    -v, --verbose    Modo verbose

EJEMPLOS:
    ${0##*/} --verbose
EOF
}

# Tu código aquí
echo -e "${GREEN}✅ Script completado${NC}"
```

---

## 🔧 Instalación

```bash
# Dar permisos de ejecución a todos los scripts
chmod +x scripts/*.sh

# Instalar Git hooks (opcional)
cp scripts/git-hooks/* .git/hooks/
chmod +x .git/hooks/*
```

---

## 📚 Recursos

- Documentación de Bash: https://www.gnu.org/software/bash/manual/
- Shellcheck (linter): https://www.shellcheck.net/
- Best practices: https://google.github.io/styleguide/shellguide.html
