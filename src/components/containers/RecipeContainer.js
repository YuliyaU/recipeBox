import Recipe from '../ui/Recipe';
import {connect} from 'react-redux';
import { openAddRecipeForm, expandRecipeInfo } from '../../actions';

const mapStateToProps = (state) => {
    return {
        isEditRecipeFormOpen: state.isEditRecipeFormOpen,
        isRecipeInfoExpanded: state.isRecipeInfoExpanded,
        recipe: this.props.recipe
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onEditRecipeBtnClick: () => {
            dispatch(openEditRecipeForm())
        },
        onRecipeTitleClick: () => {
            dispatch(toggleRecipeInfo())
        }
    };
}

const RecipeContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(Recipe);
 
export default RecipeContainer; 