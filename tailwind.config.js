/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        github: "#181717",
        instagram: "#E1306C",
        linkedin: "#0077B5",
        twitter: "#1DA1F2",
        replit: "#fc9003",
      },
    },
  },
  plugins: [require("daisyui", "flowbite/plugin")],
  darkMode: "class",
};
