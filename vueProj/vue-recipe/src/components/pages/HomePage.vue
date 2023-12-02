<template>
    <div class="container my-5 py-5">
        <div class="recipe__title text-center">
            <h2 class="display-4">All Recipes</h2>
            <p class="lead">
                Find and share everyday cooking inspiration on All recipes. Discover
                recipes, cooks, videos, and how-tos based on the food you love and the
                friends you follow.
            </p>
        </div>

        <!-- Search and Filter -->
        <div class="recipe__search-filter row">
            <!-- <div class="col-md-6 mb-3">
                <input type="text" class="form-control" v-model="searchQuery" placeholder="Search recipes..." />
            </div> -->
            <div class="col-md-12 mb-3">
                <select class="form-select" v-model="selectedCategory" @change="filterRecipes">
                    <option value="all">All Categories</option>
                    <option v-for="category in uniqueCategories" :key="category" :value="category">
                        {{ category }}
                    </option>
                </select>
            </div>
        </div>
        
        <!-- Recipe List Component -->
        <RecipeList :recipes="filteredRecipes" v-if="recipeListStatus" />
    </div>
</template>

<style scoped>
/* Add custom styles here if needed */
</style>

<script setup>
import RecipeList from "../recipe/RecipeList.vue";
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const recipeListStatus = ref(false);
const recipeList = ref([]);
const searchQuery = ref("");
const selectedCategory = ref("all");

onMounted(async () => {
    try {
        await store.dispatch("recipe/getRecipeData");
        recipeListStatus.value = true;
        recipeList.value = store.state.recipe.recipes;
    } catch (error) {
        console.error("Error fetching recipe data:", error);
        // Handle the error appropriately, e.g., show an error message to the user
    }
});

const uniqueCategories = computed(() => {
    return Array.from(new Set(recipeList.value.map((recipe) => recipe.category)));
});

const filteredRecipes = computed(() => {
    let filtered = recipeList.value;

    // Filter by search query
    // if (searchQuery.value.trim() !== "") {
    //     const query = searchQuery.value.toLowerCase();
    //     filtered = filtered.filter((recipe) =>
    //         recipe.title.toLowerCase().includes(query)
    //     );
    // }

    // Filter by category
    if (selectedCategory.value !== "all") {
        filtered = filtered.filter(
            (recipe) => recipe.category === selectedCategory.value
        );
    }

    return filtered;
});

const filterRecipes = () => {
    // Update the filtered recipes based on search and category filters
};
</script>
