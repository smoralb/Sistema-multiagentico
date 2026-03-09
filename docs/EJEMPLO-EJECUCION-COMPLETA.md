# 📝 Ejemplo de Ejecución Completa del Sistema

Este documento muestra un ejemplo real y detallado de cómo el sistema multiagente procesa una solicitud de principio a fin.

## Solicitud del Usuario

```
"Implementa un sistema de autenticación con JWT que incluya:
- Login con email/password
- Refresh tokens
- Rate limiting para prevenir brute force
- Endpoints para login, logout y refresh"
```

---

## Fase 1: Coordinación Inicial

### Agente Coordinador - Análisis

```markdown
📊 Análisis de Solicitud Recibida

Tipo: Nueva Funcionalidad
Complejidad: Alta (múltiples componentes, seguridad crítica)
Prioridad: Alta (funcionalidad core)

Flujo determinado:
1. Planificación
2. Validación de Plan
3. Diseño Técnico
4. Validación de Diseño
5. Desarrollo
6. Validación de Código
7. Testing
8. Validación de Tests
9. Documentación
10. Revisión Final

Creando documento de estado: estado-auth-jwt-system.md
Iniciando Fase 1: Planificación...
```

---

## Fase 2: Planificación

### Agente Planificador - Output

```markdown
# Plan de Implementación: Sistema de Autenticación JWT

## 1. Resumen Ejecutivo

### Objetivo
Implementar un sistema de autenticación seguro basado en JWT que permita
a los usuarios autenticarse, mantener sesiones, y renovar tokens, con
protección contra ataques de fuerza bruta.

### Alcance
**Incluye**:
- Login endpoint con email/password
- Generación de access tokens (JWT) y refresh tokens
- Logout endpoint que invalida refresh tokens
- Refresh endpoint para renovar access tokens
- Rate limiting en endpoints de autenticación
- Middleware de autorización para endpoints protegidos
- Hash de passwords con bcrypt
- Storage de refresh tokens en DB

**No incluye**:
- OAuth/Social login
- 2FA/MFA
- Password recovery (para fase posterior)
- Email verification (para fase posterior)

## 2. Análisis de Requerimientos

### Requisitos Funcionales

**RF-001**: Login con credenciales
- Usuario puede hacer POST /auth/login con email y password
- Sistema valida credenciales
- Sistema genera access token (15 min TTL) y refresh token (7 días TTL)
- Sistema retorna ambos tokens

**RF-002**: Refresh de tokens
- Usuario puede hacer POST /auth/refresh con refresh token
- Sistema valida refresh token
- Sistema genera nuevo access token
- Sistema retorna nuevo access token

**RF-003**: Logout
- Usuario puede hacer POST /auth/logout con refresh token
- Sistema invalida el refresh token
- Refresh token no puede usarse más

**RF-004**: Autorización de endpoints
- Endpoints protegidos requieren access token válido
- Token inválido/expirado → 401 Unauthorized
- Token válido → Request procesado

### Requisitos No Funcionales

**RNF-001**: Seguridad
- Passwords hasheados con bcrypt (cost factor: 12)
- JWT firmados con RS256 (asymmetric)
- Refresh tokens almacenados hasheados en DB
- Rate limiting: 5 intentos/minuto por IP en /auth/login

**RNF-002**: Performance
- Login debe responder en < 500ms (p95)
- Refresh debe responder en < 100ms (p95)
- Verificación de token en middleware < 10ms

**RNF-003**: Disponibilidad
- Sistema debe funcionar incluso si cache (Redis) falla
- Degradación graciosa

## 3. Análisis de Dependencias

### Dependencias Internas
- **Módulo User**: Necesario para validar credenciales
- **Módulo Database**: Para almacenar refresh tokens
- **Middleware pipeline**: Para integrar auth middleware

### Dependencias Externas
- **Librería**: jsonwebtoken (^9.0.0)
- **Librería**: bcrypt (^5.1.0)
- **Librería**: express-rate-limit (^6.0.0)
- **Servicio**: Redis (para rate limiting y blacklist de tokens)

## 4. Plan de Implementación Detallado

### Fase 1: Modelos y Entidades

**Tareas**:
1. Crear entidad RefreshToken
   - id, userId, token (hashed), expiresAt, createdAt
2. Crear DTOs
   - LoginRequestDTO, LoginResponseDTO
   - RefreshRequestDTO, RefreshResponseDTO
3. Crear Value Objects
   - AccessToken, RefreshToken (con validación)

### Fase 2: Servicios Core

**Tareas**:
1. TokenService
   - generateAccessToken()
   - generateRefreshToken()
   - verifyAccessToken()
   - verifyRefreshToken()
2. AuthService
   - login(email, password)
   - refresh(refreshToken)
   - logout(refreshToken)

### Fase 3: Repositorios

**Tareas**:
1. RefreshTokenRepository
   - save(token)
   - findByToken(token)
   - delete(token)
   - deleteExpired()

### Fase 4: Controllers y Middleware

**Tareas**:
1. AuthController
   - POST /auth/login
   - POST /auth/refresh
   - POST /auth/logout
2. AuthMiddleware
   - Verificar access token
   - Extraer userId del token
   - Attach a request
3. RateLimitMiddleware
   - Configurar rate limiting

### Fase 5: Testing

**Tareas**:
1. Unit tests para cada servicio
2. Integration tests para flujos completos
3. Security tests
4. Load tests para rate limiting

## 5. Estrategia de Implementación

### Enfoque: Incremental Bottom-Up
Comenzar por las piezas fundamentales (entidades, servicios) y construir
hacia arriba hasta la API.

**Razón**: Permite testear cada capa independientemente y detectar
problemas temprano.

## 6. Análisis de Riesgos

| ID | Riesgo | Probabilidad | Impacto | Mitigación |
|----|--------|--------------|---------|------------|
| R-001 | Vulnerabilidad en implementación JWT | Media | Crítico | Usar librería battle-tested, auditar código |
| R-002 | Performance degradado por bcrypt | Baja | Medio | Usar worker threads para hashing |
| R-003 | Redis caída bloquea autenticación | Media | Alto | Implementar fallback a in-memory |
| R-004 | Rate limiting bypassable | Media | Alto | Implementar a nivel de reverse proxy también |

## 7. Consideraciones Especiales

### Seguridad
- **JWT Secret**: Debe ser generado aleatoriamente y almacenado en variable de entorno
- **Refresh Token Rotation**: Considerar rotar refresh tokens en cada uso
- **Token Blacklist**: Implementar blacklist para access tokens comprometidos
- **HTTPS Only**: Tokens solo deben enviarse sobre HTTPS

### Performance
- **Token Verification**: Cachear public key para verificación de JWT
- **DB Queries**: Indexar campo `token` en RefreshToken table
- **Rate Limiting**: Usar Redis para state compartido entre instancias

## 8. Criterios de Éxito

- [ ] Usuario puede hacer login y recibir tokens
- [ ] Access token expira en 15 minutos
- [ ] Refresh token expira en 7 días
- [ ] Usuario puede renovar access token
- [ ] Usuario puede hacer logout y tokens se invalidan
- [ ] Rate limiting previene más de 5 intentos/min
- [ ] Cobertura de tests >= 90%
- [ ] Todos los tests de seguridad pasan
- [ ] Performance targets cumplidos

## 9. Estimación de Complejidad

**Complejidad Global**: Alta

**Factores**:
- Número de módulos: 5 (Entity, Service, Repository, Controller, Middleware)
- Criticidad: Muy alta (seguridad)
- Conocimiento del equipo: Medio
- Riesgo técnico: Alto
- Necesidad de investigación: Media (best practices de JWT)

---

**Estado**: Pendiente de validación
**Fecha**: 2024-01-15 10:30:00
```

