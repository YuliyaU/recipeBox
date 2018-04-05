import {Component} from 'react';
import RecipeForm from './RecipeForm';
import TiPlus from 'react-icons/lib/ti/plus';

const AddRecipe = ({isAddRecipeFormOpen, onAddRecipeBtnClick}) => {

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