# CarpoolWeb

Landing page y documentos legales de Carpool.

## Stack
- Next.js 16+ (App Router)
- TypeScript
- Tailwind CSS
- Supabase (lectura de documentos legales y enlaces de descarga)
- Lottie React (animaciones)
- Deploy: GitHub Pages (static export)

## Estructura
```
app/
├── page.tsx                     # Landing page
├── layout.tsx                   # Navbar + Footer
├── privacidad/page.tsx          # Política de privacidad (lee de Supabase)
├── terminos/page.tsx            # Términos y condiciones (lee de Supabase)
├── components/
│   ├── BotonesDescarga.tsx      # Botones Play Store / App Store
│   └── DocumentoLegal.tsx       # Componente reutilizable para T&C y privacidad
lib/
├── supabase.ts                  # Cliente Supabase
public/
├── assets/                      # SVGs, Lottie JSONs, imágenes
```

## Conexión con Supabase

La web lee datos de Supabase usando la anon key (acceso público).

### Tablas que usa

**documentos_legales** — Términos y condiciones + Política de privacidad
- La web busca el documento más reciente por `tipo` ('terminos' o 'privacidad')
- Requiere política RLS para `anon` (migración `20260421100000` en CarpoolMobile)

**enlaces_descarga** — URLs de Play Store y App Store
- Plataformas: 'android', 'ios'
- Solo muestra los que tienen `activo = true`
- Si ninguno está activo, muestra "Próximamente disponible para descargar"

### Actualizar enlaces de descarga

Cuando la app esté publicada en Play Store:
```sql
UPDATE enlaces_descarga
SET url = 'https://play.google.com/store/apps/details?id=com.carpoolmobile', activo = true
WHERE plataforma = 'android';
```

Para App Store (cuando esté disponible):
```sql
UPDATE enlaces_descarga
SET url = 'https://apps.apple.com/ar/app/carpool/id123456789', activo = true
WHERE plataforma = 'ios';
```

### Actualizar documentos legales

Los T&C y la política de privacidad se leen de la tabla `documentos_legales`.
Para actualizar, insertar una nueva versión:
```sql
INSERT INTO documentos_legales (tipo, version, contenido)
VALUES ('terminos', '2.0', 'TEXTO COMPLETO AQUÍ...');
```
La web siempre muestra la versión más reciente (ordenada por `vigente_desde` DESC).

## Variables de entorno

Archivo `.env.local` (no se commitea):
```
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
```

## Comandos

```bash
# Desarrollo
npm run dev

# Build estático (para GitHub Pages)
npm run build

# Servir build estático local
npx serve out

# Deploy a GitHub Pages
# Se configura con GitHub Actions (ver .github/workflows/)
```

## Deploy en GitHub Pages

El proyecto usa `output: 'export'` en `next.config.ts` para generar HTML estático.

Para configurar GitHub Pages:
1. Ir a Settings > Pages en el repo
2. Source: GitHub Actions
3. Crear workflow que haga build y deploy de la carpeta `out/`

## Colores (mismos que la app mobile)
- Primary: #FF385C (rojo coral)
- Secondary: #00A699 (teal)
- Background: #FFFFFF
- Text: #222222
- Gray: #717171

## Repo relacionado
- App mobile: github.com/ViajaCompartido/CarpoolMobile
