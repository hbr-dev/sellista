import express from 'express';
import dotenv from 'dotenv';

import C_SERVICE from './src/services/categoryService.js';
import P_SERVICE from './src/services/productService.js';
import AUTH_MIDDLEWARE from './src/middleware/auth.js';
import GETWAY from './src/getway/index.js';


dotenv.config();

const PORT = process.env.PORT || 4000;
const P_SERVICE_PORT = process.env.PRODUCT_SERVICE_PORT || 4001;
const C_SERVICE_PORT = process.env.CATEGORY_SERVICE_PORT || 4002;

const app = express();
app.use(AUTH_MIDDLEWARE);

P_SERVICE.start().then(res => {
    P_SERVICE.applyMiddleware({ app, path: '/graphql', cors: true });
    console.log(`Product service ready at http://localhost:${P_SERVICE_PORT}/graphql`);
});

C_SERVICE.start().then(res => {
    C_SERVICE.applyMiddleware({ app, path: '/graphql', cors: true });
    console.log(`Category service ready at http://localhost:${C_SERVICE_PORT}/graphql`);
});

GETWAY.start().then(res => {
    GETWAY.applyMiddleware({ app, path: '/graphql', cors: true });
    console.log(`Gateway ready at http://localhost:${PORT}/graphql`);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
