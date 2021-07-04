module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  separator: '_',
  theme: {
    colors: {
      "beige-light": "#fffef2",
      "beige-dark": "#f6f5e8",
      dark: "#252525",
      "copy-dark": "#333333",
      "copy-light": "#666666",
      "accent-dark": "#4a4a4a",
      "accent-light": "#d5d4c9",
      "black": "#000000"
    },
    fontFamily: {
      "sans": ["Suisse Regular", "Helvetica", "Arial", "sans-serif"],
      "sans-bold": ["Suisse Medium", "Helvetica", "Arial", "sans-serif"],
      "display": ["Zapf Humanist", "serif"]
    },
    extend: {
      width: {
        "1_4": "25%",
        "1_3": "33.333333%",
        "1_2": "50%",
        "2_3": "66.666666%"
      },
      spacing: {
        "8pc": "8%",
        "0pt5": "2px",
        "2pt5": "10px",
        "3pt5": "15px",
      },
      minHeight: {
        "85vh": "85vh"
      }
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
