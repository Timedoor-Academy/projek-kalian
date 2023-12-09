<template>
    <div class="header__navbar row justify-content-between align-items-center" style="width: 450px">
        <!-- Component SearchMenu -->
        <SearchMenu />
        <SignupMenu />
        <!-- Component SignupMenu -->
    </div>
</template>

<script setup>
import SearchMenu from './SearchMenu.vue';
import SignupMenu from './SignupMenu.vue';
</script>