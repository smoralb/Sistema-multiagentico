# 🔄 Sincronización Automática con Google Docs

Este sistema sincroniza automáticamente el documento de producto desde Google Drive al inicio de cada sesión.

---

## 🎯 ¿Qué Hace?

**Al inicio de cada sesión de Claude Code:**
1. Script se conecta a Google Docs API
2. Lee el documento de Google Drive (1 petición)
3. Actualiza `core/00-DOCUMENT-PRODUCT.md` (local)

**Durante la sesión:**
- Sistema usa el archivo LOCAL (0 peticiones a API)
- Validaciones de alcance usan el archivo local
- Todo funciona rápido y eficiente

---

## 📋 Configuración Inicial (Una Sola Vez)

### PASO 1: Verificar Credenciales

Asegúrate de tener el archivo `credentials.json` en la raíz del proyecto:

```bash
ls credentials.json
```

Si NO existe, descárgalo de Google Cloud Console:
1. Ve a: https://console.cloud.google.com/apis/credentials
2. Descarga las credenciales OAuth 2.0
3. Guárdalas como: `credentials.json` en la raíz del proyecto

⚠️ **IMPORTANTE**: Este archivo NO debe subirse a GitHub (ya está en `.gitignore`)

---

### PASO 2: Instalar Dependencias de Python

Instala las librerías necesarias de Google API:

```bash
pip install --upgrade google-api-python-client google-auth-httplib2 google-auth-oauthlib
```

O si usas Python 3:

```bash
pip3 install --upgrade google-api-python-client google-auth-httplib2 google-auth-oauthlib
```

---

### PASO 3: Primera Ejecución (Autorización)

Ejecuta el script manualmente por primera vez:

```bash
python scripts/sync-google-doc.py
```

O con Python 3:

```bash
python3 scripts/sync-google-doc.py
```

**Lo que pasará:**
1. Se abrirá tu navegador automáticamente
2. Google te pedirá autorizar el acceso
3. Selecciona tu cuenta de Google
4. Click en "Permitir"
5. El navegador mostrará "La autenticación se completó"
6. El script guardará un `token.json` para futuras ejecuciones
7. Sincronizará el documento

✅ **Después de esto, la sincronización será automática** (no necesitarás volver a autorizar)

---

## 🚀 Uso Automático

### Configurar Hook de Startup (Recomendado)

Para que el script se ejecute automáticamente al inicio de cada sesión:

**Opción A: Configuración Manual**

Edita `.claude/settings.local.json`:

```json
{
  "permissions": {
    "allow": [
      "Bash(python:*)",
      "Bash(python3:*)"
    ]
  },
  "hooks": {
    "startup": "python3 scripts/sync-google-doc.py"
  }
}
```

**Opción B: Ejecución Manual**

Si prefieres ejecutarlo manualmente cuando sepas que hay cambios:

```bash
python3 scripts/sync-google-doc.py
```

---

## 📂 Archivos Importantes

```
sistema-multiagentico/
├── credentials.json          # ⚠️ NO subir a GitHub (en .gitignore)
├── token.json               # ⚠️ NO subir a GitHub (en .gitignore)
├── scripts/
│   ├── sync-google-doc.py   # Script de sincronización
│   └── README-SYNC.md       # Esta documentación
├── core/
│   └── 00-DOCUMENT-PRODUCT.md  # ✅ Este archivo se actualiza automáticamente
└── .gitignore               # Excluye credentials.json y token.json
```

---

## 🔒 Seguridad

### Archivos que NUNCA deben subirse a GitHub:

- ❌ `credentials.json` - Credenciales OAuth de Google Cloud
- ❌ `token.json` - Token de autenticación generado
- ❌ `client_secret*.json` - Cualquier archivo de secretos

Estos archivos ya están excluidos en `.gitignore`.

### ¿Qué pasa si alguien más clona el repo?

Cada desarrollador debe:
1. Obtener sus propias credenciales de Google Cloud
2. Ejecutar el script por primera vez para autorizar
3. El sistema funcionará para ellos también

---

## 🧪 Pruebas

### Verificar que Funciona

```bash
# Ejecutar script manualmente
python3 scripts/sync-google-doc.py

# Deberías ver:
# ✅ SINCRONIZACIÓN COMPLETADA EXITOSAMENTE
# 📄 Documento: FESTIVO - World Festivals & Events Explorer
# 📁 Archivo local: core/00-DOCUMENT-PRODUCT.md
```

### Verificar Archivo Actualizado

```bash
# Ver fecha de última sincronización
head -20 core/00-DOCUMENT-PRODUCT.md

# Debería mostrar:
# **Last sync date**: 2026-03-12
```

---

## 🔧 Troubleshooting

### Error: "No se encontró credentials.json"

**Solución**: Descarga las credenciales de Google Cloud Console y guárdalas en la raíz del proyecto.

### Error: "ModuleNotFoundError: No module named 'google'"

**Solución**: Instala las dependencias:
```bash
pip3 install --upgrade google-api-python-client google-auth-httplib2 google-auth-oauthlib
```

### Error: "The file has been quarantined"

**Solución**: Necesitas autorizar el acceso. Ejecuta el script y sigue el flujo de autorización en el navegador.

### El script tarda mucho

**Normal**: La primera vez puede tardar 10-15 segundos. Ejecuciones posteriores son más rápidas (3-5 segundos).

---

## 📊 Métricas de Uso de API

**Cuota gratuita de Google Docs API:**
- 20,000 lecturas/día (gratis)

**Uso de este script:**
- 1 lectura por sesión
- ~5-10 sesiones/día = 10 lecturas/día
- **0.05% del límite** → Totalmente dentro del tier gratuito

---

## 🎉 Ventajas de Este Sistema

✅ **Documento siempre actualizado** al inicio de sesión
✅ **Solo 1 petición de API** por sesión (eficiente)
✅ **Durante sesión usa local** (rápido, 0 peticiones)
✅ **Totalmente gratuito** (dentro de cuota de Google)
✅ **Sincronización automática** (sin intervención manual)
✅ **Backup automático** antes de actualizar

---

## 📝 Configuración del Documento

**ID del documento actual:**
```
1X57TS9iOUFsGhmGCSANjxeCoDKpdsLC-
```

**Para cambiar el documento:**

Edita `scripts/sync-google-doc.py`:

```python
DOCUMENT_ID = "TU_NUEVO_DOCUMENT_ID"
DOCUMENT_NAME = "Nombre del Documento"
```

---

**Última actualización**: 2026-03-12
**Versión**: 1.0
**Estado**: ✅ Funcionando
