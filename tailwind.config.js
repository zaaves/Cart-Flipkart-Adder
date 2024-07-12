/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        
        // => @media (min-width: 640px) { ... }

      }
    },
  },
  plugins: [],
}

