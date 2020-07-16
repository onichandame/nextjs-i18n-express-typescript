import React from "react"
import gql from "graphql-tag"
import { withApollo, useQuery } from "apollo-client-ssr"

import { useTranslation, setNamespaces, TPC } from "../i18n"
import { port } from "../common"

const QUERY = gql`
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
  }>(QUERY, { pollInterval: 1000 })
  return (
    <div>
      <div>{t("description")}</div>
      {error
        ? error.message
        : loading
        ? "loading"
        : data
        ? `${data.get.string} ${new Date(data.get.date).toUTCString()}`
        : "error"}
    </div>
  )
}

Home.getInitialProps = () => {
  return {
    namespacesRequired: setNamespaces([]),
  }
}

export default withApollo(Home, {
  url: "/graphql",
  localPort: port,
  subscription: false,
})
