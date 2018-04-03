import {Component} from 'react';
import {RecipeForm} from './RecipeForm';
import TiPlus from 'react-icons/lib/ti/plus';

const AddRecipe = ({isAddRecipeFormOpen, onAddRecipeBtnClick}) => {

    // const closeAddRecipeForm = () => {
    //     this.setState({
    //         isAddRecipeFormOpen: false
    //     }, () => {console.log(this.state.isAddRecipeFormOpen)});
    // }

    var isEditMode = false, _recipeName = '';

    return (
        <div>
            <button onClick={onAddRecipeBtnClick}>
                <TiPlus />
            </button><span className="btn-tip">Add a Recipe</span>
            {isAddRecipeFormOpen ? 
                <RecipeForm isEditMode={isEditMode} /> : null}
        </div>
    );
    
} 

export default AddRecipe;

//                 {this.state.isAddRecipeFormActive ? 
//                     <RecipeForm isEditMode={isEditMode}
//                                 onNewRecipe={this.props.onNewRecipe}
//                                 closeAddRecipeForm={this.closeAddRecipeForm}/> : null}
//             </div>