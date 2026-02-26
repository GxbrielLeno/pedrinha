import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'
import fs from 'fs'
import path from 'path'

// Função que varre sua pasta de posts
const getPostSlugs = () => {
  const postsDirectory = path.resolve(__dirname, 'src/content') 
  
  if (!fs.existsSync(postsDirectory)) return []
  
  return fs.readdirSync(postsDirectory)
    .filter(file => file.endsWith('.md'))
    .map(file => `/blog/${file.replace('.md', '')}`)
}

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://gabrielleno.com.br',
      dynamicRoutes: [
        '/blog',
        ...getPostSlugs() // Adiciona automaticamente cada post .md que você criar
      ],
    }),
  ],
})