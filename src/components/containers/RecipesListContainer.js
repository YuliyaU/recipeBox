import RecipesList from '../ui/RecipesList';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes,
        isRecipesFetching: state.isRecipesFetching
    };
};

const RecipesListContainer = connect(mapStateToProps)(RecipesList);
 
export default RecipesListContainer; 