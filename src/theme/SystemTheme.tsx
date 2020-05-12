import React, { FC, useReducer, useEffect } from "react"
import { MuiThemeProvider, Theme } from "@material-ui/core/styles"

import { lightTheme } from "./light"
import { darkTheme } from "./dark"

export const SystemTheme: FC = props => {
  const reduce = (): Theme =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? darkTheme
      : lightTheme
  const [theme, update] = useReducer(reduce, lightTheme)
  useEffect(() => {
    update()
    window.matchMedia("(prefers-color-scheme: dark)").addListener(update)
  }, [])
  return (
    <MuiThemeProvider theme={theme}>
      <div {...props} />
    </MuiThemeProvider>
  )
}
