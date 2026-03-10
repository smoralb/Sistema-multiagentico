# Documento de Restricciones Técnicas (Opcional)

## 📋 Propósito
Este documento define **restricciones, preferencias o limitaciones técnicas** que deben ser consideradas por el Agente Arquitecto al tomar decisiones. Si no hay restricciones específicas, este archivo puede dejarse con los valores por defecto o eliminarse.

---

## ⚠️ Restricciones Obligatorias

### Tecnologías Prohibidas
<!-- Lista de tecnologías que NO deben usarse (por políticas, licencias, etc.) -->

**Ejemplo:**
```
❌ NO usar:
- Vue.js (equipo no tiene experiencia)
- MongoDB (migración compleja de bases de datos existentes)
- jQuery (legacy, queremos stack moderno)
- PHP (política de empresa)
```

**Por defecto**: Ninguna restricción

---

### Tecnologías Requeridas
<!-- Tecnologías que DEBEN usarse obligatoriamente -->

**Ejemplo:**
```
✅ DEBE usar:
- TypeScript (política de empresa)
- AWS (infraestructura ya existente)
- PostgreSQL (base de datos estandarizada)
```

**Por defecto**: Ninguna tecnología obligatoria (el Arquitecto decide)

---

### Compatibilidad Requerida
<!-- Versiones específicas o compatibilidades necesarias -->

**Ejemplo:**
```
- Node.js: Versión 18+ (LTS)
- Python: Versión 3.11+ solamente
- Navegadores: Últimas 2 versiones de Chrome, Firefox, Safari
- No soportar Internet Explorer
```

**Por defecto**:
- Últimas 2 versiones de navegadores modernos
- Versiones LTS de lenguajes/frameworks

---

## 🎯 Preferencias (No Obligatorias)

### Stack Preferido
<!-- Si hay preferencia por cierto stack, pero no es obligatorio -->

**Ejemplo:**
```
✨ Preferencia (puede cambiar si el Arquitecto lo justifica):
- Frontend: React o Next.js
- Backend: Node.js con Express o Fastify
- Base de datos: PostgreSQL
- Estilos: Tailwind CSS
```

**Por defecto**: Arquitecto decide basándose en complejidad del proyecto

---

### Hosting y Deployment
<!-- Preferencias o restricciones de hosting -->

**Ejemplo:**
```
- Hosting: Vercel (frontend), AWS (backend)
- CI/CD: GitHub Actions
- Monitoreo: Datadog
```

**Por defecto**: Sin restricciones (Arquitecto sugiere opciones)

---

## 💰 Restricciones de Presupuesto

### Servicios Pagos
<!-- Límites en servicios de terceros pagos -->

**Ejemplo:**
```
- Presupuesto mensual para servicios: $50/mes
- Evitar servicios con costos variables impredecibles
- Preferir tier gratuito cuando sea posible
```

**Por defecto**: Minimizar costos, preferir open-source

---

## 👥 Restricciones de Equipo

### Experiencia del Equipo
<!-- Tecnologías con las que el equipo tiene experiencia -->

**Ejemplo:**
```
Equipo tiene experiencia en:
✅ React, TypeScript, Node.js, PostgreSQL
❌ NO tiene experiencia en: Vue, Angular, Python, Go

Por favor considerar la curva de aprendizaje al elegir tecnologías.
```

**Por defecto**: Asumir equipo con experiencia general web moderna

---

### Tamaño del Equipo
**Ejemplo:**
```
- 2 desarrolladores frontend
- 1 desarrollador backend
- Sin DevOps dedicado (automatizar lo más posible)
```

**Por defecto**: Sin restricciones específicas

---

## 🔒 Restricciones de Seguridad

### Compliance y Regulaciones
<!-- Regulaciones específicas a cumplir -->

**Ejemplo:**
```
✅ DEBE cumplir:
- GDPR (datos de usuarios europeos)
- WCAG 2.1 AA (accesibilidad)
- SOC 2 (si maneja datos sensibles)

❌ NO almacenar:
- Información de tarjetas de crédito (usar Stripe)
- Datos sensibles sin encriptar
```

**Por defecto**: Buenas prácticas generales de seguridad web

---

### Autenticación y Autorización
**Ejemplo:**
```
- DEBE usar OAuth 2.0 con Google/Microsoft
- NO implementar autenticación custom (usar Auth0, Supabase, etc.)
```

**Por defecto**: Arquitecto decide según complejidad

---

## 📊 Restricciones de Performance

### Métricas Obligatorias
<!-- Métricas de performance que son críticas -->

**Ejemplo:**
```
DEBE cumplir:
- Lighthouse Performance: >90
- First Contentful Paint: <1.5s
- Time to Interactive: <3s
- Tamaño bundle JavaScript: <200KB (inicial)
```

**Por defecto**: Estándares de performance modernos (Lighthouse >85)

---

### Límites de Uso
**Ejemplo:**
```
- Máximo 1000 usuarios concurrentes (diseñar escalabilidad)
- Soportar 10,000 requests/día
```

