// vite.config.ts
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
var __vite_injected_original_dirname = "E:\\_codepen\\git\\Snake";
var setPath = (dir) => {
  return path.resolve(__vite_injected_original_dirname, dir);
};
var vite_config_default = defineConfig({
  root: "./src/",
  build: {
    outDir: "./dist"
  },
  plugins: [react()],
  resolve: {
    alias: {
      "src": setPath("./src/"),
      "css": setPath("./public/css/"),
      "imgs": setPath("./public/imgs"),
      "types": setPath("./src/types.ts"),
      "game": setPath("./src/game"),
      "contexts": setPath("./src/contexts"),
      "components": setPath("./src/components")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxfY29kZXBlblxcXFxnaXRcXFxcU25ha2VcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXF9jb2RlcGVuXFxcXGdpdFxcXFxTbmFrZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovX2NvZGVwZW4vZ2l0L1NuYWtlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5cbmNvbnN0IHNldFBhdGggPSAoZGlyKSA9PiB7XG4gIHJldHVybiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLGRpcilcbn1cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByb290OlwiLi9zcmMvXCIsXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiAnLi9kaXN0J1xuICB9LFxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJzcmNcIjogc2V0UGF0aChcIi4vc3JjL1wiKSxcbiAgICAgIFwiY3NzXCI6IHNldFBhdGgoXCIuL3B1YmxpYy9jc3MvXCIpLFxuICAgICAgXCJpbWdzXCI6IHNldFBhdGgoXCIuL3B1YmxpYy9pbWdzXCIpLFxuICAgICAgXCJ0eXBlc1wiOiBzZXRQYXRoKFwiLi9zcmMvdHlwZXMudHNcIiksXG4gICAgICBcImdhbWVcIjogc2V0UGF0aChcIi4vc3JjL2dhbWVcIiksXG4gICAgICBcImNvbnRleHRzXCI6IHNldFBhdGgoXCIuL3NyYy9jb250ZXh0c1wiKSxcbiAgICAgIFwiY29tcG9uZW50c1wiOiBzZXRQYXRoKFwiLi9zcmMvY29tcG9uZW50c1wiKSxcbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlQLE9BQU8sVUFBVTtBQUMxUSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFGbEIsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTSxVQUFVLENBQUMsUUFBUTtBQUN2QixTQUFPLEtBQUssUUFBUSxrQ0FBVSxHQUFHO0FBQ25DO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBSztBQUFBLEVBQ0wsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxPQUFPLFFBQVEsUUFBUTtBQUFBLE1BQ3ZCLE9BQU8sUUFBUSxlQUFlO0FBQUEsTUFDOUIsUUFBUSxRQUFRLGVBQWU7QUFBQSxNQUMvQixTQUFTLFFBQVEsZ0JBQWdCO0FBQUEsTUFDakMsUUFBUSxRQUFRLFlBQVk7QUFBQSxNQUM1QixZQUFZLFFBQVEsZ0JBQWdCO0FBQUEsTUFDcEMsY0FBYyxRQUFRLGtCQUFrQjtBQUFBLElBQzFDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
