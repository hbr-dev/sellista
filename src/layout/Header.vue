<script setup>
import BreadCrumb from '@/components/navigation/BreadCrumb.vue';
import NavMenu from '@/components/navigation/Menu.vue';

</script>

<template>
    <div class="header-container">
        <NavMenu class="h-2/5"/>
        <BreadCrumb class="h-3/5"/>
    </div>
</template>

<style scoped>
.header-container {
    height: 20vh;
}
</style>