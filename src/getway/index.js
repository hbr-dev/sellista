import { ApolloServer } from 'apollo-server-express';

import GETWAY_RESOLVERS from '../resolvers/getwayResolvers.js';
import GETWAY_SCHEMA from '../schemas/getwaySchema.js';



const GETWAY = new ApolloServer({
    typeDefs: GETWAY_SCHEMA,
    resolvers: GETWAY_RESOLVERS,
    context: ({req}) => {
        const token = req.headers.authorization || '';
        const role = token === 'Bearer admin' ? 'admin' : token === 'Bearer user' ? 'user' : null;
        return { role };
    }
});

export default GETWAY;



