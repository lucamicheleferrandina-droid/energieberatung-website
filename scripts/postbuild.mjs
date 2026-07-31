// Kopiert dist/index.html in ein eigenes Verzeichnis pro Route, damit
// GitHub Pages für Direktaufrufe (z.B. /leistungen) einen echten
// HTTP-200-Status liefert statt über den 404.html-Umweg zu gehen.
// Wichtig für die Google-Indexierung der einzelnen Unterseiten.
import { mkdirSync, copyFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = dirname(fileURLToPath(import.meta.url))
const distDir = join(rootDir, '..', 'dist')
const indexHtml = join(distDir, 'index.html')

const routes = ['leistungen', 'ueber-mich', 'ratgeber', 'faq', 'kontakt', 'impressum', 'datenschutz']

if (!existsSync(indexHtml)) {
  console.error('dist/index.html nicht gefunden – lief "vite build" davor?')
  process.exit(1)
}

for (const route of routes) {
  const dir = join(distDir, route)
  mkdirSync(dir, { recursive: true })
  copyFileSync(indexHtml, join(dir, 'index.html'))
}

console.log('Postbuild: index.html für Routen dupliziert ->', routes.join(', '))
