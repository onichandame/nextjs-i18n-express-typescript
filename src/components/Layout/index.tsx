import React, { FC } from "react"

import { SystemTheme } from "../../theme"
import { Appbar } from "./Appbar"

export const Layout: FC = ({ children }) => {
  return (
    <SystemTheme>
      <Appbar />
      <main>{children}</main>
    </SystemTheme>
  )
}
