import C from './constants';
import {getRecipes, addRecipe} from './api/api'
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