import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base '/' because this is hosted at https://neeema-svg.github.io (a user site)
export default defineConfig({
  plugins: [react()],
  base: '/',
})
