import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react-swc'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
    React(),
    AutoImport({
      imports: [
        'react',
        'ahooks',
      ],
      dirs: [
        './src/components/**',
        './src/hooks/**',
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
