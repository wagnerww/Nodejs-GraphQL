const { GraphQLServer } = require("graphql-yoga");
const { mergeTypes } = require("merge-graphql-schemas");
const path = require("path");
const { merge } = require("lodash");
const typeDefs = require("./app/GraphQL/typeDefs");
const resolvers = require("./app/GraphQL/resolvers");
/*
const userResolver = require("./app/GraphQL/Resources/Users/resolvers");
const userEnderecosResolver = require("./app/GraphQL/Resources/UserEnderecos/resolvers");

const basePath = __dirname + "/app/GraphQL/Resources/";

const usersSchema = path.resolve(`${basePath}/Users`, "schema.graphql");
const userEnderecosSchema = path.resolve(
  `${basePath}/UserEnderecos`,
  "schema.graphql"
);

const types = [usersSchema, userEnderecosSchema];
const resolvers = merge(userResolver, userEnderecosResolver);
const typeDefs = mergeTypes(types, { all: true });
*/
const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start();
