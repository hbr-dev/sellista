const categories = [
    { id: '1', name: 'Category 1' },
    { id: '2', name: 'Category 2' },
];

const resolvers = {
    Query: {
        categories: () => categories,
    },
};

module.exports = { resolvers };