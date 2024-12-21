import { ApolloServer } from 'apollo-server-express';

import PRODUCT_RESOLVERS from '../resolvers/productResolvers.js';
import PRODUCT_SCHEMA from '../schemas/productSchema.js';



const P_SERVICE = new ApolloServer({
    typeDefs: PRODUCT_SCHEMA,
    resolvers: PRODUCT_RESOLVERS,
    context: ({req}) => {
        const token = req.headers.authorization || '';
        const role = token === 'Bearer admin' ? 'admin' : token === 'Bearer user' ? 'user' : null;
        return { role };
    }
});

export default P_SERVICE;



