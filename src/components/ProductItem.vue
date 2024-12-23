<script setup>
import { defineProps, defineEmits } from "vue";

// Define props
const props = defineProps({
  product: Object,
  isAdmin: Boolean,
});

// Define emits
const emit = defineEmits();

// Edit product method
const editProduct = () => {
  const newName = prompt("Enter new product name:", props.product.name);
  if (newName) {
    emit("update-product", { id: props.product.id, name: newName });
  }
};
</script>

<template>
  <div class="border rounded p-4 mb-4">
    <h3 class="text-lg font-bold">{{ product.name }}</h3>
    <p>Price: {{ isAdmin ? product.price : Math.round(product.price) }}</p>
    <!-- <p>Category: {{ product.category.name }}</p> -->
    <p>Category: {{ product.categoryId }}</p>
    <button
      v-if="isAdmin"
      @click="editProduct"
      class="bg-yellow-500 text-white rounded p-2"
    >
      Edit
    </button>
  </div>
</template>
  
<style scoped>
</style>
  