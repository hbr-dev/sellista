<script setup>
import { computed } from 'vue';

const props = defineProps({
    checked: {
        type: Boolean,
        required: true,
    }
});

const icon = computed(() => {
    return props.checked ? 'fa-regular fa-square-check' : 'fa-regular fa-square';
});
</script>

<template>
    <font-awesome-icon :icon="icon" />
</template>

<style scoped>
</style>
