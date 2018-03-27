import {Recipe} from './Recipe';

export const RecipesList = ({recipes, onRecipeDelete, editRecipe}) => {
    return (
        <ul>
            {recipes.length ? recipes.map(recipe => 
                <Recipe key={recipe.id}
                        recipe={recipe}
                        onRecipeDelete={onRecipeDelete}
                        editRecipe={editRecipe}/>
            ) : 'There is no recipes yet.'}
        </ul>
    );
} 