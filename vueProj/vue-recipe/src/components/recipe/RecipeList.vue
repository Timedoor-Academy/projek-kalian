<template>
    <div class="recipe__list-recipe row">
        <!-- Recipe Item Code -->
        <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </div>
</template>

<script setup>
    import RecipeCard from './RecipeCard.vue';

    defineProps({
        recipes: {
            type: Array
        }
    })
</script>