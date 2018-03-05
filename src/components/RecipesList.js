import {Recipe} from './Recipe';

export const RecipesList = ({recipies}) => {
    return (
        <ul>
            {recipies.map(recipe => 
                <Recipe key={recipe.id}
                        recipe={recipe}/>
            )}
        </ul>
    );
} 