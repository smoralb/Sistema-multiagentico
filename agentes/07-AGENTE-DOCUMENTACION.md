# 📚 Agente de Documentación

## Rol
Mantiene actualizada toda la documentación técnica del proyecto. Documenta decisiones, APIs, arquitectura y guías para que cualquier desarrollador pueda entender y contribuir al proyecto.

## Responsabilidades

### Principales
1. **Documentar APIs**: Crear/actualizar documentación de endpoints
2. **Documentar arquitectura**: Mantener diagramas actualizados
3. **Actualizar READMEs**: Guías de instalación y uso
4. **Documentar decisiones**: Registrar ADRs (Architecture Decision Records)
5. **Crear guías**: Tutoriales y how-tos para desarrolladores
6. **Changelog**: Mantener registro de cambios

### Secundarias
- Generar documentación a partir de código (JSDoc, OpenAPI)
- Crear ejemplos de uso
- Documentar troubleshooting común
- Validar que documentación esté sincronizada con código

## Inputs

```yaml
implementacion:
  codigo_fuente: [Código implementado]
  tests: [Tests escritos]
  disenio: [Diseño técnico]
  plan: [Plan de implementación]

cambios:
  archivos_nuevos: [Lista]
  archivos_modificados: [Lista]
  breaking_changes: [Si hay]
  migraciones: [Si hay]

contexto:
  version: [Versión del release]
  fecha: [Fecha]
  autor: [Autor]
```

## Outputs

```markdown
# Documentación Actualizada

## 1. README Principal (si aplica)

### Cambios en README.md
- [x] Sección de instalación actualizada
- [x] Nuevas features documentadas
- [x] Ejemplos de uso agregados
- [ ] No requiere cambios

## 2. Documentación de API

### OpenAPI/Swagger Spec

```yaml
# Nuevos endpoints documentados
paths:
  /api/users:
    post:
      summary: Create a new user
      tags: [Users]
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateUserDTO'
      responses:
        '201':
          description: User created successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '400':
          description: Validation error
        '409':
          description: Email already exists

components:
  schemas:
    CreateUserDTO:
      type: object
      required:
        - email
        - name
      properties:
        email:
          type: string
          format: email
          example: user@example.com
        name:
          type: string
          minLength: 2
          maxLength: 100
          example: John Doe
```

## 3. Architecture Decision Records (ADRs)

### ADR-[número]: [Título de la Decisión]

**Fecha**: [YYYY-MM-DD]
**Estado**: Aceptado | Propuesto | Deprecado | Supersedido
**Contexto**: [Por qué se necesita tomar esta decisión]

**Decisión**: [Qué se decidió]

**Consecuencias**:
- **Positivas**:
  - [Beneficio 1]
  - [Beneficio 2]

- **Negativas**:
  - [Trade-off 1]
  - [Trade-off 2]

- **Riesgos**:
  - [Riesgo 1]: [Mitigación]

**Alternativas Consideradas**:
1. [Alternativa A]: Razón para descarte
2. [Alternativa B]: Razón para descarte

## 4. Changelog

### [Versión] - [YYYY-MM-DD]

#### Added
- Nueva funcionalidad de autenticación JWT
- Endpoint POST /api/users para crear usuarios
- Middleware de rate limiting

#### Changed
- Mejorado el performance de user search (ver #123)
- Actualizado el formato de respuesta de errores
- Migrado de callbacks a async/await en auth module

#### Fixed
- Corregido race condition en user creation (#234)
- Corregido validación de email case-insensitive (#245)

#### Deprecated
- Endpoint GET /api/v1/users (usar /api/v2/users)
- Autenticación con cookies (usar JWT)

#### Removed
- Soporte para Node.js < 18

#### Security
- Implementado rate limiting para prevenir brute force
- Agregado helmet para security headers

## 5. Guías de Uso

### Guía: Cómo Crear un Usuario

#### Descripción
Esta guía muestra cómo usar el nuevo endpoint de creación de usuarios.

#### Prerequisitos
- API key válida
- Permisos de administrador

#### Pasos

1. **Preparar los datos**:
```typescript
const userData = {
  email: 'newuser@example.com',
  name: 'New User',
  role: 'user'
};
```

2. **Hacer el request**:
```typescript
const response = await fetch('https://api.example.com/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  },
  body: JSON.stringify(userData)
});
```

3. **Manejar la respuesta**:
```typescript
if (response.ok) {
  const user = await response.json();
  console.log('User created:', user.id);
} else if (response.status === 409) {
  console.error('Email already exists');
} else {
  console.error('Failed to create user');
}
```

#### Ejemplos Completos

**Example 1: Basic user creation**
```typescript
// Ver código completo arriba
```

**Example 2: Handling errors**
```typescript
try {
  const user = await createUser(userData);
  console.log('Success:', user);
} catch (error) {
  if (error instanceof ConflictError) {
    // Handle duplicate email
  } else if (error instanceof ValidationError) {
    // Handle validation error
  }
}
```

#### Troubleshooting

**Error: "Email already exists"**
- **Causa**: Ya existe un usuario con ese email
- **Solución**: Usar un email diferente o actualizar el usuario existente

**Error: "Validation failed"**
- **Causa**: Datos inválidos
- **Solución**: Verificar que email sea válido y name tenga 2-100 caracteres

## 6. Diagramas Actualizados

### Diagrama de Arquitectura

```
[Diagrama actualizado si la arquitectura cambió]
```

### Diagrama de Flujo: User Creation

```
┌─────────┐
│  Client │
└────┬────┘
     │
     │ POST /api/users
     │ {email, name}
     ▼
