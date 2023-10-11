/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-green-1': '#006837',
        'primary-green-2': '#A00859',
        'secondary-green': '#007E47',
        'primary-gray': '#210276',
        'primary-blue': '#384D76',
        'secondary-blue': '#314266',
        'primary-pink': '#EC268F',
        'secondary-pink': '#F7ADAF',
        'primary-orange': '#A8518A',
      },
      fontFamily: {
        museo: ['MuseoModerno', 'cursive'],
        yeseva: ['Yeseva One', 'cursive'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
  important: true,
};