---

## Fase 3: Validación del Plan

### Agente Validador - Evaluación

```markdown
# Validación del Plan: Sistema de Autenticación JWT

## Resultado: ⚠️ APROBADO CON OBSERVACIONES

### Checklist de Validación

✅ Objetivos claros y alcance bien definido
✅ Requisitos funcionales completos
✅ Requisitos no funcionales definidos
✅ Dependencias identificadas
✅ Riesgos documentados con mitigaciones
✅ Plan de implementación detallado
✅ Complejidad estimada correctamente
✅ Criterios de éxito medibles
✅ Sigue arquitectura del proyecto
✅ Considera seguridad apropiadamente

### Observaciones (No bloquean el avance)

**OBS-001**: Considerar implementar token rotation
- **Severidad**: Menor
- **Descripción**: El plan no menciona refresh token rotation, que es una
  best practice de seguridad.
- **Mejora propuesta**: En cada refresh, invalidar el refresh token viejo
  y generar uno nuevo.
- **Impacto**: Mejora seguridad si un refresh token es comprometido.
- **Es opcional**: Sí, pero recomendado implementar en el futuro.

**OBS-002**: Falta mencionar CORS
- **Severidad**: Menor
- **Descripción**: Si la API se consume desde frontend, CORS debe configurarse.
- **Mejora propuesta**: Agregar configuración de CORS al plan.
- **Impacto**: Evita problemas de integración con frontend.

### Puede continuar: ✅ SÍ

El plan es sólido y puede pasar a la fase de diseño técnico.
```

