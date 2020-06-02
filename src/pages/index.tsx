import React from "react"

import { Layout } from "../components/Layout"

import { useTranslation, setNamespaces, TPC } from "../i18n"

const Home: TPC = () => {
  const { t } = useTranslation()
  return <Layout>{t("description")}</Layout>
}

Home.getInitialProps = () => {
  return {
    namespacesRequired: setNamespaces([])
  }
}

export default Home
