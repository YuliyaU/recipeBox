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
        case C.UPDATE_RECIPE:
            // Updates a recipe and leaves it on its place
            var newArr = [...state];
            for (var i = 0; i < newArr.length; i += 1) {
                if (newArr[i].id === action.payload.id) {
                    newArr[i] = action.payload;
                }
            }
            return newArr;

            // Puts edited recipe at the end of array
            // Usefull when the recipe's update date is displayed 
            // And there is a sorting by this date 
            // return [
            //     ...state.filter(recipe => 
            //         recipe.id !== action.payload.id
            //     ),
            //     action.payload
            // ];

        case C.DELETE_RECIPE:
            return [
                ...state.filter(recipe => recipe.id !== action.payload)
            ];
        default:
            return state;
    }
};

export const isRecipesFetching = (state = false, action) => {
    switch (action.type) {
        case C.REQUEST_RECIPES:
            return true;   
        case C.RECEIVE_RECIPES:
            return false;
        default:
            return state;
    }
};

export const isRecipePosting = (state=false, action) => {
    switch (action.type) {
        case C.POSTING_RECIPE:
            return true;   
        case C.CREATE_RECIPE:
            return false;
        default:
            return state;
    }
};

export const isRecipePutting = (state=false, action) => {
    switch (action.type) {
        case C.PUTTING_RECIPE:
            return true;   
        case C.UPDATE_RECIPE:
            return false;
        default:
            return state;
    }
};

export const isRecipeDeleting = (state=false, action) => {
    switch (action.type) {
        case C.DELETING_RECIPE:
            return true;   
        case C.DELETE_RECIPE:
            return false;
        default:
            return state;
    }
};

export const isAddRecipeFormOpen = (state = false, action) => {
    switch (action.type) {
        case C.OPEN_ADD_RECIPE_FORM:
        case C.CLOSE_ADD_RECIPE_FORM:
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    recipes,
    isRecipesFetching,
    isAddRecipeFormOpen,
    isRecipePosting,
    isRecipePutting,
    isRecipeDeleting
});