---

## Fase 4: Diseño Técnico

### Agente Diseñador - Output (Resumido)

```markdown
# Diseño Técnico: Sistema de Autenticación JWT

## 1. Diagrama de Arquitectura

```
┌──────────────────┐
│   Auth API       │
│                  │
│  POST /login     │◄──┐
│  POST /refresh   │   │
│  POST /logout    │   │ HTTP Requests
└─────┬────────────┘   │
      │                │
      ▼                │
┌──────────────────┐   │
│ AuthController   │   │
│ - login()        │   │
│ - refresh()      │   │
│ - logout()       │   │
└─────┬────────────┘   │
      │                │
      ▼                │
┌──────────────────┐   │
│  AuthService     │   │
│ - validateCreds  │   │
│ - generateTokens │   │
│ - refreshTokens  │   │
│ - invalidateToken│   │
└─────┬────────────┘   │
      │                │
      ├────────────────┴─────────┐
      ▼                          ▼
┌──────────────┐        ┌────────────────┐
│ TokenService │        │  UserService   │
│ - generate   │        │ - findByEmail  │
│ - verify     │        │ - verifyPass   │
└──────────────┘        └────────────────┘
      │                          │
      ▼                          ▼
┌──────────────┐        ┌────────────────┐
│  Redis       │        │   PostgreSQL   │
│ - Rate limit │        │ - Users table  │
│ - Blacklist  │        │ - Refresh      │
└──────────────┘        │   tokens table │
                        └────────────────┘
```

## 2. Modelos de Datos

### Entity: RefreshToken

```typescript
interface RefreshToken {
  id: string;              // UUID
  userId: string;          // Foreign key a User
  tokenHash: string;       // Hash del refresh token
  expiresAt: Date;         // Fecha de expiración
  createdAt: Date;         // Cuándo se creó
  lastUsedAt?: Date;       // Última vez usado (para rotation)
  deviceInfo?: string;     // Info del dispositivo (opcional)
  ipAddress?: string;      // IP donde se creó (opcional)
}
```

### DTO: LoginRequest

```typescript
interface LoginRequestDTO {
  email: string;    // Email del usuario
  password: string; // Password en texto plano
}
```

### DTO: LoginResponse

```typescript
interface LoginResponseDTO {
  accessToken: string;  // JWT access token
  refreshToken: string; // Refresh token
  expiresIn: number;    // Segundos hasta expiración
  tokenType: 'Bearer';  // Tipo de token
}
```

## 3. Interfaces y Contratos

### Interface: IAuthService

```typescript
interface IAuthService {
  /**
   * Autentica un usuario con email y password
   * @throws UnauthorizedError si credenciales inválidas
   * @throws TooManyRequestsError si excede rate limit
   */
  login(credentials: LoginRequestDTO): Promise<LoginResponseDTO>;

  /**
   * Renueva un access token usando refresh token
   * @throws UnauthorizedError si refresh token inválido/expirado
   */
  refresh(refreshToken: string): Promise<AccessTokenDTO>;

