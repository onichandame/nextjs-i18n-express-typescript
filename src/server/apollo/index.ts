import { ApolloServer } from "apollo-server-express"
import { buildSchema } from "type-graphql"
import { Express } from "express"

import { TestResolver } from "./resolver"

export const apollo = async (app: Express) => {
  const server = new ApolloServer({
    schema: await buildSchema({
      validate: false,
      resolvers: [TestResolver]
    })
  })
  server.applyMiddleware({ app, path: "/__graphql", cors: false })
  return server
}
