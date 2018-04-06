import C from './constants';
import * as recipesApi from './api/api'

export function requestRecipes() {
    return {
        type: C.REQUEST_RECIPES
    }
}

export function receiveRecipes(recipes) {
    return {
        type: C.RECEIVE_RECIPES,
        payload: recipes
    }
}

export function fetchRecipes() {
    return dispatch => {
        dispatch(requestRecipes());
        return recipesApi.getRecipes().then(recipes => { 
            dispatch(receiveRecipes(recipes))
        })
    }      
}

export function openAddRecipeForm() {
    return {
        type: C.OPEN_ADD_RECIPE_FORM,
        payload: true
    };
}

export function closeAddRecipeForm() {
    return {
        type: C.CLOSE_ADD_RECIPE_FORM,
        payload: false
    };
}

export function postingRecipe() {
    return {
        type: C.POSTING_RECIPE
    };
}

export function createRecipe(recipe) {
    return {
        type: C.CREATE_RECIPE,
        payload: recipe
    };
}

export function saveRecipe(recipe) {    
    return dispatch => {
        dispatch(postingRecipe());
        return recipesApi.addRecipe(recipe).then(recipe => {
            dispatch(createRecipe(recipe))
        }).catch(err => {
            console.log(err)
        });
    }
}

export function puttingRecipe() {
    return {
        type: C.PUTTING_RECIPE
    };
}

export function updateRecipe(recipe) {
    return {
        type: C.UPDATE_RECIPE,
        payload: recipe
    };
}

export function putRecipe(recipe) {    
    return dispatch => {
        dispatch(puttingRecipe());
        return recipesApi.editRecipe(recipe).then(recipe => {
            dispatch(updateRecipe(recipe))
        }).catch(err => {
            console.log(err)
        });
    }
}

export function deletingRecipe() {
    return {
        type: C.DELETING_RECIPE
    };
}

export function removeRecipe(recipeId) {
    return {
        type: C.DELETE_RECIPE,
        payload: recipeId
    };
}

export function deleteRecipe(recipeId) {    
    return dispatch => {
        dispatch(deletingRecipe());
        return recipesApi.deleteRecipe(recipeId).then(recipe => {
            dispatch(removeRecipe(recipeId))
        }).catch(err => {
            console.log(err)
        });
    }
}