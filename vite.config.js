import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import { resolve } from 'node:path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        assortimento: resolve(import.meta.dirname, 'assortimento/index.html'),
        ingrosso: resolve(import.meta.dirname, 'ingrosso-borse-rimini/index.html'),
        chiSiamo: resolve(import.meta.dirname, 'chi-siamo/index.html'),
        contatti: resolve(import.meta.dirname, 'contatti/index.html'),
      },
    },
  },
})
