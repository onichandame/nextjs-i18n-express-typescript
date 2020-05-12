import { createMuiTheme } from "@material-ui/core/styles"

export const lightTheme = createMuiTheme({
  palette: {
    success: {
      main: "#008000",
      light: "#00ff00"
    },
    error: {
      main: "#ff382e",
      light: "#ff0000",
      dark: "#a80f07"
    }
  }
})
