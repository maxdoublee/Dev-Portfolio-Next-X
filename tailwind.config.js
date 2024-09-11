module.exports = {
  purge: {
    content: [
      "./pages/**/*.tsx",
      "./components/**/*.tsx",
      "./layouts/**/*.tsx",  // Include layouts or any other directories with JSX/TSX
    ],
    options: {
      safelist: [/^text-/],  // This will keep all classes that start with text-
    },
  },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#f81e1a",  // Your custom green
        },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [],
};