**Por defecto**: Diseño escalable sin límites específicos

---

## 🌐 Restricciones de Internacionalización

### Idiomas Requeridos
**Ejemplo:**
```
DEBE soportar:
- Español (primario)
- Inglés (secundario)
- Catalán (futuro)

Sistema de i18n requerido desde MVP.
```

**Por defecto**: Single idioma (español), i18n opcional

---

### Localización
**Ejemplo:**
```
- Formato de fechas: DD/MM/YYYY (España)
- Moneda: EUR (€)
- Zona horaria: CET (Central European Time)
```

**Por defecto**: Según región del proyecto

---

## 🔧 Restricciones de Desarrollo

### Herramientas Obligatorias
**Ejemplo:**
```
DEBE usar:
- Git para control de versiones
- ESLint + Prettier para code quality
- Jest para testing
- Conventional Commits para mensajes
```

**Por defecto**: Herramientas estándar de la industria

---

### Proceso de CI/CD
**Ejemplo:**
```
- Pipeline automático en cada PR
- Deploy automático a staging al mergear a develop
- Deploy manual a producción (aprobación requerida)
```

**Por defecto**: CI/CD básico recomendado

---

## 📱 Restricciones de Dispositivos

### Dispositivos Prioritarios
**Ejemplo:**
```
Prioridad ALTA:
- iPhone (Safari iOS)
- Android Chrome
- Desktop Chrome

Prioridad BAJA:
- Tablets
- Smart TVs
```

**Por defecto**: Mobile-first, soporte completo mobile y desktop

---

## 🔌 Restricciones de Integraciones

### APIs y Servicios Externos
**Ejemplo:**
```
DEBE integrarse con:
- Google Analytics
- Mailchimp para newsletter
- Stripe para pagos (futuro)

NO PUEDE usar:
- Facebook Pixel (política de privacidad)
```

**Por defecto**: Sin integraciones obligatorias

---

## ⏱️ Restricciones de Tiempo

### Deadlines Críticos
**Ejemplo:**
```
- MVP: 4 semanas (fecha límite: 15 de Abril)
- Lanzamiento público: 8 semanas (fecha límite: 15 de Mayo)

Priorizar velocidad sobre perfección en MVP.
```

**Por defecto**: Sin deadlines específicos

---

### Fases de Entrega
**Ejemplo:**
```
Semana 1-2: Arquitectura + Setup
Semana 3-4: MVP funcional
Semana 5-6: Features adicionales
Semana 7-8: Testing + Optimización
```

**Por defecto**: Según complejidad definida por Arquitecto

---

## 📝 Notas Adicionales

### Documentación Requerida
**Ejemplo:**
```
DEBE incluir:
- README con setup instructions
- Architecture Decision Records (ADRs)
- API documentation (si aplica)
- Deployment guide
```

**Por defecto**: Documentación estándar del proyecto

---

### Testing Obligatorio
**Ejemplo:**
```
DEBE tener:
- Unit tests: >85% coverage en lógica de negocio
- E2E tests: Flujos críticos (checkout, signup, etc.)
- Accessibility tests: Automatizados con axe-core
```

**Por defecto**: Testing según criticidad definida por Arquitecto

---

## ✅ Checklist de Cumplimiento

Antes de aprobar la arquitectura, verificar:

- [ ] No se usan tecnologías prohibidas
- [ ] Se usan todas las tecnologías requeridas (si las hay)
- [ ] Cumple restricciones de seguridad y compliance
- [ ] Performance targets son alcanzables
- [ ] El equipo puede implementar la solución propuesta
- [ ] Se mantiene dentro del presupuesto
- [ ] Cumple deadlines establecidos (si los hay)

---

## 🚨 Cómo Usar Este Documento

### Para el Agente Arquitecto:
1. **Leer primero** `00-DOCUMENT-PRODUCT.md` (entender QUÉ)
2. **Leer después** este documento (conocer restricciones)
3. **Analizar complejidad** del proyecto
4. **Decidir arquitectura** que cumple producto + restricciones + complejidad
5. **Justificar decisiones** en el output (especialmente si difiere de preferencias)

### Si No Hay Restricciones:
```
Si este archivo está vacío o con valores por defecto,
el Arquitecto tiene LIBERTAD TOTAL para decidir tecnologías
basándose únicamente en:
- Requisitos del producto
- Complejidad del proyecto
- Mejores prácticas de la industria
```

---

## 🔄 Mantenimiento de Este Documento

**Cuándo actualizar:**
- Cuando hay nueva política técnica de empresa
- Cuando cambian preferencias del equipo
- Cuando se agregan nuevas integraciones obligatorias
- Cuando hay nuevos requisitos de compliance

**Versionado:**
- Incluir fecha de última actualización
- Mantener historial en Git
- Comunicar cambios al equipo de desarrollo

---

**Versión**: 1.0
**Última actualización**: 2026-03-10
**Tipo de documento**: Restricciones Técnicas (opcional)
**Consultar**: El Agente Arquitecto al tomar decisiones técnicas
