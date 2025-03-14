import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "replace-api-key",
      transformIndexHtml(html) {
        return html.replace(
          /%VITE_GOOGLE_MAPS_API_KEY%/g,
          process.env.VITE_GOOGLE_MAPS_API_KEY
        );
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
