# LienMaster Email Builder

Fork personalizado de [monto-email-builder](https://github.com/heiheihoho1213/monto-email-builder) para el proyecto LienMaster Clinic.

## Personalizaciones realizadas

- **Idioma:** Cambiado de zh/en a en/es
- **Branding:** Removido branding uSpeedo
- **Templates:** Agregados templates personalizados (newsletter-with-unsubscribe, unsubscribed-resubscribe, etc.)
- **HTML Editor:** Integrado editor HTML editable en el tab "HTML" del editor visual

## Workflow para desarrolladores

### Setup inicial

1. Clonar el repositorio
2. Ejecutar `pnpm install` en el frontend (esto instala el fork desde `file:../monto-email-builder-source`)

### Flujo de trabajo

**Si SOLO necesitás usar el editor (no modificar el fork):**
```bash
# Solo hacé pull y install normalmente
git pull
cd lienmaster-frontend && pnpm install
# Ya tenés todo listo - los archivos pre-compilados están en:
# src/features/clinic/marketing/components/lienmaster_email_builder/
```

**Si vas a MODIFICAR el fork:**
```bash
# 1. Hacé tus cambios en monto-email-builder-source/

# 2. Generá los archivos compilados y copiarlos al frontend:
cd monto-email-builder-source
pnpm run build:all

# 3. Verificá que el frontend funcione:
cd lienmaster-frontend
pnpm run build

# 4. Commit y push de AMBOS:
# - monto-email-builder-source/ (código fuente)
# - lienmaster-frontend/src/features/clinic/marketing/components/lienmaster_email_builder/ (archivos compilados)
```

### ¿Por qué se suben los archivos compilados?

Para que los compañeros NO necesiten instalar dependencias del fork ni hacer build. Simplemente hacen `pnpm install` y tienen todo listo.

## Estructura de archivos

```
monto-email-builder-source/
├── src/
│   ├── HtmlEditor/          # Editor HTML (CodeMirror)
│   ├── App/
│   │   └── TemplatePanel/
│   │       ├── HtmlPanel.tsx  # Panel HTML (usa HtmlEditor)
│   │       └── ...
│   └── ...
├── dist/                    # Archivos generados (NO editar a mano)
├── scripts/
│   └── copy-to-frontend.js  # Script para copiar a frontend
└── package.json
```

## Arquitectura

### Editor de templates

El editor tiene 4 tabs:
1. **Edit** - Editor visual drag-and-drop
2. **Preview** - Vista previa del email
3. **HTML** - Editor HTML con CodeMirror (editable)
4. **JSON** - Ver estructura JSON del documento

### Nota sobre el tab HTML

⚠️ **Importante:** Cuando editas HTML y cambias a otro tab, los cambios se pierden porque no hay forma de convertir HTML de vuelta a la estructura JSON del editor visual.

Se muestra un warning cuando intentas salir del tab HTML con cambios sin guardar.

## Scripts disponibles

| Script | Descripción |
|--------|-------------|
| `pnpm run dev` | Inicia el servidor de desarrollo del fork |
| `pnpm run build:lib` | Genera archivos para librería |
| `pnpm run copy:frontend` | Copia dist a la carpeta del frontend |
| `pnpm run build:all` | Build + copy (combo) |
| `pnpm run preview` | Preview del build |

## Integración con el frontend

El frontend importa el fork desde:

```json
// lienmaster-frontend/package.json
"dependencies": {
  "monto-email-builder": "file:../monto-email-builder-source"
}
```

Los archivos compilados se copian a:

```
lienmaster-frontend/src/features/clinic/marketing/components/lienmaster_email_builder/
```

Esta carpeta está en `.gitignore` y se regenera con `pnpm run build:all` del fork.

## Troubleshooting

### Build falla con "Entry module cannot be external"

Verificar que `vite.config.ts` tenga:
```ts
formats: ['es']  // NO 'en', 'en' es para lenguaje, 'es' es para ES modules
```

###Frontend no reconoce los cambios

1. Ejecutar `pnpm run build:all` en el fork
2. Ejecutar `pnpm install` en el frontend para limpiar cache
3. Ejecutar `pnpm run build` en el frontend para verificar

## Créditos

- [monto-email-builder](https://github.com/heiheihoho1213/monto-email-builder) - Editor original
- [monto-email-block-*](https://github.com/heiheihoho1213) - Bloques para email
- [monto-email-core](https://github.com/heiheihoho1213) - Core para rendering
