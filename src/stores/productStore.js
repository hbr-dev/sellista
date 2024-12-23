import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProductStore = defineStore('product', () => {
    const filters = ref({
        categoryId: null,
        priceRange: [1, 1000],
    });

    const categories = ref([]);

    const setCategoryFilter = (categoryId) => {
        filters.value.categoryId = categoryId;
    };

    const setPriceRangeFilter = (min, max) => {
        filters.value.priceRange = [min, max];
    };

    const setCategories = (names) => {
        categories.value = names;
    };

    return {
        filters,
        categories,
        setCategoryFilter,
        setPriceRangeFilter,
        setCategories,
    };
});
