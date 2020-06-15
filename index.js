const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')

const resolvers = require('./resolvers/index')
const schemaPath = './schema/index.graphql'

require('./database')

const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers
})

server.listen(3333).then(({ url }) => {
    console.log(`Executando em ${url}`)
})

/*
const express = require('express')
const routes = require('./routes/routes')
require('./database')

const app = express()

app.use(express.json())
app.use(routes)
app.listen(3333)
*/