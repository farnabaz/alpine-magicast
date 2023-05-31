import { defineTheme } from 'pinceau'

export default defineTheme({
  alpine: {
    body: {
      color: {
        value: {
          dark: "white"
        }
      }
    }
  },

  color: {
    green: {
      100: {
        value: "#5d746a"
      }
    },

    primary: {
      500: {
        value: "#1aff34"
      },
      100: "#5d746a"
    }
  }
})
