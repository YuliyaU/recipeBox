import {Ingredient} from './Ingredient';
import TiEdit from 'react-icons/lib/ti/edit';
import TiTrash from 'react-icons/lib/ti/trash';

export const Recipe = ({recipe, onRecipeDelete}) => {
    const handleDelete = (e, recipeId) => {
        onRecipeDelete(recipeId);
    }

    return (
        <li className="recipe-block">
            <div>{recipe.recipeName ? recipe.recipeName : 'Untitled Recipe'}</div>
            <ul>{recipe.ingredients ? recipe.ingredients.map((ingredient, index) => 
                    <Ingredient key={index}
                                ingredient={ingredient}/>) : 
                    'There is no ingredients'}</ul>
            <div className="recipe-controls">
                <span className="recipe-controls__item"><TiEdit /></span>
                <span className="recipe-controls__item"
                      onClick={e => handleDelete(e, recipe.id)}><TiTrash /></span>
            </div>
        </li>
    );
}