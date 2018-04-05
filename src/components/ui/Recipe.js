import {Component} from 'react';
import {Ingredient} from './Ingredient';
import RecipeForm from './RecipeForm';
import TiEdit from 'react-icons/lib/ti/edit';
import TiTrash from 'react-icons/lib/ti/trash';

export class Recipe extends Component {
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
        this.props.onRecipeDelete(recipeId);
    }

    openEditRecipeForm() {
        this.setState({
            isEditModeActive: true
        });
    }

    closeEditRecipeForm() {
        this.setState({
            isEditModeActive: false
        });
    }

    render() {
        var isEditMode = true;
        return (
            <li className="recipe-block"
                id={this.props.recipe.id}>
                <div onClick={this.expandRecipe}
                     className="recipe-title">
                    {this.props.recipe.recipeName ? this.props.recipe.recipeName : 'Untitled Recipe'}
                </div>
                {this.state.isRecipeExpanded ?
                <ul className="recipe-info">
                    {this.props.recipe.ingredients ? 
                        this.props.recipe.ingredients.map(ingredient => 
                            <Ingredient key={ingredient.ingredientId}
                                        ingredient={ingredient}/>) : 'There is no ingredients'}</ul> : null}
                <div className="recipe-controls">
                    <span className="recipe-controls__item"
                          onClick={this.props.openEditRecipeForm}><TiEdit /></span>
                    <span className="recipe-controls__item"
                        onClick={e => this.handleDelete(e, this.props.recipe.id)}><TiTrash /></span>
                    {this.state.isEditModeActive ? 
                        <RecipeForm recipe={this.props.recipe}
                                    isEditMode={this.state.isEditMode}
                                    isEditModeActive={this.state.isEditModeActive}
                                    editRecipe={this.props.editRecipe}
                                    closeEditForm={this.closeEditRecipeForm}/> : null}
                </div>
            </li>
        );
    }
}