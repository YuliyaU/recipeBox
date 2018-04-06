// API Example
import 'whatwg-fetch';
import getBaseUrl from '../../buildScripts/baseUrl';

const baseUrl = getBaseUrl();

export function getRecipes() {
    return fetch(baseUrl + 'recipes').then(onSuccess, onError);
}

export function addRecipe(recipe) {
    return fetch(baseUrl + 'recipes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: recipe.id,
            recipeName: recipe.recipeName,
            ingredients: recipe.ingredients
        })
    }).then(onSuccess, onError);
}

export function deleteRecipe(id) {
    return fetch(baseUrl + `recipes/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(onSuccess, onError);
}

export function editRecipe(editedRecipe) {
    return fetch(baseUrl + `recipes/${editedRecipe.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: editedRecipe.id,
            recipeName: editedRecipe.recipeName,
            ingredients: editedRecipe.ingredients
        })
    }).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}

function onError(error) {
    throw error;
}

