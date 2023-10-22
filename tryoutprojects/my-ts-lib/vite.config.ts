// vite.config.ts

/// <reference types="vitest" />
// Configure Vitest (https://vitest.dev/config/)

import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';


/**
 * Since we are gonna use some Node.js modules like path, we need no install @types/node.
 * And to be able to include our type definitions as .d.ts files to our bundle,
 * we need vite-plugin-dts.
 */
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'my-lib',
            fileName: 'my-lib',
        },
    },
    plugins: [dts()],
    test: {
        // ...
    },
});