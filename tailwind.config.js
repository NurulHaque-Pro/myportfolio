/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFD32A',
          // Add other color variants if needed
          // 'light': '#FFD32A',
          // 'dark': '#FFD32A',
        },
      },
      fontFamily: {
        dancing: ['Dancing Script', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        'mytheme': {
          'primary': '#FFD32A',
          'primary-focus': '#FFD32A',
          'primary-content': '#ffffff',
          'secondary': '#f000b8',
          'secondary-focus': '#bd0091',
          'secondary-content': '#ffffff',
          'accent': '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          'neutral': '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#1f2937',
          'base-200': '#111827',
          'base-300': '#374151',
          'base-content': '#ffffff',
          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
    ],
    darkMode: 'class', // Enable dark mode based on the 'dark' class
  },
};
