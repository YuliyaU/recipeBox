import {Ingredient} from './Ingredient';

export const Recipe = ({recipe}) => {
    return (
        <li className="recipe-block">
            <div>{recipe.recipeName ? recipe.recipeName : 'Untitled Recipe'}</div>
            <ul>{recipe.ingredients ? recipe.ingredients.map((ingredient, index) => 
                    <Ingredient key={index}
                                ingredient={ingredient}/>) : 
                    'There is no ingredients'}</ul>
        </li>
    );
}