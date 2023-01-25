/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      akzentica: ["Akzentica4F", "Poppins"]
    },

    fontSize: {
      xs: ["14px", { lineHeight: "24px", letterSpacing: "-0.03em" }],
      sm: ["16px", { letterSpacing: "28px", letterSpacing: "-0.03em" }],
      lg: ["18px", { lineHeight: "28px", letterSpacing: "-0.03em" }],
      xl: ["24px", { lineHeight: "36px", letterSpacing: "-0.03em" }],
      "2xl": ["36px", { lineHeight: "48px", letterSpacing: "-0.032em" }],
      "3xl": ["48px", { lineHeight: "57.6px", letterSpacing: "-0.032em" }],
      "4xl": ["64px", { lineHeight: "76.8px", letterSpacing: "-0.032em" }],
      "5xl": ["80px", { lineHeight: "80px", letterSpacing: "-0.032em" }]
    },

    colors: {
      white: "#FFFFFF",
      blue: "#1F2148",
      gray: "#94A9AC",
      green: "#3EE8B5",
      yellow: "#ECC80F",
      "semi-gray": "#6F767E",
      "dark-gray": "#7B6A83",
      "dark-blue": "#263959",
      "light-gray": "#F4F4F4"
    },

    backgroundImage: {
      heroBg: "url('./src/assets/images/hero_bg.png')"
    },

    extend: {}
  },
  plugins: []
};
