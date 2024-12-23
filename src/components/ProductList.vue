<script setup>
import { useQuery, useMutation } from "@vue/apollo-composable";
import { ref, watch, onMounted } from "vue";

import ProductItem from "./ProductItem.vue";
import SearchBar from "./SearchBar.vue";
import Filters from "./Filters.vue";
import gql from "graphql-tag";

// GraphQL queries and mutations
const GET_PRODUCTS = gql`
  query GetProducts($search: String) {
    products(search: $search) {
      id
      name
      price
      categoryId
    }
  }
`;

const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
    }
  }
`;

const UPDATE_PRODUCT_NAME = gql`
  mutation UpdateProductName($id: ID!, $name: String!) {
    updateProductName(id: $id, name: $name) {
      id
      name
      price
      categoryId
    }
  }
`;

// Reactive state
const searchTerm = ref("");
const categories = ref([]);
const filteredProducts = ref([]);
const isAdmin = ref(true);
const loading = ref(true);

// Apollo queries
const { result: productsResult, loading: productsLoading } = useQuery(
  GET_PRODUCTS,
  { search: searchTerm.value }
);
const { result: categoriesResult } = useQuery(GET_CATEGORIES);
const { mutate: updateProductNameMutation } = useMutation(UPDATE_PRODUCT_NAME);

// Watch for changes in products and categories
watch(
  productsResult,
  (newValue) => {
    filteredProducts.value = newValue?.products || [];
    loading.value = false;
  },
  { immediate: true }
);

watch(
  categoriesResult,
  (newValue) => {
    categories.value = newValue?.categories || [];
  },
  { immediate: true }
);

// Methods
const handleSearch = (searchTermValue) => {
  console.log(searchTermValue);
  searchTerm.value = searchTermValue;
  filterProducts();
};

const handleFilter = (filters) => {
  filterProducts(filters);
};

const filterProducts = (filters = {}) => {
  const { category, minPrice, maxPrice } = filters;
  filteredProducts.value = productsResult.value.products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.value.toLowerCase());
    const matchesCategory = category ? product.category.id === category : true;
    const matchesMinPrice =
      minPrice !== null ? product.price >= minPrice : true;
    const matchesMaxPrice =
      maxPrice !== null ? product.price <= maxPrice : true;
    return (
      matchesSearch && matchesCategory && matchesMinPrice && matchesMaxPrice
    );
  });
};

const updateProductName = async ({ id, name }) => {
  try {
    await updateProductNameMutation({ variables: { id, name } });
    // Optionally, you can refetch products or update the local stat
    console.log('Product updated:', response.data.updateProduct);
  } catch (error) {
    console.error("Error updating product name:", error);
  }
};
</script>

<template>
  <div>
    <SearchBar @search="handleSearch" />
    <Filters :categories="categories" @filter="handleFilter" />
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-else>
      <ProductItem
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        :isAdmin="isAdmin"
        @update-product="updateProductName"
      />
      <div v-if="filteredProducts.length === 0" class="text-center">
        No products found.
      </div>
    </div>
  </div>
</template>

<style scoped></style>