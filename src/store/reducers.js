import C from '../constants';
import {combineReducers} from 'redux';

export const recipes = (state = [], action) => {
    switch(action.type) {
        case C.GET_RECIPES:
            // Set state
            return /* recipes ? recipes : state*/;        
        default:
            return state;
    }
}

export default combineReducers({
    recipes
});