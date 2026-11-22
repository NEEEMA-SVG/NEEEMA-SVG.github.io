import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base '/' because this is hosted at https://neeema-svg.github.io (a user site)
export default defineConfig({
  plugins: [react()],
  base: '/',
  // Build into /docs so GitHub Pages can serve it with
  // Settings → Pages → "Deploy from a branch" → main → /docs
  build: { outDir: 'docs' },
})
