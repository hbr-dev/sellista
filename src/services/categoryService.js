import gql from "graphql-tag";
import { apolloClient } from "./apolloClient";

const GET_CATEGORIES = gql`
  query {
    categories {
      id
      name
    }
  }
`;

export const fetchCategories = async () => {
  try {
    const { data } = await apolloClient.query({
      query: GET_CATEGORIES,
    });
    return data.categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};
