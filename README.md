# md2pdf-cli

Convierte archivos Markdown (`.md`) en documentos PDF de forma sencilla desde la línea de comandos.

## Características
- Conversión rápida de Markdown a PDF.
- Soporte para múltiples archivos.
- Ideal para informes técnicos, ADRs, documentación interna, etc.
- Sin dependencias complejas.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/md2pdf-cli.git
   cd md2pdf-cli
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

Convierte un archivo Markdown a PDF:
```bash
node cli.js archivo.md
```

Convierte varios archivos:
```bash
node cli.js archivo1.md archivo2.md
```

El PDF se genera en el mismo directorio con el mismo nombre base.

## Ejemplo

```bash
node cli.js informe-integracion-pago.md
```
Genera `informe-integracion-pago.pdf`.

## Requisitos
- Node.js >= 14
- npm

## Contribuir
¡Se aceptan PRs y sugerencias! Abre un issue para reportar problemas o proponer mejoras.

## Licencia
MIT
