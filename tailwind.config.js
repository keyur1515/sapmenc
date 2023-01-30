/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
      colors: {
        dot_color: "#030088",
      },
      backgroundImage: {
        "hero-bg": "url('/images/black.jpg')",
      },
    },
  },
  plugins: [],
};
