import { gpl } from 'apollo-server-express';

const productSchema = gpl`
  type Product {
    id: ID!
    name: String!
    price: Float!
    categoryId: ID!
  }

  type Query {
    products: [Product!]!
  }

  type Mutation {
    updateProductName(id: ID!, name: String!): Product!
  }s
`;

export default productSchema;
