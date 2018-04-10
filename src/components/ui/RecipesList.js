import Recipe from './Recipe';
import {Loading} from './Loading';

const RecipesList = ({recipes, isRecipesFetching}) => {
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
            {isRecipesFetching && <Loading />}            
            {hasRecipes ? recipes.map(recipe => 
                <Recipe key={recipe.id}
                        recipe={recipe} />
            ) : msg}
        </ul>
    );
};
 
export default RecipesList;