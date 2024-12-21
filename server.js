// server.js
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './src/graphql/index.js'; // Adjust the import based on your structure

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

// Middleware
app.use(express.json());

// Apply Apollo GraphQL middleware
server.applyMiddleware({ app });

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
});
