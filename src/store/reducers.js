import C from '../constants';
import {combineReducers} from 'redux';

export const recipes = (state = [], action) => {
    switch (action.type) { 
        case C.RECEIVE_RECIPES:
            return [
                ...action.payload
            ];
        default:
            return state;
    }
}

export const isRecipesFetching = (state = false, action) => {
    switch (action.type) {
        case C.REQUEST_RECIPES:
            return true;   
        case C.RECEIVE_RECIPES:
            return false;
        default:
            return state;
    }
}

export const isAddRecipeFormOpen = (state = false, action) => {
    switch (action.type) {
        case C.OPEN_ADD_RECIPE_FORM:
        case C.CLOSE_ADD_RECIPE_FORM:
            return action.payload;
        default:
            return state;
    }
}

// export const recipes = (
//     state = {
//         isRecipesFetching: false,
//         recipes: []
//     }, 
//     action) => {
//         switch (action.type) {
//             case C.REQUEST_RECIPES:
//                 return {
//                     isRecipesFetching: true
//                 };   
//             case C.RECEIVE_RECIPES:
//                 return {
//                     isRecipesFetching: false,
//                     recipes: action.payload
//                 }
//             default:
//                 return state;
//         }
// }

export default combineReducers({
    recipes,
    isRecipesFetching,
    isAddRecipeFormOpen
});

// export default combineReducers({
//     recipes
// });