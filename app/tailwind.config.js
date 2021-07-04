module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  separator: '_',
  theme: {
    colors: {
      "beige-light": "#fffef2",
      "beige-dark": "#f6f5e8",
      dark: "#252525",
      "text-dark": "#333333",
      "text-light": "#666666"
    },
    fontFamily: {
      "sans": ["Suisse Regular", "Helvetica", "Arial", "sans-serif"],
      "display": ["Zapf Humanist", "serif"]
    }
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      borderColor: ['hover']
    },
  },
  plugins: [],
}
