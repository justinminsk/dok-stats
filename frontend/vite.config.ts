import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

const pagesBasePath = process.env.VITE_BASE_PATH ?? '/daughters-of-khaine-stats/';

export default defineConfig({
  base: pagesBasePath,
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
});