  /**
   * Invalida un refresh token
   * @throws UnauthorizedError si refresh token inválido
   */
  logout(refreshToken: string): Promise<void>;
}
```

## 4. Flujo de Datos: Login

```
Client                Controller        AuthService      UserService      TokenService      DB
  │                       │                 │                │                 │           │
  │──POST /auth/login────>│                 │                │                 │           │
  │  {email, password}    │                 │                │                 │           │
  │                       │                 │                │                 │           │
  │                       │──login()───────>│                │                 │           │
  │                       │                 │                │                 │           │
  │                       │                 │──findByEmail──>│                 │           │
  │                       │                 │                │──query────────>│           │
  │                       │                 │                │<──user─────────│           │
  │                       │                 │<──user─────────│                 │           │
  │                       │                 │                │                 │           │
  │                       │                 │──verifyPassword()                 │           │
  │                       │                 │ (bcrypt.compare)                  │           │
  │                       │                 │                │                 │           │
  │                       │                 │──generateTokens()──────────────>│           │
  │                       │                 │                │                 │           │
  │                       │                 │                │       ┌─────────▼─────────┐
  │                       │                 │                │       │ 1. Generate JWT   │
  │                       │                 │                │       │ 2. Generate RT    │
  │                       │                 │                │       │ 3. Hash RT        │
  │                       │                 │                │       └─────────┬─────────┘
  │                       │                 │                │                 │           │
  │                       │                 │                │     ┌───Save RT hash───────>│
  │                       │                 │<──tokens───────┴─────┘           │           │
  │                       │<──tokens────────│                │                 │           │
  │<─────200 OK───────────│                 │                │                 │           │
  │  {accessToken,        │                 │                │                 │           │
  │   refreshToken}       │                 │                │                 │           │
```

## 5. Patrones de Diseño

### Repository Pattern
```typescript
class RefreshTokenRepository implements IRefreshTokenRepository {
  async save(token: RefreshToken): Promise<void> {
    // Implementación con DB
  }

  async findByToken(tokenHash: string): Promise<RefreshToken | null> {
    // Implementación con DB
  }

  async deleteByToken(tokenHash: string): Promise<void> {
    // Implementación con DB
  }
}
```

### Strategy Pattern (para Token Generation)
```typescript
interface ITokenGenerator {
  generate(payload: TokenPayload): string;
  verify(token: string): TokenPayload;
}

class JWTTokenGenerator implements ITokenGenerator {
  // Implementación con JWT
}
```

## 6. Seguridad

### JWT Structure
```typescript
// Access Token Payload
{
  sub: userId,        // Subject (user ID)
  email: userEmail,   // Email del usuario
  iat: timestamp,     // Issued at
  exp: timestamp,     // Expiration (15 min)
  type: 'access'      // Tipo de token
}

// Firmado con RS256 usando private key
```

### Rate Limiting Strategy
```typescript
// 5 intentos por minuto por IP
const loginLimiter = rateLimit({
  windowMs: 60 * 1000,      // 1 minuto
  max: 5,                    // 5 requests
  keyGenerator: (req) => req.ip,
  handler: (req, res) => {
    throw new TooManyRequestsError('Too many login attempts');
  }
});
```

## 7. Manejo de Errores

```typescript
// Jerarquía de errores específicos
class UnauthorizedError extends AppError {
  constructor(message = 'Invalid credentials') {
    super(message, 401);
  }
}

class TooManyRequestsError extends AppError {
  constructor(message = 'Too many requests') {
    super(message, 429);
  }
}

class TokenExpiredError extends UnauthorizedError {
  constructor() {
    super('Token expired');
  }
}
```

---

**Estado**: Pendiente de validación
```

---

## Fase 5: Validación del Diseño

### Agente Validador - Evaluación

```markdown
# Validación del Diseño: Sistema de Autenticación JWT

## Resultado: ❌ RECHAZADO

### Problemas Críticos

#### PC-001: Falta estrategia de token rotation
**Ubicación**: Sección "Flujos de Datos" - Refresh flow
**Severidad**: CRÍTICO
**Descripción**: El diseño no incluye refresh token rotation, que es una
best practice de seguridad crítica. Si un refresh token es comprometido,
puede ser usado indefinidamente hasta su expiración (7 días).

**Por qué es un problema**:
Viola el principio de seguridad del documento de estándares (Sección 5.1)
que requiere "minimizar ventana de exposición en caso de compromiso".

**Cómo corregirlo**:
1. Modificar el flujo de refresh para:
   - Invalidar el refresh token actual
   - Generar un nuevo refresh token
   - Retornar ambos access token y nuevo refresh token
2. Actualizar RefreshToken entity para marcar tokens como "used"
3. Agregar validación para rechazar tokens ya usados

**Ejemplo correcto**:
```typescript
async refresh(oldRefreshToken: string): Promise<LoginResponseDTO> {
  // Verificar token viejo
  const tokenData = await this.verifyRefreshToken(oldRefreshToken);

  // Invalidar token viejo
  await this.refreshTokenRepo.markAsUsed(oldRefreshToken);

  // Generar NUEVOS tokens (access + refresh)
  const newTokens = await this.generateTokenPair(tokenData.userId);

  return newTokens;
}
```

**Referencia**: Documento de Estándares, Sección 5.1.3 "Token Management"

---

### Checklist de Validación
- ✅ Diagrama de arquitectura claro
- ✅ Sigue patrón arquitectónico del proyecto
- ✅ Interfaces bien definidas
- ✅ Patrones de diseño justificados
- ❌ Estrategia de seguridad completa (falta token rotation)
- ✅ Manejo de errores apropiado
- ✅ Performance considerado
- ✅ Diseño testeable

### Puede continuar: ❌ NO

Por favor, corrige el problema crítico PC-001 y reenvía el diseño.
Iteración: 1/2
```

