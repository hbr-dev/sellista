import gql from "graphql-tag";
import { apolloClient } from "./apolloClient";

const GET_PRODUCTS = gql`
  query {
    products {
      id
      name
      price
      categoryId
    }
  }
`;

export const fetchProducts = async () => {
  try {
    const { data } = await apolloClient.query({
      query: GET_PRODUCTS,
    });
    return data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
