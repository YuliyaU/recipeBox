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
            isEditModeActive: false,
            isRecipeExpanded: false
        }

        this.expandRecipe = this.expandRecipe.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.openEditForm = this.openEditForm.bind(this);
        this.closeEditForm = this.closeEditForm.bind(this);
    }

    expandRecipe() {
        this.setState({
            isRecipeExpanded: !this.state.isRecipeExpanded
        });
    }

    handleDelete(e, recipeId) {
        this.props.onRecipeDelete(recipeId);
    }

    openEditForm() {
        this.setState({
            isEditModeActive: true,
            isRecipeExpanded: false
        });
    }

    closeEditForm() {
        this.setState({
            isEditModeActive: false
        });
    }

    render() {
        var hasIngredients = false;
        if (this.props.recipe.ingredients) {
            if (this.props.recipe.ingredients.length === 0) {
                hasIngredients = false;
            } else {
                hasIngredients = true;
            }
        } else {
            hasIngredients = false;
        }
    // Show a recipe item onClick
        return (
            <li className="recipe-block">
                {!this.state.isEditModeActive ?
                    (<div onClick={this.expandRecipe}
                        className="recipe-title">
                        {this.props.recipe.recipeName ? this.props.recipe.recipeName : 
                        'Untitled Recipe'}
                    </div>) : null}
                {this.state.isRecipeExpanded ?
                    <ul className="recipe-info">
                        {hasIngredients ? 
                            (this.props.recipe.ingredients.map(ingredient => 
                                <Ingredient key={ingredient.ingredientId}
                                            ingredient={ingredient}/>)) : 
                                'There is no ingredients. Edit the recipe and add some.'}</ul> : null}
                {!this.state.isEditModeActive ?
                    (<div className="recipe-controls">
                        <span className="recipe-controls__item"
                            onClick={this.openEditForm}><TiEdit /></span>
                        <span className="recipe-controls__item"
                            onClick={e => this.handleDelete(e, this.props.recipe.id)}><TiTrash /></span>                    
                    </div>) : null}
                {this.state.isEditModeActive ? 
                    <RecipeForm recipe={this.props.recipe}
                                isEditMode={this.state.isEditMode}
                                isEditModeActive={this.state.isEditModeActive}
                                editRecipe={this.props.editRecipe}
                                closeEditForm={this.closeEditForm}/> : null}
            </li>
        );
    }
}