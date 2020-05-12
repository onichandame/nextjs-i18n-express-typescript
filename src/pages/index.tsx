import React from "react"

import { Layout } from "../components/Layout"

import { TPC, setNamespaces, useTranslation } from "../i18n"

const Home: TPC = () => {
  const { t } = useTranslation()
  return <Layout>{t("description")}</Layout>
}

Home.getInitialProps = () => ({
  namespacesRequired: setNamespaces([])
})

export default Home
