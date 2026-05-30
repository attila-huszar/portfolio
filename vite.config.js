import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'react-vendor',
              test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              priority: 40,
            },
            {
              name: 'mui-vendor',
              test: /node_modules[\\/](@mui|@emotion)[\\/]/,
              priority: 30,
            },
            {
              name: 'particles-vendor',
              test: /node_modules[\\/]@tsparticles[\\/]/,
              priority: 20,
            },
            {
              name: 'vendor',
              test: /node_modules[\\/]/,
              priority: 10,
              minSize: 20 * 1024,
            },
          ],
        },
      },
    },
  },
})
