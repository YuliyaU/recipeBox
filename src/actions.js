import C from './constants';
import * as recipesApi from './api/api';

export function requestRecipes() {
    return {
        type: C.REQUEST_RECIPES
    };
}

export function receiveRecipes(recipes) {
    return {
        type: C.RECEIVE_RECIPES,
        payload: recipes
    };
}

/* export function throwRequestError() {
    return {
        action: C.REQUEST_RECIPE_ERROR,
        payload: true
    };
}*/

export function fetchRecipes() {
    return dispatch => {
        dispatch(requestRecipes());
        return recipesApi.getRecipes().then(recipes => { 
            dispatch(receiveRecipes(recipes));
        }).catch(err => {
            // Here you should dispatch(trowRequetsError)
            // and manage the msg of a failed request in the components.
            // Don't forget to return C.REQUEST_RECIPE_ERROR to false
            // after time interval or when the request became successful
            throw err;
        });
    };
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
            dispatch(createRecipe(recipe));
        }).catch(err => {
            throw err;
        });
    };
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
            dispatch(updateRecipe(recipe));
        }).catch(err => {
            throw err;
        });
    };
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
        return recipesApi.deleteRecipe(recipeId).then(() => {
            dispatch(removeRecipe(recipeId));
        }).catch(err => {
            throw err;
        });
    };
}