import React, { Fragment, FC } from "react"
import App from "next/app"
import NextHead from "next/head"
import { CssBaseline } from "@material-ui/core"

import { appWithTranslation, useTranslation } from "../i18n"
import { Layout } from "../components"

const Head: FC = () => {
  const { t } = useTranslation()
  return (
    <NextHead>
      <title>{t("title")}</title>
      <meta name="charset" content="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="icon"
        href="https://nextjs.org/static/favicon/favicon-32x32.png"
      />
      <meta name="theme-color" content="#222222" />
      <meta name="description" content={t("title")} />
    </NextHead>
  )
}

class MyApp extends App {
  componentDidMount(): void {
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }

  render(): ReturnType<App["render"]> {
    const { Component, pageProps } = this.props

    return (
      <Fragment>
        <Head />
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Fragment>
    )
  }
}

export default appWithTranslation(MyApp)
