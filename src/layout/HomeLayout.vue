<script setup>
import Header from './Header.vue';
import Aside from './Aside.vue';
import Body from './Body.vue';

</script>

<template>
    <div class="layout-container">
        <Header/>
        <div class="grid grid-cols-7 gap-[2vh] m-[5vh] overflow-x-auto">
            <Aside class="col-start-2 col-span-1"/>
            <Body class="col-span-4"/>
        </div>
    </div>
</template>

<style scoped>
/* .wrapper {
    gap: 5vh;
    grid-template-columns: ;
} */
</style>