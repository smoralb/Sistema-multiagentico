#!/bin/bash
# Descripción: Inicializa un nuevo proyecto con el sistema de multiagente
# Uso: ./scripts/init-project.sh [nombre-proyecto]

set -euo pipefail  # Exit on error, undefined vars, pipe failures

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función de ayuda
show_help() {
    cat << EOF
${BLUE}Sistema Multiagente - Inicialización de Proyecto${NC}

${YELLOW}Uso:${NC} ${0##*/} [nombre-proyecto]

${YELLOW}Descripción:${NC}
    Inicializa la estructura y configuración para un nuevo proyecto.

${YELLOW}Acciones:${NC}
    1. Valida estructura de directorios
    2. Verifica que core/00-DOCUMENT-PRODUCT-STANDARDS.md existe
    3. Crea directorios en outputs/ si no existen
    4. Configura .gitignore si no existe
    5. Muestra próximos pasos

${YELLOW}Ejemplos:${NC}
    ${0##*/}                      # Validar estructura actual
    ${0##*/} mi-proyecto-api      # Inicializar proyecto nuevo

EOF
}

# Parse argumentos
PROYECTO_NOMBRE="${1:-default-project}"

if [[ "$PROYECTO_NOMBRE" == "-h" ]] || [[ "$PROYECTO_NOMBRE" == "--help" ]]; then
    show_help
    exit 0
fi

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}  Sistema Multiagente - Inicialización${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Obtener directorio raíz del proyecto
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$( cd "$SCRIPT_DIR/.." && pwd )"

echo -e "${YELLOW}📁 Directorio del proyecto:${NC} $PROJECT_ROOT"
echo -e "${YELLOW}📝 Nombre del proyecto:${NC} $PROYECTO_NOMBRE"
echo ""

# Validar estructura core/
echo -e "${YELLOW}[1/5]${NC} Validando estructura core/..."

if [ ! -d "$PROJECT_ROOT/core" ]; then
    echo -e "${RED}❌ ERROR: Directorio core/ no encontrado${NC}"
    exit 1
fi

if [ ! -f "$PROJECT_ROOT/core/00-DOCUMENT-PRODUCT-STANDARDS.md" ]; then
    echo -e "${RED}❌ ERROR: core/00-DOCUMENT-PRODUCT-STANDARDS.md no encontrado${NC}"
    exit 1
fi

if [ ! -d "$PROJECT_ROOT/core/agentes" ]; then
    echo -e "${RED}❌ ERROR: core/agentes/ no encontrado${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Estructura core/ válida${NC}"
echo ""

# Crear directorios outputs/
echo -e "${YELLOW}[2/5]${NC} Creando estructura outputs/..."

mkdir -p "$PROJECT_ROOT/outputs/estados"
mkdir -p "$PROJECT_ROOT/outputs/planes"
mkdir -p "$PROJECT_ROOT/outputs/disenos"
mkdir -p "$PROJECT_ROOT/outputs/reportes"
mkdir -p "$PROJECT_ROOT/outputs/tests"
mkdir -p "$PROJECT_ROOT/outputs/archive"

# Crear .gitkeep files
touch "$PROJECT_ROOT/outputs/.gitkeep"
touch "$PROJECT_ROOT/outputs/estados/.gitkeep"
touch "$PROJECT_ROOT/outputs/planes/.gitkeep"
touch "$PROJECT_ROOT/outputs/disenos/.gitkeep"
touch "$PROJECT_ROOT/outputs/reportes/.gitkeep"
touch "$PROJECT_ROOT/outputs/tests/.gitkeep"

echo -e "${GREEN}✅ Estructura outputs/ creada${NC}"
echo ""

# Crear directorios examples/ y scripts/
echo -e "${YELLOW}[3/5]${NC} Validando directorios examples/ y scripts/..."

mkdir -p "$PROJECT_ROOT/examples"
mkdir -p "$PROJECT_ROOT/scripts"

echo -e "${GREEN}✅ Directorios validados${NC}"
echo ""

# Verificar .gitignore
echo -e "${YELLOW}[4/5]${NC} Verificando .gitignore..."

if [ ! -f "$PROJECT_ROOT/.gitignore" ]; then
    echo -e "${YELLOW}⚠️  .gitignore no encontrado, considera crearlo${NC}"
else
    echo -e "${GREEN}✅ .gitignore existe${NC}"
fi
echo ""

# Mostrar resumen
echo -e "${YELLOW}[5/5]${NC} Resumen de inicialización"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

echo -e "${GREEN}✅ Proyecto '$PROYECTO_NOMBRE' inicializado correctamente${NC}"
echo ""

echo -e "${YELLOW}📂 Estructura creada:${NC}"
echo "   • core/ - Sistema base (no modificar frecuentemente)"
echo "   • outputs/ - Archivos generados automáticamente"
echo "   • examples/ - Ejemplos de referencia"
echo "   • scripts/ - Scripts de automatización"
echo ""

echo -e "${YELLOW}🎯 Próximos pasos:${NC}"
echo ""
echo -e "   ${BLUE}1.${NC} Personaliza los estándares del proyecto:"
echo -e "      ${GREEN}vi $PROJECT_ROOT/core/00-DOCUMENT-PRODUCT-STANDARDS.md${NC}"
echo ""
echo -e "   ${BLUE}2.${NC} Completa la configuración:"
echo "      • Stack tecnológico"
echo "      • Patrones de arquitectura"
echo "      • Estándares de código"
echo "      • Requisitos de testing"
echo ""
echo -e "   ${BLUE}3.${NC} Lee la documentación:"
echo -e "      ${GREEN}cat $PROJECT_ROOT/README.md${NC}"
echo -e "      ${GREEN}cat $PROJECT_ROOT/core/docs/GUIA-RAPIDA.md${NC}"
echo ""
echo -e "   ${BLUE}4.${NC} Inicia tu primera funcionalidad:"
echo "      • El Agente Coordinador creará archivos en outputs/"
echo "      • Monitorea el progreso en outputs/estados/"
echo ""

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}¡Listo para usar el sistema multiagente!${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Crear archivo de configuración del proyecto (opcional)
CONFIG_FILE="$PROJECT_ROOT/.multiagente-config"
if [ ! -f "$CONFIG_FILE" ]; then
    cat > "$CONFIG_FILE" << CONFIGEOF
# Configuración del Sistema Multiagente
PROYECTO_NOMBRE=$PROYECTO_NOMBRE
FECHA_INICIALIZACION=$(date +%Y-%m-%d)
VERSION=1.0
CONFIGEOF
    echo -e "${GREEN}✅ Archivo de configuración creado: .multiagente-config${NC}"
fi
