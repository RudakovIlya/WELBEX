import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/WELBEX/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})