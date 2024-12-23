<script setup>
import TickIcon from '@/components/icons/TickIcon.vue';
import RangeSlider from '@/components/inputs/RangeSlider.vue';
import { fetchCategories } from '@/services/categoryService';
import { onMounted, ref } from 'vue';
import { useProductStore } from '@/stores/productStore';

const productStore = useProductStore();

const categories = ref([]);
const checkedCategory = ref(null);

const applyPriceFilter = (prices) => {
    const minPrice = Number(prices.minPrice);
    const maxPrice = Number(prices.maxPrice);
    productStore.setPriceRangeFilter(minPrice, maxPrice);
}

const applyCategoryFilter = (category) => {
    if (checkedCategory.value === category.id) {
        checkedCategory.value = null;
        productStore.setCategoryFilter(null);
    } else {
        checkedCategory.value = category.id;
        productStore.setCategoryFilter(category.id);
    }
}

onMounted(async () => {
  try {
    categories.value = await fetchCategories();
    productStore.setCategories(categories.value);
    console.log(productStore.categories);
  } catch (error) {
    console.error('Failed to fetch categories:', error);
  }
});
</script>

<template>
    <div class="aside-container">
        <div class="mb-[5vh]">
            <div class="text-black font-jostBold text-xl uppercase pb-[1vh] border-b-[2px] border-gray-100 border-h">Product Categories</div>
            <div class="p-[1vh] px-[2vh]">
                <div v-for="category in categories" :key="category.id" @click="applyCategoryFilter(category)" class="flex items-center cursor-pointer pb-[1vh]">
                    <div class="mr-[1vh]">
                        <TickIcon :checked="category.id == checkedCategory"/>
                    </div>
                    <div class="text-dim-gray font-jostMedium text-base">
                        {{ category.name }}
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-[5vh]">
            <div class="text-black font-jostBold text-xl uppercase pb-[1vh] border-b-[2px] border-gray-100">Filter By</div>
            <div class="p-[1vh] px-[2vh]">
                <div class="text-black font-jostBold text-lg">
                    Price
                </div>
                <div class="text-dim-gray font-jostRegular text-base mt-[1vh] mb-[1vh]">
                    TND{{ productStore.filters.priceRange[0] }} - TND{{ productStore.filters.priceRange[1] }}
                </div>
                <div class="mt-[2vh] mb-[2vh]">
                    <RangeSlider 
                        :default-max="productStore.filters.priceRange[1]"
                        :default-min="productStore.filters.priceRange[0]"
                        @priceFilter="applyPriceFilter"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
