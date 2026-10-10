import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 使用相对 base，确保部署到 GitHub Pages 子路径（如 /repo-name/）也能正常加载资源
export default defineConfig({
  base: './',
  plugins: [react()],
})