---

## Fase 6: Diseño Técnico (Iteración 2)

### Agente Diseñador - Output Corregido

```markdown
# Diseño Técnico: Sistema de Autenticación JWT (v2)

## Cambios respecto a v1

✅ **PC-001 RESUELTO**: Agregada estrategia de refresh token rotation

### Cambios en RefreshToken Entity

```typescript
interface RefreshToken {
  id: string;
  userId: string;
  tokenHash: string;
  expiresAt: Date;
  createdAt: Date;
  lastUsedAt?: Date;
  isUsed: boolean;          // ✨ NUEVO: Marca si el token fue usado
  replacedBy?: string;      // ✨ NUEVO: ID del token que lo reemplazó
  deviceInfo?: string;
  ipAddress?: string;
}
```

### Flujo de Refresh Actualizado

```
Client                AuthService         TokenService      RefreshTokenRepo
  │                       │                     │                 │
  │──refresh(RT)─────────>│                     │                 │
  │                       │                     │                 │
  │                       │──verify(RT)────────>│                 │
  │                       │<──valid─────────────│                 │
  │                       │                     │                 │
  │                       │──findByToken(RT)───────────────────>│
  │                       │<──tokenData─────────────────────────│
  │                       │                     │                 │
  │                       │──markAsUsed(RT)────────────────────>│
  │                       │                     │                 │
  │                       │──generateNewPair()─>│                 │
  │                       │<──new tokens────────│                 │
  │                       │                     │                 │
  │                       │──saveNew(RT, replacedBy=old.id)────>│
  │                       │                     │                 │
  │<──200 OK──────────────│                     │                 │
  │  {accessToken,        │                     │                 │
  │   refreshToken}       │                     │                 │
```

### Validación contra reuso de tokens

```typescript
async refresh(refreshToken: string): Promise<LoginResponseDTO> {
  // 1. Verificar firma del token
  const payload = await this.tokenService.verifyRefreshToken(refreshToken);

  // 2. Buscar en DB
  const tokenData = await this.refreshTokenRepo.findByTokenHash(
    hash(refreshToken)
  );

  if (!tokenData) {
    throw new UnauthorizedError('Invalid refresh token');
  }

  // 3. ✨ NUEVO: Verificar que no haya sido usado
  if (tokenData.isUsed) {
    // Token ya fue usado - posible ataque!
    // Invalidar TODA la familia de tokens para este usuario
    await this.refreshTokenRepo.invalidateAllForUser(tokenData.userId);
    await this.logger.securityAlert('Refresh token reuse detected', {
      userId: tokenData.userId,
      tokenId: tokenData.id
    });
    throw new UnauthorizedError('Token reuse detected');
  }

  // 4. Marcar como usado
  await this.refreshTokenRepo.markAsUsed(tokenData.id);

  // 5. Generar NUEVOS tokens
  const newTokens = await this.tokenService.generateTokenPair(
    tokenData.userId
  );

  // 6. Guardar nuevo refresh token con referencia al anterior
  await this.refreshTokenRepo.save({
    ...newTokens.refreshToken,
    replacedBy: tokenData.id
  });

  return newTokens;
}
```

---

**Estado**: Pendiente de validación
**Versión**: 2
**Cambios**: Token rotation implementado
```

---

## Fase 7: Validación del Diseño (Iteración 2)

### Agente Validador - Evaluación

