import { defineConfig } from 'vite'
import { paraglide } from '@inlang/paraglide-js-adapter-vite'

export default defineConfig({
  plugins: [
    paraglide({
      project: './project.inlang', // Path to your inlang project
      outdir: './src/paraglide' // Where you want the generated files to be placed
    })
  ]
})
