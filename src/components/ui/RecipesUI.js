import RecipesListContainer from '../containers/RecipesListContainer';
import AddRecipeContainer from '../containers/AddRecipeContainer';

const RecipesUIContainer = () => (
    <div className="ui-container">
        <RecipesListContainer />
        <AddRecipeContainer />
    </div>
);

export default RecipesUIContainer;

