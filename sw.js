if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,o)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>n(e,a),t={module:{uri:a},exports:c,require:r};s[a]=Promise.all(i.map((e=>t[e]||r(e)))).then((e=>(o(...e),c)))}}define(["./workbox-3020d056"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/SEGA-CyEAxcSW.woff",revision:null},{url:"apple-touch-icon.png",revision:"548578e8e0da7401cc8a62da335c24c3"},{url:"favicon-96x96.png",revision:"72dd2a3c4594918998d7877d63625425"},{url:"favicon.ico",revision:"af7ef5c6e7ae45d1feea684ea35b01c6"},{url:"favicon.svg",revision:"b7464d4eaf6e88710269aa38ebf6069e"},{url:"web-app-manifest-192x192.png",revision:"deaafbb24178fba652ad5dd18ec0ee85"},{url:"web-app-manifest-512x512.png",revision:"a1aae0c1136e01aed77097fd78d4a577"},{url:"manifest.webmanifest",revision:"17231e0226a3cfd7ca2bb350915a65c0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({url:e})=>"https://jsonplaceholder.typicode.com"===e.origin),new e.CacheFirst({cacheName:"robots-info-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute((({url:e})=>"https://robohash.org"===e.origin),new e.CacheFirst({cacheName:"robots-images-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
