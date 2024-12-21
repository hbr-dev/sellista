import { gql } from "apollo-server-express";

const GETWAY_SCHEMA = gql`
    type Product {
      id: ID!
      name: String!
      price: Float!
      categoryId: ID!
      category: Category
    }

    type Category {
      id: ID!
      name: String!
    }

    type Query {
      products(search: String): [Product!]!
      categories: [Category!]!
    }
`;

export default GETWAY_SCHEMA;
