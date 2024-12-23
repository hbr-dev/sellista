<script setup>
import { ref, defineProps, defineEmits } from "vue";



const props = defineProps(["categories"]);
const emit = defineEmits();

const selectedCategory = ref("");
const minPrice = ref(null);
const maxPrice = ref(null);

const filter = () => {
  emit("filter", {
    category: selectedCategory.value,
    minPrice: minPrice.value,
    maxPrice: maxPrice.value,
  });
};
</script>

<template>
  <div class="flex space-x-4 mb-4">
    <select
      v-model="selectedCategory"
      @change="filter"
      class="border rounded p-2"
    >
      <option value="">All Categories</option>
      <option
        v-for="category in categories"
        :key="category.id"
        :value="category.id"
      >
        {{ category.name }}
      </option>
    </select>
    <input
      type="number"
      v-model.number="minPrice"
      placeholder="Min Price"
      class="border rounded p-2"
    />
    <input
      type="number"
      v-model.number="maxPrice"
      placeholder="Max Price"
      class="border rounded p-2"
    />
    <button @click="filter" class="bg-blue-500 text-white rounded p-2">
      Filter
    </button>
  </div>
</template>

  