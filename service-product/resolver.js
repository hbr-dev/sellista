const products = [
    { id: '1', name: 'Product 1', price: 10.0, categoryId: '1' },
    { id: '2', name: 'Product 2', price: 20.0, categoryId: '2' },
];

const resolvers = {
    Query: {
        products: () => products,
    },
    Mutation: {
        updateProductName: (_, { id, name }, { role }) => {
            console.log(`service-product.js: [ID: ${id}, Name: ${name}, Role: ${role}]`);
            if (role !== 'admin') {
                throw new Error('Unauthorized');
            }
            const product = products.find(p => p.id === id);
            if (!product) throw new Error('Product not found');
            product.name = name;
            return product;
        },
    },
};

module.exports = { resolvers };