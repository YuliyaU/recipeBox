import {Recipe} from './Recipe';

const RecipiesList = ({recipies}) => {
    return (
        <ul>
            {recipies.map(recipe => 
                <Recipe key={recipe.id}
                        recipe={recipe} />
            )}
        </ul>
    );
};
 
export default RecipiesList;

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