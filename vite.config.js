import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// Multi-page build: add each page's HTML entry here.
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        about: resolve(import.meta.dirname, 'about.html'),
        skills: resolve(import.meta.dirname, 'skills.html'),
        projects: resolve(import.meta.dirname, 'projects.html'),
        contact: resolve(import.meta.dirname, 'contact.html'),
      },
    },
  },
})
