import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

const defineConfig = ({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});

export default defineConfig;
