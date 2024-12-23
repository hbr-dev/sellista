const { makeExecutableSchema } = require('@graphql-tools/schema');
const { ApolloServer }         = require('apollo-server-express');
const { mergeSchemas }         = require('@graphql-tools/schema');

const { resolvers } = require('./resolver');
const { typeDefs }  = require('./schema');

const fetch   = require('node-fetch');
const express = require('express');



const app = express();

const getTokenRole = (token) => {
  if (token === 'Bearer admin') return 'admin';
  if (token === 'Bearer user') return 'user';
  return null;
};

const server = new ApolloServer({
  schema: mergeSchemas({
    schemas: [
      makeExecutableSchema({ typeDefs: typeDefs.serviceA, resolvers: resolvers.serviceA }),
      makeExecutableSchema({ typeDefs: typeDefs.serviceB, resolvers: resolvers.serviceB }),
    ],
  }),
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    const role = getTokenRole(token);
    return { role };
  },
});

const startServer = async () => {
    await server.start();
    server.applyMiddleware({ app });
  
    app.listen({ port: 4000 }, () => {
        console.log(`Gateway ready at http://localhost:4000/graphql`);
    });
};
  
startServer().catch(err => {
    console.error('Error starting the server:', err);
});