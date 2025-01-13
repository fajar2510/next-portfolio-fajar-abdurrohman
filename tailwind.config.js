/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,css,js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: "class",
    extend: {
      fontFamily: {
        openSans: ["'Open Sans'", "sans-serif"], // Tambahkan Open Sans
      },
      boxShadow: {
        // Custom shadow untuk brutalism
      },
      colors: {
        github: "#181717",
        instagram: "#E1306C",
        linkedin: "#0077B5",
        twitter: "#1DA1F2",
        replit: "#fc9003",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".shadow-brutalism": {
          boxShadow: "5px 5px 0px 0px rgba(0,0,1,1)",
          border: "2px solid rgba(0,0,1,1)", // Border ditambahkan di sini
        },
      });
    },
    require("daisyui"),
    require("flowbite/plugin"),
  ],
};
