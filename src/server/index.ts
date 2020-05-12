import express from "express"
import nextI18NextMiddleware from "next-i18next/middleware"

import nextI18next from "../i18n"
import app from "./app"

const port = isNaN(parseInt(process.env.PORT || ""))
  ? 3000
  : parseInt(process.env.PORT || "")
const handle = app.getRequestHandler()
;(async () => {
  await app.prepare()
  const server = express()
  await nextI18next.initPromise
  server.use(nextI18NextMiddleware(nextI18next))
  server.all("*", (req, res) => res.headersSent || handle(req, res))

  server.listen(port, () => console.log(`listening on ${port}`))
})()
