import React from "react"

import { useTranslation, setNamespaces, TPC } from "../i18n"

const Home: TPC = () => {
  const { t } = useTranslation()
  return <>{t("description")}</>
}

Home.getInitialProps = () => {
  return {
    namespacesRequired: setNamespaces([])
  }
}

export default Home
