/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*{.js,.jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        background: "#fff",
        "blue-linear":
          "linear-gradient(180deg, #112D74 0%, #0C3E82 17.71%, #084B8C 35.02%, #035B99 51.56%, #0066A2 71.35%, #0B7FC3 91.67%)",
      },
      colors: {
        "blue-linear":
          "linear-gradient(180deg, #112D74 0%, #0C3E82 17.71%, #084B8C 35.02%, #035B99 51.56%, #0066A2 71.35%, #0B7FC3 91.67%)",
        "foundation-blue-b-300": "#112D74",
        Black: "#141414",
      },
      backgroundImage: {
        "auth-side": "url('./src/images/auth_size_img.svg')",
      },
    },
  },
  plugins: [],
};
