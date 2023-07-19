/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone': '270px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
        'screen': '1536px',
        'cesarTv': '2000px'
      },
      colors: {
        danger: 'rgb(220,38,38)',
        success: 'rgb(34,197,94)',
        warning: 'rgb(234,179,8)',
        info: 'rgb(59,130,246)'
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border|hover)-(danger|success|warning|info)/,
      variants: ['hover', 'focus'],
    },
  ]
}

