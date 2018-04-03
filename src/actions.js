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