const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolver');

const express = require('express');



const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4002 }, () => {
    console.log(`Service B ready at http://localhost:4002/graphql`);
  });
};

startServer().catch(err => {
  console.error('Error starting the server:', err);
});
