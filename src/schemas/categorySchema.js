import { gql } from "apollo-server-express";



const CATEGORY_SCHEMA = gql`
  type Category {
    id: ID!
    name: String!
  }

  type Query {
    categories: [Category!]!
  }
`;

export default CATEGORY_SCHEMA;
