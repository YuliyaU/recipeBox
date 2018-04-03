import AddRecipe from '../ui/AddRecipe';
import {connect} from 'react-redux';
import { openAddRecipeForm } from '../../actions';

const mapStateToProps = (state) => {
    return {
        isAddRecipeFormOpen: state.isAddRecipeFormOpen
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddRecipeBtnClick: () => {
            dispatch(openAddRecipeForm())
        }
    };
}

const AddRecipeContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(AddRecipe);
 
export default AddRecipeContainer; 