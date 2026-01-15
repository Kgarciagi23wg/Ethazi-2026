import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // escucha en todas las interfaces (0.0.0.0)
    port: 5173, // puerto por defecto, cámbialo si quieres
    strictPort: false,
    // Permitir conexiones desde hosts externos (ej. Ngrok)
    allowedHosts: [
      'uneverted-amparo-confusingly.ngrok-free.dev', // tu host ngrok
      'localhost',
      '127.0.0.1'
    ],
  },
})
