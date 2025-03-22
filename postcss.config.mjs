const config = {
  plugins: ["@tailwindcss/postcss"],
  purge: {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", 
              "./components/**/*.{js,ts,jsx,tsx}",
              "./app/**/*.{js,ts,jsx,tsx}"],
          
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black:{
          DEFAULT : "#000000",
          100 : "#000319",
        },
        white:{
          DEFAULT : "#ffffff",
        }
      },
    },
  },
  variants: {},
  plugins: [],

};

export default config;
