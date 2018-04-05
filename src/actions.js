import C from './constants';
import {getRecipes, addRecipe, editRecipe, deleteRecipe} from './api/api'
// import { recipe } from './store/reducers';

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
        return getRecipes().then(recipes => { 
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
        return addRecipe(recipe).then(recipe => {
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
        return editRecipe(recipe).then(recipe => {
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

export function dropRecipe(recipeId) {
    return {
        type: C.DELETE_RECIPE,
        payload: recipeId
    };
}

export function removeRecipe(recipeId) {    
    return dispatch => {
        dispatch(deletingRecipe());
        return deleteRecipe(recipeId).then(recipe => {
            dispatch(dropRecipe(recipeId))
        }).catch(err => {
            console.log(err)
        });
    }
}