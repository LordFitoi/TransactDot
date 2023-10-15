import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "http://localhost:8888/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "public": path.resolve(__dirname, "./public")
    }
  }
})
