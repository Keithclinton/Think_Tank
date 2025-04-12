module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this matches your file structure
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EEC843', // Vibrant yellow
        textPrimary: '#000000', // Black
        textSecondary: '#ffffff', // White
        customYellow: '#EEC843',
      },
    },
  },
  plugins: [],
};
