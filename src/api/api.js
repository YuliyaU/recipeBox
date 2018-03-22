// API Example
import 'whatwg-fetch';
import getBaseUrl from '../../buildScripts/baseUrl';

const baseUrl = getBaseUrl();

// When UI would be ready, separate on three branches:
// - Calls to mock data (DB)
// // - Redux + calls to mock data (DB) 
// - FCC: calls to local storage

export function getRecipies() {
    return fetch(baseUrl + 'recipies').then(onSuccess, onError);
}

export function deleteRecipe(id) {
    return fetch(baseUrl + `recipies/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(onSuccess, onError);
}

export function editRecipe(editedRecipe) {
    return fetch(baseUrl + `recipies/${editedRecipe.id}`, {
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
    console.log(error);
}

