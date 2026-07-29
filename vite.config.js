import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base ist auf den GitHub-Pages-Projektpfad eingestellt.
// Sobald die eigene Domain (z.B. meine-energieberatung.com) per CNAME
// verbunden ist, hier auf base: '/' umstellen.
export default defineConfig({
  plugins: [react()],
  base: '/energieberatung-website/',
})
