import 'whatwg-fetch';
import getBaseUrl from '../buildScripts/baseUrl';
import C from './constants';
// import { recipe } from './store/reducers';

const baseUrl = getBaseUrl();

export function requestRecipes() {
    return {
        type: C.REQUEST_RECIPES
    }
}

export function receiveRecipes(json) {
    return {
        type: C.RECEIVE_RECIPES,
        payload: json
    }
}

export function fetchRecipes() {
    return dispatch => {
        dispatch(requestRecipes());
        return fetch(baseUrl + 'recipes')
            .then(
                response => response.json(), 
                err => console.log(err))
            .then(
                json => dispatch(receiveRecipes(json)))
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