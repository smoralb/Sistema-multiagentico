# Documento de Estándares y Producto

## 📋 Propósito
Este documento es la fuente única de verdad para todos los agentes del sistema. Define los estándares, principios y reglas que deben seguirse en cada fase del desarrollo.

## 🎯 Visión del Producto
<!-- Describe aquí la visión general de tu producto -->

**Ejemplo:**
- **Misión**: [Describe qué problema resuelve tu producto]
- **Usuarios objetivo**: [Define tu audiencia]
- **Propuesta de valor**: [Qué hace único a tu producto]

## 🏗️ Arquitectura General

### Stack Tecnológico
```yaml
Frontend:
  - Framework: [ej. React, Vue, Angular]
  - Lenguaje: [ej. TypeScript]
  - Estilos: [ej. TailwindCSS, CSS Modules]

Backend:
  - Framework: [ej. Node.js/Express, Django, FastAPI]
  - Lenguaje: [ej. TypeScript, Python]
  - Base de datos: [ej. PostgreSQL, MongoDB]

Testing:
  - Unit: [ej. Jest, Pytest]
  - Integration: [ej. Playwright, Cypress]
  - E2E: [ej. Selenium]
```

### Patrones de Arquitectura
- **Patrón principal**: [ej. MVC, Clean Architecture, Hexagonal]
- **Estructura de carpetas**: [Define tu estructura]
- **Separación de responsabilidades**: [Define capas y límites]

## 📐 Estándares de Diseño

### Principios de Diseño Técnico
1. **SOLID Principles**: Todos los componentes deben seguir principios SOLID
2. **DRY (Don't Repeat Yourself)**: Evitar duplicación de código
3. **KISS (Keep It Simple, Stupid)**: Priorizar soluciones simples
4. **Separation of Concerns**: Clara separación entre capas
5. **Single Source of Truth**: Evitar duplicación de estado

### Patrones de Diseño Permitidos
- [ ] Singleton (solo para casos específicos)
- [x] Factory Pattern
- [x] Repository Pattern
- [x] Observer Pattern
- [x] Dependency Injection

### Estructura de Módulos
```
/src
  /modules
    /[nombre-modulo]
      /domain        # Lógica de negocio
      /application   # Casos de uso
      /infrastructure # Implementaciones
      /presentation  # UI/API
      /__tests__     # Tests del módulo
```

## 💻 Estándares de Código

### Nomenclatura
- **Variables**: camelCase (ej. `userName`, `isActive`)
- **Funciones**: camelCase (ej. `getUserById`, `calculateTotal`)
- **Clases**: PascalCase (ej. `UserService`, `PaymentProcessor`)
- **Constantes**: UPPER_SNAKE_CASE (ej. `MAX_RETRY_ATTEMPTS`)
- **Archivos**: kebab-case (ej. `user-service.ts`, `payment-processor.js`)

### Reglas de Código
1. **Máximo de líneas por función**: 50 líneas
2. **Máximo de parámetros**: 3-4 parámetros (usar objetos para más)
3. **Complejidad ciclomática**: Máximo 10
4. **Cobertura de tests**: Mínimo 80%
5. **Comentarios**: Solo cuando el código no sea auto-explicativo

### Gestión de Errores
```typescript
// Ejemplo de manejo de errores esperado
try {
  // Operación
} catch (error) {
  logger.error('Contexto del error', { error, metadata });
  throw new CustomError('Mensaje descriptivo', { cause: error });
}
```

### Validación de Datos
- Validar en el boundary (API/Input)
- Usar schemas de validación (Zod, Joi, Pydantic)
- Nunca confiar en datos externos

## 🧪 Estándares de Testing

### Tipos de Tests Requeridos
1. **Unit Tests**: Cada función/método con lógica
2. **Integration Tests**: Interacciones entre módulos
3. **E2E Tests**: Flujos críticos de usuario
4. **Contract Tests**: APIs y contratos externos

### Estructura de Tests
```typescript
describe('ComponentName', () => {
  describe('methodName', () => {
    it('should do X when Y happens', () => {
      // Arrange
      const input = ...;

      // Act
      const result = methodName(input);

      // Assert
      expect(result).toBe(expected);
    });
  });
});
```

### Cobertura Mínima
- **Critical paths**: 100%
- **Business logic**: 95%
- **Utils/Helpers**: 90%
- **UI Components**: 70%

## 📝 Estándares de Documentación

### Documentación de Código
- JSDoc/DocStrings para funciones públicas
- README en cada módulo importante
- Diagramas de arquitectura actualizados

### Commits
```
tipo(ámbito): descripción breve

Descripción detallada si es necesario

- Cambio 1
- Cambio 2

Refs: #issue-number
```

**Tipos**: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`, `perf`

### Pull Requests
- Título descriptivo
- Descripción del cambio y motivación
- Screenshots/videos si aplica
- Tests añadidos
- Checklist de revisión completado

## 🔐 Estándares de Seguridad

1. **Nunca** hardcodear credenciales
2. Validar y sanitizar todos los inputs
3. Usar HTTPS en todas las comunicaciones
4. Implementar rate limiting
5. Logging de operaciones sensibles (sin datos sensibles)
6. Principio de mínimo privilegio

## 🚀 Estándares de Performance

1. **Tiempo de respuesta API**: < 200ms (p95)
2. **Tamaño de bundles**: < 200KB (inicial)
3. **First Contentful Paint**: < 1.5s
4. **Time to Interactive**: < 3.5s
5. **Lighthouse Score**: > 90

## ✅ Checklist de Validación por Fase

### Planificación
- [ ] Requisitos funcionales claros
- [ ] Requisitos no funcionales definidos
- [ ] Dependencias identificadas
- [ ] Estimación de complejidad
- [ ] Riesgos identificados

### Diseño
- [ ] Diagrama de arquitectura
- [ ] Interfaces definidas
- [ ] Patrones de diseño justificados
- [ ] Consideraciones de escalabilidad
- [ ] Plan de migración (si aplica)

### Desarrollo
- [ ] Sigue estándares de código
- [ ] Tests unitarios escritos
- [ ] Sin código duplicado
- [ ] Documentación actualizada
- [ ] Sin vulnerabilidades conocidas

### Testing
- [ ] Cobertura mínima alcanzada
- [ ] Todos los tests pasan
- [ ] Tests de regresión ejecutados
- [ ] Performance validado
- [ ] Casos edge cubiertos

## 🔄 Proceso de Iteración

Si un agente validador detecta incumplimientos:
1. Registrar el problema específico
2. Devolver al agente responsable con feedback concreto
3. Máximo 2 iteraciones por fase
4. Si persisten problemas, escalar a coordinador

## 📊 Métricas de Calidad

Mantener tracking de:
- Bugs en producción por feature
- Tiempo de entrega por fase
- Número de iteraciones necesarias
- Deuda técnica generada
- Satisfacción del equipo

---

**Versión**: 1.0
**Última actualización**: [Fecha]
**Mantenedores**: [Equipo]
