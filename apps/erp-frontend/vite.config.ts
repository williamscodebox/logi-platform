import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({  
  server: {
    proxy: {
      '/dashboard': {
        target: 'http://localhost:3000', // your NestJS backend
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
})
