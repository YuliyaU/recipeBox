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

export function deleteRecipe(id) {
    return del(`recepies/${id}`);
}

function get(url) {
    return fetch(baseUrl + url).then(onSuccess, onError);
}

// Can't call func delete since it's reserved word
function del(url) {
    const request = new Request(baseUrl + url, {
        method: 'DELETE'
    });
    return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}

function onError(error) {
    console.log(error);
}

