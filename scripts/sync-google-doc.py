#!/usr/bin/env python3
"""
Script de Sincronización de Google Docs
=========================================

Lee el documento de producto desde Google Drive y actualiza el archivo local.
Se ejecuta automáticamente al inicio de cada sesión de Claude Code.

Configuración:
- credentials.json: Credenciales OAuth 2.0 de Google Cloud
- DOCUMENT_ID: ID del documento de Google Drive
- OUTPUT_FILE: Ruta del archivo local a actualizar

Uso:
    python scripts/sync-google-doc.py
"""

import os
import sys
from datetime import datetime
from pathlib import Path

# Agregar el directorio raíz al path
ROOT_DIR = Path(__file__).parent.parent
sys.path.insert(0, str(ROOT_DIR))

# Configuración
DOCUMENT_ID = "1X57TS9iOUFsGhmGCSANjxeCoDKpdsLC-"
OUTPUT_FILE = ROOT_DIR / "core" / "00-DOCUMENT-PRODUCT.md"
CREDENTIALS_FILE = ROOT_DIR / "credentials.json"
TOKEN_FILE = ROOT_DIR / "token.json"

# Información del documento
DOCUMENT_NAME = "FESTIVO - World Festivals & Events Explorer"
GOOGLE_DOC_URL = f"https://docs.google.com/document/d/{DOCUMENT_ID}/edit?usp=sharing"


def check_dependencies():
    """Verifica que las dependencias necesarias estén instaladas."""
    try:
        from google.auth.transport.requests import Request
        from google.oauth2.credentials import Credentials
        from google_auth_oauthlib.flow import InstalledAppFlow
        from googleapiclient.discovery import build
        return True
    except ImportError:
        print("❌ Error: Dependencias de Google API no instaladas")
        print("\n📦 Instalando dependencias necesarias...")
        os.system("pip install --upgrade google-api-python-client google-auth-httplib2 google-auth-oauthlib")
        print("\n✅ Dependencias instaladas. Por favor ejecuta el script de nuevo.")
        return False


def authenticate():
    """
    Autentica con Google usando OAuth 2.0.
    Usa token guardado si existe, sino inicia flujo de autorización.
    """
    from google.auth.transport.requests import Request
    from google.oauth2.credentials import Credentials
    from google_auth_oauthlib.flow import InstalledAppFlow

    SCOPES = ['https://www.googleapis.com/auth/documents.readonly']

    creds = None

    # Verificar si existe token guardado
    if TOKEN_FILE.exists():
        creds = Credentials.from_authorized_user_file(str(TOKEN_FILE), SCOPES)

    # Si no hay credenciales válidas, iniciar flujo de autorización
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            print("🔄 Refrescando token de autenticación...")
            creds.refresh(Request())
        else:
            if not CREDENTIALS_FILE.exists():
                print(f"❌ Error: No se encontró {CREDENTIALS_FILE}")
                print("\n📝 Necesitas descargar credentials.json desde Google Cloud Console:")
                print("   1. Ve a: https://console.cloud.google.com/apis/credentials")
                print("   2. Descarga las credenciales OAuth 2.0")
                print(f"   3. Guárdalas como: {CREDENTIALS_FILE}")
                sys.exit(1)

            print("🔐 Iniciando flujo de autenticación OAuth 2.0...")
            print("   Se abrirá tu navegador para autorizar el acceso.")

            flow = InstalledAppFlow.from_client_secrets_file(
                str(CREDENTIALS_FILE), SCOPES
            )
            creds = flow.run_local_server(port=0)

        # Guardar token para próximas ejecuciones
        with open(TOKEN_FILE, 'w') as token:
            token.write(creds.to_json())
        print("✅ Token guardado para futuras sesiones")

    return creds


