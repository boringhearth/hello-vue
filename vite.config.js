import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

// base must match the repo name for GitHub Pages
export default defineConfig({
    base: '/hello-vue/',
    plugins: [vue(), tailwindcss()],
});
