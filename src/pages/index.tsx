import React from "react"
import { NextPage } from "next"

import { Layout } from "../components/Layout"

import { useTranslation, setNamespaces, TSSP } from "../i18n"

const Home: NextPage = () => {
  const { t } = useTranslation()
  return <Layout>{t("description")}</Layout>
}

export const getServerSideProps: TSSP = async () => {
  return {
    props: {
      namespacesRequired: setNamespaces([])
    }
  }
}

export default Home
