import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  base: "/robofriends/",
  plugins: [
    react(),
    VitePWA({
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'favicon.svg', 'favicon-96x96.png'],
      manifest: {
        name: "Robofriends",
        short_name: "Rfriends",
        description: "A robot networking web application",
        theme_color: "#ffffff",
        icons: [
          {
            src: "web-app-manifest-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },

          {
            src: "web-app-manifest-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      },

      registerType: 'autoUpdate',
      
      injectRegister: 'auto',

      devOptions: {
        enabled: true
      },

      workbox: {
        runtimeCaching: [{
          urlPattern: "https://jsonplaceholder.typicode.com/users",
          handler: "CacheFirst",
          options: {
            cacheName: "robots-api-cache",
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }]
      }
    })
  ],
})
