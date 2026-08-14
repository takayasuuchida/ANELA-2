import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// GitHub Pages などサブパス配信時は VITE_BASE=/ANELA-2/ を指定（Vercel等は未指定で従来どおり "/"）
const BASE = process.env.VITE_BASE || "/";

export default defineConfig({
  base: BASE,
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "apple-touch-icon.png"],
      manifest: {
        name: "VIVACE つけ回し",
        short_name: "VIVACE",
        description: "キャバクラ卓管理・付け回し（VIVACE）",
        theme_color: "#000000",
        background_color: "#000000",
        display: "standalone",
        orientation: "any",
        lang: "ja",
        start_url: BASE,
        scope: BASE,
        icons: [
          {
            src: "pwa-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,woff,woff2}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
  server: { host: true },
});
