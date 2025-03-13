import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({

  content: [
    "./src/**/*.{js,cjs,mjs,ts,cts,mts}",
  ]
  
,
  plugins: [react(),
    tailwindcss(),
  ],

  build: {
    chunkSizeWarningLimit: 2000,
    minify: false, // Disable minification to debug
    sourcemap: true, // Enable source maps for better debugging
  },
  optimizeDeps: {
    include: ["@emotion/react", "@emotion/styled", "framer-motion"],
  },
  manualChunks: {
		lodash: ['lodash']
	},

  base: "/",
})



