import { createMuiTheme } from "@material-ui/core/styles"
import { amber, grey } from "@material-ui/core/colors"

export const darkTheme = createMuiTheme({
  palette: {
    text: {
      primary: amber[200]
    },
    background: {
      default: grey[900],
      paper: grey[900]
    },
    primary: {
      main: grey[800]
    },
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
