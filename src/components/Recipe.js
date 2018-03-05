export const Recipe = ({recipe}) => {
    return (
        <li>{recipe.recipeName ? recipe.recipeName : 'Untitled Recipe'}</li>
    );
}