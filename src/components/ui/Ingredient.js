export const Ingredient = ({ingredient}) => {
    return (
        <li>{ingredient.ingredientName ? ingredient.ingredientName : 
                'Untitled Ingredient'}</li>
    );
};