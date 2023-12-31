import {fileURLToPath, URL} from 'node:url'

import { defineConfig, searchForWorkspaceRoot } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import unocss from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        fs: {
            allow: [searchForWorkspaceRoot(process.cwd())],
        },
    },
    plugins: [
        vue(),
        vueJsx(),
        unocss()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
