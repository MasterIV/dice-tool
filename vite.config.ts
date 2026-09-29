import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Change the output directory from 'dist' to 'dist/frontend'
    outDir: 'dist/frontend',
    // Optional: Ensures the directory is cleared before building
    emptyOutDir: true,
  },
})
