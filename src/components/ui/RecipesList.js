import Recipe from './Recipe';
import {Loading} from './Loading';

const RecipesList = ({recipes, isRecipesFetching, isRecipePosting}) => {
    var hasRecipes = false, msg = '';    
    
    if (recipes) {
        if (recipes.length === 0) {
            hasRecipes = false;
        } else {
            hasRecipes = true;
        }        
    } else {
        hasRecipes = false;
    }

    if (isRecipesFetching) {
        msg = '';
    } else {
        msg = 'There is no recipes. Add some.';
    }

    return (
        <ul>                       
            {hasRecipes ? recipes.map(recipe => 
                <Recipe key={recipe.id}
                        recipe={recipe} />
            ) : msg}
            {isRecipesFetching ? <Loading text="Loading..." /> : 
            isRecipePosting && <Loading text="Saving the recipe..." />} 
        </ul>
    );
};
 
export default RecipesList;