import React from "react"

import { TPC, useTranslation } from "../i18n"

type ErrorComponent = TPC<{ statusCode?: number }>

const Error: ErrorComponent = ({ statusCode = null }) => {
  const { t } = useTranslation()

  return (
    <p>
      {statusCode
        ? `${t("error-with-status")} ${statusCode}`
        : `${t("error-without-status")} ${statusCode}`}
    </p>
  )
}

Error.getInitialProps = async ({ res, err }) => {
  let statusCode = null
  if (res) {
    ;({ statusCode } = res)
  } else if (err) {
    ;({ statusCode } = err)
  }
  return {
    namespacesRequired: ["common"],
    statusCode
  }
}

export default Error
