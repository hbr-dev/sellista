<script setup>
import { fetchProducts } from '@/services/productService';
import { computed, onMounted, ref } from 'vue';
import { useProductStore } from '@/stores/productStore';

const products = ref([]);
const productStore = useProductStore();

const getCategoryName = (categoryId) => {
  const category = productStore.categories.find(cat => cat.id === categoryId);
  return category ? category.name : 'Unknown Category';
};

const filteredProducts = computed(() => {
  return products.value.filter(product => {
    const matchesCategory = !productStore.filters.categoryId || product.categoryId === productStore.filters.categoryId;
    const matchesPrice = product.price >= productStore.filters.priceRange[0] && product.price <= productStore.filters.priceRange[1];
    return matchesCategory && matchesPrice;
  });
});

onMounted(async () => {
  try {
    products.value = await fetchProducts();
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
});
</script>

<template>
    <div class="grid grid-cols-4 gap-[2vh]">
        <div v-for="product in filteredProducts" :key="product.id" class="col-span-1 h-[35vh] transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-500/50 rounded-lg cursor-pointer">
            <div class="bg-gray-100 h-3/5 w-full"></div>
            <div class="h-[2vh]"></div>
            <div class="h-2/5 w-full px-[1vh]">
                <div class="text-gray-400 font-jostRegular text-sm">{{ getCategoryName(product.categoryId) }}</div>
                <div class="text-dim-gray font-jostMedium text-xl pt-[1vh] pb-[1vh]">{{ product.name }}</div>
                <div class="text-red-500 font-jostBold text-sm">TND{{ product.price }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
