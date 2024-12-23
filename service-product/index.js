const { ApolloServer } = require('apollo-server-express');

const { resolvers } = require('./resolver');
const { typeDefs } = require('./schema');

const express = require('express');



const app = express();

const getTokenRole = (token) => {
  if (token === 'Bearer admin') return 'admin';
  if (token === 'Bearer user') return 'user';
  return null;
};

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    const role = getTokenRole(token);
    return { role };
  }
});

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4001 }, () => {
    console.log(`Service A ready at http://localhost:4001/graphql`);
  });
};

startServer().catch(err => {
  console.error('Error starting the server:', err);
});
