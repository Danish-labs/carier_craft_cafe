import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { imageOptimizer } from './vite-plugins/image-optimizer';

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => ({
  base: command === 'build' ? 'https://cdn.jsdelivr.net/gh/gunn2522/career-craft-cafe@main/' : '/',
  server: {
    host: "::",
    port: 8080,
    // Enable HMR
    hmr: true,
  },
  // Enhanced build optimization
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    cssMinify: true,
    cssCodeSplit: true,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'react-vendor';
            }
            if (id.includes('@radix-ui')) {
              return 'radix-vendor';
            }
            return 'vendor';
          }
          if (id.includes('src/components/ui')) {
            return 'ui-components';
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      },
    },
    chunkSizeWarningLimit: 1500,
    assetsInlineLimit: 4096,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && imageOptimizer()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Optimize deps
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@radix-ui/react-icons'],
  },
  // Enable source maps for debugging
  sourcemap: mode === 'development',
}));
