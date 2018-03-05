import {RecipesList} from './RecipiesList';
import {AddRecipe} from './AddRecipe';

export const RecipiesUIContainer = ({recipies}) => {
    return (
        <div>
            <RecipesList recipies={recipies} />
            <AddRecipe />
        </div>
    );
} 

