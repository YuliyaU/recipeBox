import C from '../constants';
import {combineReducers} from 'redux';

export const recipes = (
    state = {
        isRecipesFetching: false,
        recipes: []
    }, 
    action) => {
        switch (action.type) {
            case C.REQUEST_RECIPES:
                return {
                    isRecipesFetching: true
                };   
            case C.RECEIVE_RECIPES:
                return {
                    isRecipesFetching: false,
                    recipes: action.payload
                }
            default:
                return state;
        }
}

export default combineReducers({
    recipes
});