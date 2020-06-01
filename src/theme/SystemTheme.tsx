import React, { FC } from "react"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { useSysMode } from "react-sysmode"

import { lightTheme } from "./light"
import { darkTheme } from "./dark"

export const SystemTheme: FC = props => {
  const { dark } = useSysMode()
  return (
    <MuiThemeProvider theme={dark ? darkTheme : lightTheme}>
      <div {...props} />
    </MuiThemeProvider>
  )
}
