import {Recipe} from './Recipe';

export const RecipesList = ({recipies, onRecipeDelete}) => {
    return (
        <ul>
            {recipies.map(recipe => 
                <Recipe key={recipe.id}
                        recipe={recipe}
                        onRecipeDelete={onRecipeDelete}/>
            )}
        </ul>
    );
} 