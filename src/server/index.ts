import express from "express"
import nextI18NextMiddleware from "next-i18next/middleware"
import bodyParser from "body-parser"
import "reflect-metadata" //before type-graphql

import nextI18next from "../i18n"
import app from "./app"
import { apollo } from "./apollo"
import { port } from "../common"

const handle = app.getRequestHandler()
;(async () => {
  await app.prepare()
  const server = express()
  // common middlewares
  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(bodyParser.json())
  // graphql middleware
  const graphqlServer = await apollo(server)
  // i18n middlewares
  await nextI18next.initPromise
  server.use(nextI18NextMiddleware(nextI18next))
  server.all("*", (req, res) => res.headersSent || handle(req, res))

  server.listen(port, () => {
    console.log(`🚀listening on ${port}`)
    console.log(`🚀graphql server ready at ${graphqlServer.graphqlPath}`)
  })
})()
