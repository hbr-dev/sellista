import { gql } from "apollo-server-express";

const PRODUCT_SCHEMA = gql`
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
  }
`;

export default PRODUCT_SCHEMA;
