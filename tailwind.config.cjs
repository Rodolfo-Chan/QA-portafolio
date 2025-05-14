module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  plugins: [
    require('taos/plugin')
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}