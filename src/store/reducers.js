import C from '../constants';
import {combineReducers} from 'redux';

export const recipes = (state = [], action) => {
    switch (action.type) { 
        case C.RECEIVE_RECIPES:
            return action.payload;
        case C.CREATE_RECIPE:
            return [
                ...state,
                action.payload
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

export const isRecipePosting = (state=false, action) => {
    switch (action.type) {
        case C.POSTING_RECIPE:
            return true;   
        case C.SAVE_RECIPE:
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

export default combineReducers({
    recipes,
    isRecipesFetching,
    isAddRecipeFormOpen,
    isRecipePosting
});