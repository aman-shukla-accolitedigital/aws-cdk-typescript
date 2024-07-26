import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSingleSpa from 'vite-plugin-single-spa'
import { registerApplication } from 'single-spa';
import importMap from './src/importMap.dev.json';
export default defineConfig({
  plugins: [react(), vitePluginSingleSpa({
    type: 'root',
    imo: '3.1.0'
  })],
})
