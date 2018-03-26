import C from './constants';
import { recipe } from './store/reducers';

export function addRecipe(id, recipeName, ingredients) {

    // Add app logic here...
    // For example: 
    // I can remove id from argumments and generate it here instead

    return {
        type: C.ADD_RECIPE,
        payload: {
            id,
            recipeName,
            ingredients
        }
    };
} 

export function deleteRecipe(id) {
    return {
        type: C.DELETE_RECIPE,
        payload: id
    };
}

export function setIsEditMode() {
    return {
        type: C.SET_ISEDITMODE,
        payload: true
    }
}