```markdown
# Validación del Diseño: Sistema de Autenticación JWT (v2)

## Resultado: ✅ APROBADO

### Problemas Críticos Resueltos

✅ **PC-001**: Token rotation implementado correctamente
- Flujo actualizado incluye invalidación del token viejo
- Genera nuevos tokens en cada refresh
- Detecta y previene reuso de tokens
- Invalida toda la familia de tokens si detecta ataque

### Checklist de Validación
- ✅ Arquitectura sigue patrones del proyecto
- ✅ Interfaces bien definidas
- ✅ Seguridad completa y robusta
- ✅ Manejo de errores apropiado
- ✅ Performance considerado
- ✅ Diseño testeable
- ✅ Escalabilidad considerada

### Destacados
- Excelente implementación de token rotation
- Detección de ataques bien diseñada
- Security logging apropiado

### Puede continuar: ✅ SÍ

El diseño está aprobado y puede pasar a la fase de desarrollo.
```

---

## Fase 8: Desarrollo

### Agente Desarrollador - Implementación (Resumido)

```typescript
// ===== src/modules/auth/domain/entities/refresh-token.entity.ts =====

export class RefreshToken {
  private constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly tokenHash: string,
    public readonly expiresAt: Date,
    public readonly createdAt: Date,
    public readonly isUsed: boolean = false,
    public readonly replacedBy?: string,
    public readonly lastUsedAt?: Date
  ) {}

  public static create(params: {
    userId: string;
    token: string;
    expiresAt: Date;
  }): RefreshToken {
    return new RefreshToken(
      generateId(),
      params.userId,
      hashToken(params.token),
      params.expiresAt,
      new Date(),
      false
    );
  }

  public markAsUsed(replacedBy: string): RefreshToken {
    return new RefreshToken(
      this.id,
      this.userId,
      this.tokenHash,
      this.expiresAt,
      this.createdAt,
      true,
      replacedBy,
      new Date()
    );
  }

  public isExpired(): boolean {
    return this.expiresAt < new Date();
  }
}

// ===== src/modules/auth/application/services/auth.service.ts =====

export class AuthService implements IAuthService {
  constructor(
    private readonly userService: IUserService,
    private readonly tokenService: ITokenService,
    private readonly refreshTokenRepo: IRefreshTokenRepository,
    private readonly logger: ILogger
  ) {}

  async login(credentials: LoginRequestDTO): Promise<LoginResponseDTO> {
    this.logger.info('Login attempt', { email: credentials.email });

    // Find user
    const user = await this.userService.findByEmail(credentials.email);
    if (!user) {
      throw new UnauthorizedError('Invalid credentials');
    }

    // Verify password
    const isValid = await bcrypt.compare(
      credentials.password,
      user.passwordHash
    );
    if (!isValid) {
      throw new UnauthorizedError('Invalid credentials');
    }

    // Generate tokens
    const tokens = await this.tokenService.generateTokenPair(user.id);

    // Save refresh token
    const refreshToken = RefreshToken.create({
      userId: user.id,
      token: tokens.refreshToken,
      expiresAt: addDays(new Date(), 7)
    });
    await this.refreshTokenRepo.save(refreshToken);

    this.logger.info('Login successful', { userId: user.id });

    return tokens;
  }

  async refresh(refreshToken: string): Promise<AccessTokenDTO> {
    this.logger.info('Token refresh attempt');

    // Verify token signature
    const payload = await this.tokenService.verifyRefreshToken(refreshToken);

    // Find in DB
    const tokenData = await this.refreshTokenRepo.findByTokenHash(
      hashToken(refreshToken)
    );

    if (!tokenData) {
      throw new UnauthorizedError('Invalid refresh token');
    }

    // Check if expired
    if (tokenData.isExpired()) {
      await this.refreshTokenRepo.delete(tokenData.id);
      throw new TokenExpiredError();
    }

    // Check if already used (token rotation)
    if (tokenData.isUsed) {
      // SECURITY: Token reuse detected - invalidate all tokens
      await this.refreshTokenRepo.invalidateAllForUser(tokenData.userId);

      this.logger.securityAlert('Refresh token reuse detected', {
        userId: tokenData.userId,
        tokenId: tokenData.id
      });

      throw new UnauthorizedError('Token reuse detected');
    }

    // Mark as used
    const newTokenId = generateId();
    const updatedToken = tokenData.markAsUsed(newTokenId);
    await this.refreshTokenRepo.update(updatedToken);

    // Generate new tokens
    const newTokens = await this.tokenService.generateTokenPair(
      tokenData.userId
    );

    // Save new refresh token
    const newRefreshToken = RefreshToken.create({
      userId: tokenData.userId,
      token: newTokens.refreshToken,
      expiresAt: addDays(new Date(), 7)
    });
    await this.refreshTokenRepo.save(newRefreshToken);

    this.logger.info('Token refreshed successfully', {
      userId: tokenData.userId
    });

    return newTokens;
  }

  async logout(refreshToken: string): Promise<void> {
    const tokenHash = hashToken(refreshToken);
    const tokenData = await this.refreshTokenRepo.findByTokenHash(tokenHash);

    if (tokenData) {
      await this.refreshTokenRepo.delete(tokenData.id);
      this.logger.info('Logout successful', { userId: tokenData.userId });
    }
  }
}

// ===== Tests incluidos (ver archivo completo) =====
// ✅ 24 unit tests escritos
// ✅ Cobertura: 94%
```

