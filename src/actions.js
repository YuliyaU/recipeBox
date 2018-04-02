import C from './constants';
import { recipe } from './store/reducers';

export function getRecipes() {
    return {
        type: C.GET_RECIPES
    }
}