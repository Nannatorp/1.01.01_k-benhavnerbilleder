/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      lightslate: "#F1F5F9",
      darkslate: "#1E293B",
      pebbels: "#DCE2F2",
      stone: "#626B73",
      moss: "#475945",
      fern: "#ACBFA3",
      sage: "#808C56",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        raleway: "’Raleway’, sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
