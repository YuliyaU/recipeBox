import {Component} from 'react';
import {Ingredient} from './Ingredient';
import {RecipeForm} from './RecipeForm';
import TiEdit from 'react-icons/lib/ti/edit';
import TiTrash from 'react-icons/lib/ti/trash';

export class Recipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditMode: true,
            isEditModeActive: false
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.openEditForm = this.openEditForm.bind(this);
        this.closeEditForm = this.closeEditForm.bind(this);
    }

    handleDelete(e, recipeId) {
        this.props.onRecipeDelete(recipeId);
    }

    openEditForm() {
        this.setState({
            isEditModeActive: true
        }, () => console.log(this.state.isEditModeActive));
    }

    closeEditForm() {
        this.setState({
            isEditModeActive: false
        }, () => console.log(this.state.isEditModeActive))
    }

    render() {

    // Show a recipe item onClick
        return (
            <li className="recipe-block">
                <div>{this.props.recipe.recipeName ? this.props.recipe.recipeName : 'Untitled Recipe'}</div>
                <ul className="recipe-info">{this.props.recipe.ingredients ? 
                    this.props.recipe.ingredients.map(ingredient => 
                        <Ingredient key={ingredient.ingredientId}
                                    ingredient={ingredient}/>) : 'There is no ingredients'}</ul>
                <div className="recipe-controls">
                    <span className="recipe-controls__item"
                          onClick={this.openEditForm}><TiEdit /></span>
                    <span className="recipe-controls__item"
                        onClick={e => this.handleDelete(e, this.props.recipe.id)}><TiTrash /></span>
                    {this.state.isEditModeActive ? 
                        <RecipeForm recipe={this.props.recipe}
                                    isEditMode={this.state.isEditMode}
                                    isEditModeActive={this.state.isEditModeActive}
                                    editRecipe={this.props.editRecipe}
                                    closeEditForm={this.closeEditForm}/> : null}
                </div>
            </li>
        );
    }
}