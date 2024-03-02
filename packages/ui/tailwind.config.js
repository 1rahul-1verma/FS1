/** @type {import('tailwindcss').Config} */
const commonConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
  ...commonConfig,
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
};
