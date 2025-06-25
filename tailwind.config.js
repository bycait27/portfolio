const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // enable class-based dark mode 
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        // define light mode theme
        background: {
          primary: "#f5f5f5",      // light mode background
          secondary: "#e6e6e6",    // light mode cards/sections
        },
        text: {
          primary: "#17171a",      // light mode primary text
          secondary: "#ff6d6b",    // light mode secondary text
          tertiary: "#f0ad10",      // light mode tertiary text
          highlight: "#abc1ff",     // light mode highlight
        },
      },
      dropShadow: {
        "lg": "2px 2px 10px rgba(245,245,245,0.9)",
      }
    },
  },
  plugins: [],
};

export default config;
