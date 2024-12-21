import { ApolloServer } from 'apollo-server-express';

import CATEGORY_SCHEMA from '../schemas/categorySchema.js';
import CATEGORY_RESOLVERS from '../resolvers/categoryResolvers.js';



const C_SERVICE = new ApolloServer({
    typeDefs: CATEGORY_SCHEMA,
    resolvers: CATEGORY_RESOLVERS
});

export default C_SERVICE;



