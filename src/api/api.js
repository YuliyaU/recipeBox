// API Example
import 'whatwg-fetch';
import getBaseUrl from '../../buildScripts/baseUrl';

const baseUrl = getBaseUrl();

// When UI would be ready, separate on three branches:
// - Calls to mock data (DB)
// // - Redux + calls to mock data (DB) 
// - FCC: calls to local storage

export function getRecipies() {
    return get('recipies');
}

// export function deleteRecipe(id) {
//     return del(`recipies/${id}`);
// }

export function editRecipe(recipe) {
    return edRec(`recipies/${recipe.id}`, recipe);
}

function get(url) {
    return fetch(baseUrl + url).then(onSuccess, onError);
}

export function deleteRecipe(id) {
    return fetch(baseUrl + `recipies/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(onSuccess, onError);
}

// Can't call func delete since it's reserved word
// function del(url) {
//     // const request = new Request(baseUrl + url, {
//     //     method: 'DELETE'
//     // });
//     // return fetch(request).then(onSuccess, onError);
//     return fetch(baseUrl + url, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }).then(onSuccess, onError);
// }

function edRec(url, editedRecipe) {
    return fetch(baseUrl + url, {
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

