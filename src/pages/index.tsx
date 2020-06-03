import React from "react"
import gql from "graphql-tag"
import { withApollo } from "apollo-client-ssr"
import { useQuery } from "@apollo/react-hooks"

import { useTranslation, setNamespaces, TPC } from "../i18n"
import { port } from "../common"

const Query = gql`
  query test {
    get {
      date
      string
    }
  }
`

const Home: TPC = () => {
  const { t } = useTranslation()
  const { error, data, loading } = useQuery<{
    get: { date: Date; string: string }
  }>(Query)
  return (
    <div>
      <div>{t("description")}</div>
      {error
        ? error.message
        : data && !loading
        ? `${data.get.string} ${new Date(data.get.date).toUTCString()}`
        : "loading"}
    </div>
  )
}

Home.getInitialProps = () => {
  return {
    namespacesRequired: setNamespaces([])
  }
}

export default withApollo(Home, {
  url: "/__graphql",
  localPort: port,
  subscription: false
})
