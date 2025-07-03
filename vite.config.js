import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/Eventplanner/", // IMPORTANT: Repository name yahi hona chahiye
})
