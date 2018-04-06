import {Component} from 'react';
import {Ingredient} from './Ingredient';
import RecipeForm from './RecipeForm';
import TiEdit from 'react-icons/lib/ti/edit';
import TiTrash from 'react-icons/lib/ti/trash';
import {connect} from 'react-redux';
import {deleteRecipe} from '../../actions';

class Recipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditModeActive: false,
            isRecipeExpanded: false
        }

        this.expandRecipe = this.expandRecipe.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.openEditRecipeForm = this.openEditRecipeForm.bind(this);
        this.closeEditRecipeForm = this.closeEditRecipeForm.bind(this);
    }

    expandRecipe() {
        this.setState({
            isRecipeExpanded: !this.state.isRecipeExpanded
        });
    }

    handleDelete(e, recipeId) {
        this.props.onDeleteRecipe(recipeId);
    }

    openEditRecipeForm() {
        this.setState({
            isEditModeActive: true,
            isRecipeExpanded: false
        });
    }

    closeEditRecipeForm() {
        this.setState({
            isEditModeActive: false
        });
    }

    render() {
        var isEditMode = true, 
            hasIngredients = false;
        if (this.props.recipe.ingredients) {
            if (this.props.recipe.ingredients.length === 0) {
                hasIngredients = false;
            } else {
                hasIngredients = true;
            }
        } else {
            hasIngredients = false;
        }
        return (
            <li className="recipe-block"
                id={this.props.recipe.id}>
                {!this.state.isEditModeActive ?
                <div onClick={this.expandRecipe}
                     className="recipe-title">
                    {this.props.recipe.recipeName ? this.props.recipe.recipeName : 'Untitled Recipe'}
                </div> : null}
                {this.state.isRecipeExpanded ?
                <ul className="recipe-info">
                    {hasIngredients ? 
                        this.props.recipe.ingredients.map(ingredient => 
                            <Ingredient key={ingredient.ingredientId}
                                        ingredient={ingredient}/>) : 'There is no ingredients. Edit the recipe and add some ingredients.'}</ul> : null}
                {!this.state.isEditModeActive ?
                <div className="recipe-controls">
                    <span className="recipe-controls__item"
                          onClick={this.openEditRecipeForm}><TiEdit /></span>
                    <span className="recipe-controls__item"
                        onClick={e => this.handleDelete(e, this.props.recipe.id)}><TiTrash /></span>                    
                </div> : null}
                {this.state.isEditModeActive ? 
                        <RecipeForm recipe={this.props.recipe}
                                    isEditMode={isEditMode}
                                    isEditModeActive={this.state.isEditModeActive}
                                    closeEditForm={this.closeEditRecipeForm}/> : null}
            </li>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteRecipe: (recipeId) => {
            dispatch(deleteRecipe(recipeId))
        }
    };    
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);