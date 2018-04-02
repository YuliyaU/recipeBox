import {Recipe} from './Recipe';

const RecipesList = ({recipes}) => {
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
                        recipe={recipe} />
            ) : 'There is no recipes. Add some.'}
        </ul>
    );
};
 
export default RecipesList;

// export const RecipesList = ({recipies, onRecipeDelete, editRecipe}) => {
//     return (
//         <ul>
//             {recipies.map(recipe => 
//                 <Recipe key={recipe.id}
//                         recipe={recipe}
//                         onRecipeDelete={onRecipeDelete}
//                         editRecipe={editRecipe}/>
//             )}
//         </ul>
//     );
// } 