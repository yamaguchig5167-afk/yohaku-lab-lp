import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 公開URL: https://yamaguchig5167-afk.github.io/yohaku-lab-lp/
export default defineConfig({
  plugins: [react()],
  base: '/yohaku-lab-lp/',
})
