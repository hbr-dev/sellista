const resolvers = {
    serviceA: {
        Query: {
            products: async (_, { search }, { role }) => {
                const response = await fetch('http://localhost:4001/graphql', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        query: `
                query {
                  products {
                    id
                    name
                    price
                    categoryId
                  }
                }
              `,
                    }),
                });
                const { data } = await response.json();
                let products = data.products;

                // Filtrage par nom de produit ou nom de catégorie
                if (search) {
                    const categoryResponse = await fetch('http://localhost:4002/graphql', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            query: `
                  query {
                    categories {
                      id
                      name
                    }
                  }
                `,
                        }),
                    });
                    const { data: categoryData } = await categoryResponse.json();
                    const categoryNames = categoryData.categories.map(cat => cat.name);

                    products = products.filter(product =>
                        product.name.includes(search) ||
                        categoryNames.includes(search)
                    );
                }

                // Autorisation au niveau des champs
                if (role === 'user') {
                    products = products.map(product => ({
                        ...product,
                        price: Math.round(product.price), // Arrondi pour les utilisateurs
                    }));
                }

                return products;
            },
        },
        Mutation: {
            updateProductName: async (_, { id, name }, { role }) => {
                console.log(`gateway.js: [ID: ${id}, Name: ${name}, Role: ${role}]`);
                if (role !== 'admin') {
                    throw new Error('Unauthorized');
                }
                const response = await fetch('http://localhost:4001/graphql', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${role}`
                    },
                    body: JSON.stringify({
                        query: `
                mutation {
                  updateProductName(id: "${id}", name: "${name}") {
                    id
                    name
                    price
                    categoryId
                  }
                }
              `,
                    }),
                });

                const { data } = await response.json();
                return data.updateProductName;
            },
        },
    },
    serviceB: {
        Query: {
            categories: async () => {
                const response = await fetch('http://localhost:4002/graphql', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        query: `
                query {
                  categories {
                    id
                    name
                  }
                }
              `,
                    }),
                });
                const { data } = await response.json();
                return data.categories;
            },
        },
    },
};

module.exports = { resolvers };