const { GraphQLServer } = require("graphql-yoga");
const typeDefs = require("./app/GraphQL/typeDefs");
const resolvers = require("./app/GraphQL/resolvers");

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start();