def fetch_document_content(creds, document_id):
    """
    Obtiene el contenido del documento de Google Drive.
    """
    from googleapiclient.discovery import build

    try:
        print(f"📄 Leyendo documento: {DOCUMENT_NAME}")
        print(f"   ID: {document_id}")

        service = build('docs', 'v1', credentials=creds)
        document = service.documents().get(documentId=document_id).execute()

        # Extraer el contenido de texto
        content = []
        doc_content = document.get('body', {}).get('content', [])

        for element in doc_content:
            if 'paragraph' in element:
                paragraph = element['paragraph']
                for text_run in paragraph.get('elements', []):
                    if 'textRun' in text_run:
                        content.append(text_run['textRun']['content'])

        full_text = ''.join(content)

        print(f"✅ Documento leído exitosamente ({len(full_text)} caracteres)")
        return full_text

    except Exception as e:
        print(f"❌ Error al leer el documento: {e}")
        sys.exit(1)


def format_as_markdown(raw_content):
    """
    Formatea el contenido del Google Doc como Markdown.
    Agrega metadata y estructura.
    """
    timestamp = datetime.now().strftime("%Y-%m-%d")

    header = f"""# {DOCUMENT_NAME}

**Product Requirements Document | v1.0**
**Last Updated**: June 2025
**Source**: Google Drive Document (synchronized)
**Link**: {GOOGLE_DOC_URL}

---

## 📋 Document Sync Info

This document is synchronized from Google Drive. When the source document is updated, this file should be refreshed to maintain alignment between documentation and implementation.

**Last sync date**: {timestamp}

---

"""

    footer = f"""

---

## 📌 Implementation Notes

This is a living document that defines the product vision and requirements for Festivo. All development work should align with the features and phases defined here.

**For any new feature request:**
1. Verify if it's contemplated in the current phase.
2. If not, determine if it should be added to the roadmap.
3. Update this document accordingly before implementation.

---

**Document Version**: 1.0
**Last Synchronized**: {timestamp}
**Source**: Google Drive
**Product**: {DOCUMENT_NAME}
"""

    # Combinar header + contenido + footer
    formatted_content = header + raw_content.strip() + footer

    return formatted_content


def update_local_file(content):
    """
    Actualiza el archivo local con el contenido del Google Doc.
    """
    try:
        # Crear backup del archivo actual
        if OUTPUT_FILE.exists():
            backup_file = OUTPUT_FILE.with_suffix('.md.backup')
            OUTPUT_FILE.rename(backup_file)
            print(f"📦 Backup creado: {backup_file.name}")

        # Escribir nuevo contenido
        OUTPUT_FILE.write_text(content, encoding='utf-8')
        print(f"✅ Archivo local actualizado: {OUTPUT_FILE}")

        # Eliminar backup si todo salió bien
        if backup_file.exists():
            backup_file.unlink()

        return True

    except Exception as e:
        print(f"❌ Error al actualizar archivo local: {e}")
        # Restaurar backup si existe
        if backup_file.exists():
            backup_file.rename(OUTPUT_FILE)
            print("↩️  Backup restaurado")
        return False


def main():
    """Función principal del script."""
    print("\n" + "="*60)
    print("🔄 SINCRONIZACIÓN DE DOCUMENTO DE PRODUCTO")
    print("="*60 + "\n")

    # Verificar dependencias
    if not check_dependencies():
        sys.exit(1)

    # Autenticar con Google
    print("🔐 Autenticando con Google Cloud...\n")
    creds = authenticate()

    # Leer documento de Google Drive
    print("\n📥 Obteniendo contenido del documento...\n")
    raw_content = fetch_document_content(creds, DOCUMENT_ID)

    # Formatear como Markdown
    print("\n📝 Formateando contenido...\n")
    formatted_content = format_as_markdown(raw_content)

    # Actualizar archivo local
    print("\n💾 Actualizando archivo local...\n")
    if update_local_file(formatted_content):
        print("\n" + "="*60)
        print("✅ SINCRONIZACIÓN COMPLETADA EXITOSAMENTE")
        print("="*60)
        print(f"\n📄 Documento: {DOCUMENT_NAME}")
        print(f"📁 Archivo local: {OUTPUT_FILE}")
        print(f"🔗 Google Doc: {GOOGLE_DOC_URL}")
        print(f"📅 Sincronizado: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print("\n💡 El sistema ahora usará la versión local durante esta sesión.")
        print("\n")
        return 0
    else:
        print("\n❌ SINCRONIZACIÓN FALLIDA")
        return 1


if __name__ == "__main__":
    sys.exit(main())
