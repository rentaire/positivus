import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import vitePluginSvgr from 'vite-plugin-svgr';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  experimental: {
    svg: true,
  },
  vite: {
    plugins: [
      tailwindcss(),
      vitePluginSvgr({
        include: '**/*.svg?react',
        svgrOptions: {
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
          svgoConfig: {
            plugins: ['preset-default', 'removeTitle', 'removeDesc', 'removeDoctype', 'cleanupIds'],
          },
        },
      }),
    ],
  },
});
