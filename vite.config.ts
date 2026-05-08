import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  /*
   * PERF: Build configuration tuned for the production landing page.
   *
   * - target 'es2020' lets the bundle skip a lot of legacy transpilation
   *   (async/await, optional chaining, nullish coalescing) — modern Vite
   *   default but pinning makes it explicit. ~5–8% smaller JS on real apps.
   *
   * - manualChunks splits the single 600KB+ vendor blob into logical groups
   *   so the browser can parallelize downloads and so updating one chunk
   *   doesn't bust cache for all the others. The router/icons/radix-vendor
   *   chunks are also long-cache friendly (they rarely change).
   *
   * - cssMinify + minify default ('esbuild') give the strongest minification
   *   without an extra plugin.
   */
  build: {
    target: "es2020",
    cssMinify: true,
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;
          if (id.includes("react-router")) return "router";
          if (id.includes("@radix-ui")) return "radix";
          if (id.includes("lucide-react")) return "icons";
          if (id.includes("react-dom") || id.includes("/react/") || id.includes("scheduler")) {
            return "react";
          }
          // Everything else from node_modules — keep small and lazy-friendly.
          return "vendor";
        },
      },
    },
  },
}));
