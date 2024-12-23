<script setup>
import SearchIcon from '../icons/SearchIcon.vue';
import UserIcon from '../icons/UserIcon.vue';
</script>

<template>
    <div class="bg-white flex items-center justify-between p-4">
        <div class="text-black font-jostRegular text-base cursor-pointer">
            Home
        </div>
        <div>
            <img class="h-10" src="@/assets/imgs/logo.svg" alt="Logo" />
        </div>
        <div class="flex items-center">
            <SearchIcon class="size-5 cursor-pointer" />
            <div class="h-5 w-5"></div>
            <UserIcon class="size-5 cursor-pointer" />
        </div>
    </div>
</template>

<style scoped>
/* @import "./style.css"; */
</style>
