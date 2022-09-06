import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const setPath = (dir) => {
  return path.resolve(__dirname,dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  root:"./src/",
  build: {
    outDir: './dist'
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
      "components": setPath("./src/components"),
    }
  }
})
