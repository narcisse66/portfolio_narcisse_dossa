/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-black-10": "#1A1A1A",
        "custom-black-30": "#333333",
        "custom-black-40": "#666666",
        "custom-black-60": "#999999",
        "custom-black-90": "#E6E6E6",
        "custom-black-98": "#FAFAFA",
        "custom-light-90": "#E6E6E6",
        "custom-light-98": "#FAFAFA",
        "custom-green-60": "#19B373",
        "custom-green-95": "#E9FCF4",
        "custom-red-60": "#ED4553",
        "custom-red-95": "#FCE8E9",
      },
      screens: {
        extra: "1600px",
      },
    },
  },
  plugins: [],
};
