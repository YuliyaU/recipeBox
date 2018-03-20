import TiTimes from 'react-icons/lib/ti/times';

export const IngredientPill = ({ingredient, onDeleteIngredient}) => {
    return (
        <span className="added-ingredient">
            {ingredient.ingredientName} 
            <span className="added-ingredient__controls"
                  onClick={e => onDeleteIngredient(e, ingredient.ingredientId)}><TiTimes /></span>
        </span>
    );
}