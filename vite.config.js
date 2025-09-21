// remote-app/vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"

export default defineConfig({
  plugins: [vue()],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    assetsDir: "",
  },
  base:"/prize-draw/",
  server: {
    port: 5174,
    cors: true,
    // allowedHosts:true // for debug
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // Define global constants
  define: {
    __API_BASE_URL__: JSON.stringify(
      process.env.NODE_ENV === "production"
        ? "https://prize-service.onrender.com/api/v1" // production API URL
        : "http://localhost:8080/api/v1"
    ),
  },
  // Environment variables configuration
  envPrefix: "VITE_",
});
