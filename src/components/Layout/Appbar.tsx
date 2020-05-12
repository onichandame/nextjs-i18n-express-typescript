import React, { useState } from "react"
import {
  AppBar,
  Typography,
  IconButton,
  Switch,
  Theme,
  FormGroup,
  FormControlLabel,
  Menu,
  MenuItem,
  Toolbar
} from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { AccountCircle, Menu as MenuIcon } from "@material-ui/icons"

import { i18n, useTranslation, withTranslation } from "../../i18n"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
)

export const Appbar = withTranslation("common")(() => {
  let languages = i18n.languages
  if (!languages || languages.length < 2) {
    languages = ["en", "cn"]
  }
  const { t } = useTranslation()
  const [lang, setLang] = useState<string>(i18n.language)

  const classes = useStyles()
  const [auth, setAuth] = useState(true)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleAuth = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAuth(event.target.checked)
  }

  const handleLang = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLang(event.target.checked ? languages[0] : languages[1])
    i18n.changeLanguage(lang)
  }

  const handleMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <FormGroup></FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {t("title")}
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={lang === languages[0]}
                onChange={handleLang}
                aria-label="language switch"
              />
            }
            label={i18n.language}
          />
          <FormControlLabel
            control={
              <Switch
                checked={auth}
                onChange={handleAuth}
                aria-label="login switch"
              />
            }
            label={auth ? "Logout" : "Login"}
          />
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
})
