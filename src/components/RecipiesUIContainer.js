import {RecipesList} from './RecipiesList';
import {AddRecipe} from './AddRecipe';

export const RecipiesUIContainer = ({recipies}) => {
    return (
        <div className="ui-container">
            <RecipesList recipies={recipies} />
            <AddRecipe />
        </div>
    );
} 

