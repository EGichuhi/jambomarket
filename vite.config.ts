import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/kenyan-marketplace/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});