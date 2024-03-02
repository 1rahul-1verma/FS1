/** @type {import('tailwindcss').Config} */
const commonConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
  ...commonConfig,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