### Auto-Revisión del Desarrollador

```yaml
checklist_cumplimiento:
  nomenclatura: ✅ Cumple (camelCase, PascalCase)
  funciones_pequenas: ✅ Ninguna función > 40 líneas
  parametros: ✅ Máximo 4 parámetros
  manejo_errores: ✅ Errores específicos, bien loggeados
  seguridad: ✅ Sin credenciales, inputs validados
  tests: ✅ 24 tests, cobertura 94%
  documentacion: ✅ Funciones públicas documentadas
  linting: ✅ Pasa sin errores

metricas:
  total_lineas: 850
  total_funciones: 18
  complejidad_promedio: 4.2
  tests_escritos: 24
  cobertura: 94%
```

---

## Fase 9: Validación del Código

### Agente Validador - Evaluación

```markdown
# Validación del Código: Sistema de Autenticación JWT

## Resultado: ✅ APROBADO

### Validaciones Automáticas
```bash
✅ ESLint: 0 errors, 0 warnings
✅ Prettier: All files formatted
✅ TypeScript: No type errors
✅ Tests: 24/24 passing
✅ Coverage: 94% (objetivo: 80%)
✅ Security scan: 0 vulnerabilities
```

### Checklist Manual
- ✅ Nomenclatura correcta
- ✅ Funciones pequeñas (< 50 líneas)
- ✅ Sin código duplicado
- ✅ Manejo de errores robusto
- ✅ Security best practices seguidas
- ✅ Tests comprehensivos
- ✅ Código bien documentado

### Destacados
- Excelente cobertura de tests (94%)
- Manejo de seguridad muy robusto
- Código limpio y mantenible

### Puede continuar: ✅ SÍ
```

---

## Fase 10: Testing

### Agente de Testing - Reporte (Resumido)

```markdown
# Reporte de Testing: Sistema de Autenticación JWT

## Estado: ✅ PASS

### Tests Ejecutados

**Unit Tests**: 24/24 ✅
**Integration Tests**: 8/8 ✅
**E2E Tests**: 5/5 ✅
**Security Tests**: 6/6 ✅
**Performance Tests**: 4/4 ✅

**Total**: 47/47 tests passing

### Cobertura
- Statements: 94%
- Branches: 91%
- Functions: 96%
- Lines: 94%

### Security Tests Highlights

✅ **SQL Injection**: Protegido
✅ **Brute Force**: Rate limiting funciona (bloquea después de 5 intentos)
✅ **Token Reuse**: Detectado y mitigado
✅ **Token Expiration**: Funciona correctamente
✅ **Password Hashing**: Bcrypt con cost factor 12
✅ **JWT Signature**: RS256 validado correctamente

### Performance Tests

| Operación | Target | Actual | Estado |
|-----------|--------|--------|--------|
| Login | < 500ms | 380ms | ✅ |
| Refresh | < 100ms | 65ms | ✅ |
| Logout | < 100ms | 45ms | ✅ |
| Auth verify | < 10ms | 4ms | ✅ |

### Bugs Encontrados: 0

### Recomendaciones
- Considerar agregar monitoring de intentos de login fallidos
- Agregar tests de carga con más usuarios concurrentes

## Veredicto: ✅ LISTO PARA PRODUCCIÓN
```

---

## Fase 11: Documentación

### Agente de Documentación - Output

