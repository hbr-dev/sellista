import fetch from "node-fetch";



const products_service = 'http://localhost:4001/graphql';
const categories_service = 'http://localhost:4002/graphql';

const GETWAY_RESOLVERS = {
    Query: {
        products: async (_, { search }, { fetch }) => {
            const response = await fetch(products_service);
            const { data } = await response.json();
            let products = data.products;

            if (search) {
                products = products.filter(product =>
                    product.name.toLowerCase().includes(search.toLowerCase())
                );
            }

            return products.map(product => ({
                ...product,
                price: Math.round(product.price), // Round price for regular users
            }));
        },
        categories: async () => {
            const response = await fetch(categories_service);
            const { data } = await response.json();
            return data.categories;
        },
    }
};

export default GETWAY_RESOLVERS;