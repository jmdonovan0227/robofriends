import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  base: "/robofriends/",
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      injectRegister: 'auto',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'favicon-96x96.png', 'favicon.svg'],
      manifest: {
        name: 'Robofriends',
        short_name: "Rfriends",
        description: "A robot networking web application.",
        theme_color: "#ffffff",
        icons: [
          {
            src: 'web-app-manifest-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },

          {
            src: 'web-app-manifest-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          }
        ]
      },

      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({url}) => url.origin === 'https://jsonplaceholder.typicode.com',
            handler: 'CacheFirst',
            options: {
              cacheName: 'robots-info-cache',
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      },
    })
  ]
})