```markdown
# Documentación Actualizada: Sistema de Autenticación JWT

## API Documentation

### POST /auth/login
Autentica un usuario y retorna tokens de acceso.

**Request**:
```json
{
  "email": "user@example.com",
  "password": "secure_password"
}
```

**Response** (200 OK):
```json
{
  "accessToken": "eyJhbGciOiJSUzI1NiIs...",
  "refreshToken": "8f7d6e5c4b3a2...",
  "expiresIn": 900,
  "tokenType": "Bearer"
}
```

**Errors**:
- 401: Invalid credentials
- 429: Too many requests

[... más endpoints documentados ...]

## Architecture Decision Records

### ADR-003: JWT with Refresh Token Rotation

**Fecha**: 2024-01-15
**Estado**: Aceptado

**Contexto**: Necesitamos un sistema de autenticación seguro que balancee
seguridad y user experience.

**Decisión**: Usar JWT para access tokens (15 min) con refresh tokens (7 días)
y rotation automático.

**Consecuencias**:
- ✅ Mejor seguridad (ventana de exposición reducida)
- ✅ UX mantiene (no require re-login frecuente)
- ⚠️ Complejidad adicional en implementación
- ⚠️ Más espacio en DB para tokens

## Guías de Uso

[Guías completas de cómo usar el sistema...]

## Changelog

### [2.0.0] - 2024-01-15

#### Added
- Sistema de autenticación con JWT
- Refresh token rotation
- Rate limiting en endpoints de auth
- Middleware de autorizacion
```

---

## Fase 12: Revisión Final

### Agente Coordinador - Reporte Final

```markdown
# 🎉 Proyecto Completado: Sistema de Autenticación JWT

## Resumen Ejecutivo

**Estado**: ✅ COMPLETADO
**Fecha inicio**: 2024-01-15 10:30:00
**Fecha fin**: 2024-01-15 18:45:00
**Duración total**: 8 horas 15 minutos

## Métricas del Proyecto

### Fases Completadas
- ✅ Planificación (2 iteraciones)
- ✅ Diseño (2 iteraciones)
- ✅ Desarrollo (1 iteración)
- ✅ Testing (1 iteración)
- ✅ Documentación (1 iteración)

### Validaciones
- Total validaciones: 5
- Aprobadas primera vez: 3
- Requirieron iteración: 2
- Tasa de aprobación final: 100%

### Código Generado
- Archivos creados: 24
- Líneas de código: 850
- Líneas de tests: 620
- Cobertura: 94%

### Tests
- Total tests: 47
- Passing: 47
- Failing: 0

## Entregables

### Código
✅ src/modules/auth/ (completamente implementado)
✅ 24 unit tests
✅ 8 integration tests
✅ 5 E2E tests
✅ 6 security tests

### Documentación
✅ API documentation
✅ ADR-003 creado
✅ Guías de uso
✅ Troubleshooting guide
✅ Changelog actualizado

## Checklist Final

### Técnico
- ✅ Todos los tests pasan
- ✅ Cobertura >= 80% (logrado: 94%)
- ✅ Linter sin errores
- ✅ Sin vulnerabilidades
- ✅ Performance dentro de objetivos
- ✅ Sin warnings importantes

### Documentación
- ✅ README actualizado
- ✅ API documentada
- ✅ ADRs creados
- ✅ Guías escritas
- ✅ Changelog actualizado

### Proceso
- ✅ Todas las validaciones aprobadas
- ✅ Decisiones documentadas
- ✅ Problemas resueltos
- ✅ Lecciones aprendidas registradas

## Lecciones Aprendidas

1. **Token rotation no es obvio**: Vale la pena ser explícito sobre security
   best practices en el documento de estándares.

2. **Las iteraciones son valiosas**: El diseño mejoró significativamente
   después de la primera validación.

3. **Testing automático detecta problemas**: Los security tests validaron
   que la implementación es robusta.

## Recomendaciones Futuras

1. Considerar implementar 2FA en una fase posterior
2. Agregar monitoring de intentos de login sospechosos
3. Implementar alertas automáticas para tokens reusados
4. Considerar agregar biometric authentication para móvil

## 🚀 Ready for Production!

El sistema está completamente implementado, testeado, documentado y listo
para ser deployado a producción.
```

---

## Resumen del Flujo

**Tiempo total**: 8 horas 15 minutos
**Iteraciones necesarias**: 2 (Planificación y Diseño)
**Problemas encontrados**: 1 (falta de token rotation)
**Bugs en desarrollo**: 0
**Tests**: 47/47 passing
**Cobertura**: 94%

**Intervención del usuario**: 0 veces (proceso completamente autónomo)

Este ejemplo demuestra cómo el sistema multiagente puede tomar una solicitud
compleja, iterar para mejorar la calidad, y entregar una implementación
completa, testeada y documentada de forma autónoma.

