import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative Pfade, damit der Build sowohl unter der github.io-Projekt-URL
// als auch unter der eigenen Domain (CNAME) ohne Anpassung funktioniert.
export default defineConfig({
  plugins: [react()],
  base: './',
})
