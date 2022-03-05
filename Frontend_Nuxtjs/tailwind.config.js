module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        'md': '768px',
        // => @media (min-width: 640px) { ... }
  
        'lg': '992px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1024px',
        'xxl' : '1280px',
        'xxxl' : '1500px'
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
}
