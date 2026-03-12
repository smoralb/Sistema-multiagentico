# 📦 Cómo Subir FESTIVO a GitHub

El repositorio local ya está listo con todos los archivos commiteados. Ahora necesitas crear el repositorio en GitHub y hacer push.

## Opción 1: Usando GitHub CLI (Recomendado)

### Instalar GitHub CLI

```bash
# macOS (usando Homebrew)
brew install gh

# Autenticar con GitHub
gh auth login
```

### Crear el repositorio y hacer push

```bash
cd /Users/smoralber/Desktop/sistema-multiagentico/web/festivo

gh repo create festivo --public --source=. --description="🎉 FESTIVO - Discover the world's most vibrant festivals and cultural celebrations" --push
```

---

## Opción 2: Manualmente desde GitHub.com

### Paso 1: Crear el repositorio en GitHub.com

1. Ve a https://github.com/new
2. **Repository name**: `festivo`
3. **Description**: `🎉 FESTIVO - Discover the world's most vibrant festivals and cultural celebrations`
4. **Public** (seleccionado)
5. **NO marques** "Initialize this repository with a README" (ya tienes uno)
6. Click en **"Create repository"**

### Paso 2: Conectar y hacer push desde terminal

GitHub te mostrará instrucciones. Usa estas:

```bash
cd /Users/smoralber/Desktop/sistema-multiagentico/web/festivo

# Reemplaza TU_USUARIO con tu username de GitHub
git remote add origin https://github.com/TU_USUARIO/festivo.git

# Hacer push de todos los archivos
git branch -M main
git push -u origin main
```

---

## 📁 Archivos que se Subirán

✅ Ya commiteados y listos:
- `index.html` - Homepage
- `event-detail.html` - Event detail page
- `styles.css` - Estilos globales
- `event-detail.css` - Estilos event detail
- `script.js` - JavaScript homepage
- `event-detail.js` - JavaScript event detail
- `README.md` - Documentación completa
- `.gitignore` - Archivos ignorados

Total: **2,492 líneas de código**

---

## 🎨 Sobre los Diseños en Pencil

Los archivos `.pen` (diseños de Pencil) no están en el sistema de archivos porque Pencil MCP trabaja con archivos virtuales.

### Opciones para incluir los diseños:

**Opción A: Exportar desde Pencil (si tienes Pencil instalado)**
1. Abre Pencil
2. Abre los diseños creados durante el desarrollo
3. Exporta como `.pen` o como imágenes PNG
4. Agrégalos al repositorio en una carpeta `designs/`

**Opción B: Screenshots de las páginas implementadas**
1. Toma screenshots de `index.html` y `event-detail.html`
2. Guárdalos en `designs/screenshots/`
3. Estos sirven como documentación visual del diseño

**Opción C: Crear carpeta de diseño con README**
```bash
mkdir designs
```

Luego crear `designs/README.md` explicando el proceso de diseño.

---

## ✅ Verificación Post-Push

Después de hacer push, verifica en GitHub:

1. **Código fuente** - Todos los archivos HTML, CSS, JS
2. **README.md** - Se ve correctamente con formato
3. **GitHub Pages (Opcional)** - Habilita en Settings > Pages para ver la web en vivo

### Habilitar GitHub Pages (Opcional)

Para ver la web en vivo en `https://TU_USUARIO.github.io/festivo`:

1. Ve a Settings > Pages
2. Source: Deploy from a branch
3. Branch: `main` / `(root)`
4. Click "Save"
5. Espera 1-2 minutos
6. Visita `https://TU_USUARIO.github.io/festivo`

---

## 🚀 Estado Actual

✅ Repositorio Git inicializado
✅ Todos los archivos agregados y commiteados
✅ README.md completo y actualizado
✅ .gitignore configurado
✅ Commit message descriptivo

⏳ **Pendiente**: Crear repositorio en GitHub y hacer push

---

**¡Tu código está listo para ser compartido con el mundo! 🎉**
