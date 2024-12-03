import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  base: "/robofriends",
  plugins: [
    react(),
    VitePWA({
      includeAssets: [
        'favicon.ico', 'apple-touch-icon.png', 'favicon.svg', 'favicon-96x96.png',
      ],
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

      workbox: {
        globPatterns: ["**/assets/*.woff"],
        globDirectory: "dist",
        runtimeCaching: [
          { // Robot Information
            urlPattern: ({url}) => url.origin === "https://jsonplaceholder.typicode.com",
            handler: "CacheFirst",
            options: {
              cacheName: "robots-info-cache",
              cacheableResponse: {
                statuses: [200]
              }
            }
          },

          { // Robot Pictures
            urlPattern: ({url}) => url.origin === "https://robohash.org",
            handler: "CacheFirst",
            options: {
              cacheName: "robots-images-cache",
              cacheableResponse: {
                statuses: [200]
              }
            }
          }

        ]
      }
    })
  ],
})
