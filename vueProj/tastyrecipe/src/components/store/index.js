import {
    createStore
} from "vuex";
import recipe from "./recipe.js";

export const store = createStore({
    modules: {
        recipe,
    },
});
