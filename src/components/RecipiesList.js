import {Recipe} from './Recipe';

export const RecipesList = ({recipies, onRecipeDelete, editRecipe}) => {
    return (
        <ul>
            {recipies.map(recipe => 
                <Recipe key={recipe.id}
                        recipe={recipe}
                        onRecipeDelete={onRecipeDelete}
                        editRecipe={editRecipe}/>
            )}
        </ul>
    );
} 