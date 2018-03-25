import C from '../constants';

export const recipe = (state = null, action) => 
    (action.type === C.ADD_RECIPE) ? 
        action.payload : state;

export const recipies = (state = [], action) => {
    switch(action.type) {
        case C.ADD_RECIPE:
            const hasRecipe = state.some(recipe => {
                String.toString(recipe.id) === String.toString(action.payload.id)
            });
            return (hasRecipe) ? state : 
                [
                    ...state,
                    recipe(null, action)
                ];
        case C.DELETE_RECIPE:
            return state.filter((recipe, i) => recipe.id !== action.payload);
        default:
            return state;
    }
}

export const isEditMode = (state = false, action) => 
    (action.type === C.SET_ISEDITMODE) ?
        action.payload : state;

export const addedIngredients = (state = [], action) => {
    switch(action.type) {
        case C.ADD_INGREDIENT:
            // Add condition if there is no such ingredient
            return [
                ...state,
                action.payload
            ];
        case C.DELETE_INGREDIENT:
            // Rethink the usage of Array.filter
            // Don't need to add id to an aaray if the expression is false
            // Check out DELETE_RECIPE reducer later
            return state.filter((ingredient, i) => 
                String.toString(ingredient['ingredientId']) !== String.toString(action.payload));
        default:
            return state;
    }
}