import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    assetsDir: 'static',
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name].[hash].js',
        entryFileNames: 'static/js/[name].[hash].js',
        assetFileNames: 'static/[ext]/[name].[hash].[ext]'
      }
    }
  },
  define: {
    'process.env': JSON.stringify(process.env),
  },
})