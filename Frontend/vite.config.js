import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",

      includeAssets: ["favicon.png", "favicon.ico", "apple-touch-icon.png"],

      manifest: {
        name: "NoteHub",
        short_name: "NoteHub",

        description: "Modern MERN Notes Application",

        theme_color: "#0f172a",

        background_color: "#020617",

        display: "standalone",

        orientation: "portrait",

        start_url: "/",

        icons: [
          {
            src: "favicon.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "favicon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
