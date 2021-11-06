module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'oxford-blue': '#001226',
      'indigo-dye': '#083d77',
      'light-blue': '#b0d0d3',
      'raisin-black': '#2e2c2f',
      'light-gray': '#d1d5de',
      white: '#ffffff',
      black: '#000000',
    },
    extend: {},
    fontFamily: {
      body: [
        '"Gill Sans"',
        '"Gill Sans MT"',
        '"Calibri"',
        '"Trebuchet MS"',
        'sans-serif',
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
