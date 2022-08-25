/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      farve: "#F1F5F9",
      farve2: "#1E293B",
      farve3: "#DCE2F2",
      farve4: "#626B73",
      farve5: "#475945",
      farve6: "#ACBFA3",
      farve7: "#808C56",
      farve8: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
