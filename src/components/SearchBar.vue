<script setup>
import { ref, defineEmits } from "vue";
import { debounce } from "lodash";



const searchTerm = ref("");

const emit = defineEmits();

const debounceSearch = debounce(() => {
  emit("search", searchTerm.value);
}, 300);

</script>

<template>
  <div class="mb-4">
    <input
      type="text"
      v-model="searchTerm"
      @input="debounceSearch"
      placeholder="Search products..."
      class="border rounded p-2 w-full"
    />
  </div>
</template>
  