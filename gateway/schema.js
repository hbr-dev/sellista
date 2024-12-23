const { gql } = require('apollo-server-express');



const typeDefs = {
  serviceA: gql`
    type Product {
      id: ID!
      name: String!
      price: Float!
      categoryId: ID!
    }

    type Query {
      products(search: String): [Product!]!
    }

    type Mutation {
      updateProductName(id: ID!, name: String!): Product!
    }
  `,
  serviceB: gql`
    type Category {
      id: ID!
      name: String!
    }

    type Query {
      categories: [Category!]!
    }
  `,
};

module.exports = { typeDefs };
