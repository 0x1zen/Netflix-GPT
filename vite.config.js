import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      "37f83093-6b64-4513-98b5-c02ae4516e45-00-31d4dvr68uuae.pike.replit.dev",
    ],
  },
});
