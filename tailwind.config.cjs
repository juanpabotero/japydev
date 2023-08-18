/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        16: 'max-content max-content 1fr max-content',

        // Complex site-specific column configuration
        footer: '200px minmax(900px, 1fr) 100px'
      }
    }
  },
  plugins: []
};
