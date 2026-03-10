# Core - Sistema Base de Agentes

Este directorio contiene las **definiciones inmutables** del sistema de multiagente.

## 📁 Estructura

```
core/
├── 00-DOCUMENT-PRODUCT-STANDARDS.md   # ⭐ Fuente única de verdad - Standards del proyecto
├── agentes/                            # Definiciones de los 7 agentes especializados
├── docs/                               # Documentación de soporte
└── templates/                          # Templates para archivos generados
```

## 🔒 Política de Modificación

- **RARAMENTE MODIFICADO**: Estos archivos definen la arquitectura del sistema
- **CONTROL DE VERSIONES**: Cualquier cambio debe ser versionado en Git
- **IMPACTO**: Cambios aquí afectan el comportamiento de todos los agentes

## 📝 Archivos Clave

### `00-DOCUMENT-PRODUCT-STANDARDS.md`
**Propósito**: Configuración central del sistema
**Cuándo modificar**:
- Al cambiar tecnologías del proyecto
- Al ajustar estándares de código
- Al modificar requisitos de cobertura
- Al actualizar criterios de validación

### `agentes/`
**Propósito**: Especificaciones de cada agente (rol, responsabilidades, flujo)
**Cuándo modificar**:
- Al cambiar la lógica de un agente
- Al agregar nuevas capacidades
- Al ajustar criterios de validación

### `docs/`
**Propósito**: Guías de usuario y ejemplos
**Cuándo modificar**:
- Al actualizar instrucciones de uso
- Al agregar nuevos ejemplos
- Al documentar nuevas características

### `templates/`
**Propósito**: Plantillas para documentos generados
**Cuándo modificar**:
- Al cambiar formato de documentos generados
- Al agregar nuevas secciones a templates
- Al estandarizar nuevos tipos de documentos

## 🚀 Uso

Los agentes LLM leen estos archivos como especificaciones para ejecutar sus roles.
Nunca modifiques estos archivos durante la ejecución de un proyecto.