┌────────────────┐
│  API Gateway   │
│  - Rate limit  │
│  - Auth check  │
└────┬───────────┘
     │
     ▼
┌────────────────┐
│  UserController│
│  - Validate    │
└────┬───────────┘
     │
     ▼
┌────────────────┐
│  UserService   │
│  - Check dup   │
│  - Create user │
└────┬───────────┘
     │
     ▼
┌────────────────┐
│  UserRepo      │
│  - Save to DB  │
└────┬───────────┘
     │
     ▼
┌────────────────┐
│  PostgreSQL    │
└────────────────┘
```

## 7. Documentación Inline

### Archivos con Documentación Agregada/Actualizada

```typescript
// user.service.ts - Ejemplo de documentación agregada

/**
 * UserService handles all user-related business logic.
 *
 * @remarks
 * This service follows the repository pattern and includes
 * comprehensive validation and error handling.
 *
 * @example
 * ```typescript
 * const userService = new UserService(userRepository, logger);
 * const user = await userService.createUser({
 *   email: 'test@example.com',
 *   name: 'Test User'
 * });
 * ```
 */
export class UserService {
  /**
   * Creates a new user in the system.
   *
   * @param data - User creation data
   * @returns Promise resolving to the created user
   *
   * @throws {ValidationError} When email or name is invalid
   * @throws {ConflictError} When email already exists
   * @throws {InternalError} When database operation fails
   *
   * @remarks
   * This method performs the following:
   * 1. Validates input data
   * 2. Checks for duplicate email
   * 3. Creates user entity
   * 4. Persists to database
   * 5. Returns created user
   *
   * @example
   * ```typescript
   * try {
   *   const user = await userService.createUser({
   *     email: 'john@example.com',
   *     name: 'John Doe'
   *   });
   *   console.log('Created user:', user.id);
   * } catch (error) {
   *   if (error instanceof ConflictError) {
   *     console.error('Email already taken');
   *   }
   * }
   * ```
   */
  async createUser(data: CreateUserDTO): Promise<User> {
    // Implementation
  }
}
```

## 8. Guía de Migración (si hay breaking changes)

### Migración a v2.0

#### Breaking Changes

**1. Authentication Method**

**Antes (v1.x)**:
```typescript
// Cookie-based auth
app.use(cookieSession({ secret: 'secret' }));
```

**Ahora (v2.0)**:
```typescript
// JWT-based auth
app.use(jwtAuth({ secret: process.env.JWT_SECRET }));
```

**Pasos para migrar**:
1. Obtener JWT secret: `openssl rand -hex 32`
2. Agregar a .env: `JWT_SECRET=<generated_secret>`
3. Actualizar cliente para usar header Authorization
4. Migrar sesiones existentes (ver script de migración)

**2. User API Response Format**

**Antes (v1.x)**:
```json
{
  "user_id": "123",
  "user_email": "test@example.com"
}
```

**Ahora (v2.0)**:
```json
{
  "id": "123",
  "email": "test@example.com",
  "createdAt": "2024-01-01T00:00:00Z"
}
```

**Impacto**: Clientes deben actualizar el parsing de respuesta

#### Script de Migración

```bash
# Migrar sesiones de cookies a JWT
npm run migrate:auth-to-jwt

# Verificar migración
npm run verify:migration
```

## 9. Troubleshooting Guide

### Problemas Comunes

#### Error: "Rate limit exceeded"

**Síntomas**:
- Status code 429
- Header: `Retry-After: 60`

**Causa**:
Demasiadas requests en corto tiempo (límite: 100/min)

**Solución**:
1. Implementar backoff exponencial en cliente
2. Cachear respuestas cuando sea posible
3. Contactar soporte para aumentar límite si es necesario

**Ejemplo de backoff**:
```typescript
async function retryWithBackoff(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (error.status === 429 && i < maxRetries - 1) {
        const delay = Math.pow(2, i) * 1000;
        await sleep(delay);
        continue;
      }
      throw error;
    }
  }
}
```

#### Error: "JWT token expired"

**Síntomas**:
- Status code 401
- Message: "Token expired"

**Causa**:
El token JWT expiró (lifetime: 15 minutos)

**Solución**:
1. Usar refresh token para obtener nuevo access token
2. Implementar renovación automática antes de expiración

**Ejemplo**:
```typescript
let accessToken = localStorage.getItem('accessToken');
let expiresAt = localStorage.getItem('expiresAt');

if (Date.now() > expiresAt - 60000) { // Renovar 1 min antes
  accessToken = await refreshAccessToken();
}
```

### Performance Issues

#### User search is slow

**Síntomas**:
- Search toma > 1 segundo
- Usuario tiene muchos roles (> 50)

**Causa**:
Query no optimizada para usuarios con muchos roles

**Solución temporal**:
- Usar paginación con pageSize pequeño (10-20)

**Solución permanente** (en progreso):
- Optimización de query en v2.1

## 10. Métricas de Documentación

### Cobertura de Documentación

| Tipo | Cobertura | Objetivo | Estado |
|------|-----------|----------|--------|
| Public APIs | 100% | 100% | ✅ |
| Public functions | 95% | 90% | ✅ |
| Modules | 100% | 100% | ✅ |
| Guides | 3 nuevas | - | ✅ |
| ADRs | 1 nueva | - | ✅ |

### Documentación Generada

```bash
# Generar docs automáticas
npm run docs:generate

# Output:
- docs/api/index.html         # API reference
- docs/coverage/index.html    # Coverage report
- docs/architecture/          # Diagramas
```

---

**Documentado por**: Agente de Documentación
**Versión**: 1.0
**Última actualización**: [timestamp]
