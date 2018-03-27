import {Recipe} from './Recipe';

export const RecipesList = ({recipes, onRecipeDelete, editRecipe}) => {
    var hasRecipes = false;
    if (recipes) {
        if (recipes.length === 0) {
            hasRecipes = false;
        } else {
            hasRecipes = true;
        }
    } else {
        hasRecipes = false;
    }

    return (
        <ul>
            {hasRecipes ? recipes.map(recipe => 
                <Recipe key={recipe.id}
                        recipe={recipe}
                        onRecipeDelete={onRecipeDelete}
                        editRecipe={editRecipe}/>
            ) : 'There is no recipes yet.'}
        </ul>
    );
} 