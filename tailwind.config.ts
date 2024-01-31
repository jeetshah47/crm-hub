import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        secondary: "#7D8592",
        "white-back": "#F4F9FD",
        "primary-blue": "#3F8CFF",
        "low-blue": "#F4F9FD",
        "shallow-black": "#0A1629",
      },
      backgroundColor: {
        permanent: "#F4F9FD",
        "blue-chalk": "#E6EDF5",
        'modal': "#2155A3"
      },
    },
  },
  plugins: []
};
export default config;
