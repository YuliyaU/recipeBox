import {Component} from 'react';
import {ManipulateIngredients} from './ManipulateIngredients';
import {connect} from 'react-redux';
import {closeAddRecipeForm, saveRecipe, putRecipe} from '../../actions';

class RecipeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addedIngredients: []  
        };  

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onAddIngredient = this.onAddIngredient.bind(this);
        this.onDeleteIngredient = this.onDeleteIngredient.bind(this);
        this.generateId = this.generateId.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    handleSubmit(e, recipeId) {
        e.preventDefault();   
        
        var recipeName = this.refs._recipeName;

        if (recipeId) {
            this.props.onEditRecipe({
                id: recipeId,
                recipeName: recipeName.value,
                ingredients: this.state.addedIngredients
            });
        } else {
            this.props.onNewRecipe({
                id: this.generateId(),
                recipeName: recipeName.value,
                ingredients: this.state.addedIngredients
            });
        }

        recipeName.value = '';
        this.setState({
            addedIngredients: [],
        });

        if (this.props.isEditMode) {
            this.props.closeEditForm();
        } else {
            this.props.closeAddRecipeForm();
        }        
    }

    generateId() {
        var date = Date.now().toString(),
            id = date + Math.random().toFixed(3).toString();
        return id;
    }

    onAddIngredient(ingredient) {
        if (ingredient.ingredientName) { 
            this.setState({
                addedIngredients: [
                    ...this.state.addedIngredients,
                    ingredient
                ]
            });
        }
    }

    onDeleteIngredient(e, ingredientId) {
        var newIngredientsArr = this.state.addedIngredients;
        for (var i = 0; i < newIngredientsArr.length; i += 1) {
            if (newIngredientsArr[i]['ingredientId'] == ingredientId) {
                newIngredientsArr.splice(i, 1);
                this.setState({
                    addedIngredients: newIngredientsArr
                });
                break;
            }
        }
    }

    // A bag:
    // The onCancel() doesn't clear and cancel the ingredient input when 
    // isAddIngredientClicked = true and doesn't change it to false
    // it stays as an input field with confirm btn  
    // Check out the simillar bag onSubmit => 
    // Give a message that the user haven't confirmed an entered ingredient
    onCancel(e) {
        e.preventDefault(); // Prevents the state to be changed and doesn't adds a canceled recipe to the recipies list 
        var recipeName = this.refs._recipeName;
        recipeName.value = '';
        this.setState({
            addedIngredients: []
        });

        if (this.props.isEditMode) {
            this.props.closeEditForm();
        } else {
            this.props.closeAddRecipeForm();
        }
    }
    
    componentWillMount() {
        if (this.props.isEditModeActive && this.props.isEditMode) {
            this.setState({
                addedIngredients: this.props.recipe.ingredients
            });
        }
    }

    render() {
        var recipeId = '';
        if (this.props.isEditMode) {
            recipeId = this.props.recipe.id;
        } else {
            recipeId = '';
        }
        return (
            <form onSubmit={e => this.handleSubmit(e, recipeId)}
                  id="recipe-form"
                  className="recipe-form">
                <fieldset>
                    <legend>{this.props.isEditMode ? 'Edit Recipe' : 'Add New Recipe'}</legend>
                    <div>
                        {this.props.isEditMode ? 
                            <input type="text"
                                   ref="_recipeName"
                                   defaultValue={this.props.recipe.recipeName} /> : 
                            <input type="text"
                                   placeholder="Recipe Name"
                                   ref="_recipeName" />}
                    </div>
                        <ManipulateIngredients addedIngredients={this.state.addedIngredients}
                                               onAddIngredient={this.onAddIngredient}
                                               onDeleteIngredient={this.onDeleteIngredient}
                                               generateId={this.generateId}/>
                    <div>
                        <button onClick={e => this.onCancel(e)}>Cancel</button>
                        <button type="submit">Save the Recipe</button>
                    </div>   
                </fieldset>             
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onNewRecipe: (recipe) => {
            dispatch(saveRecipe(recipe));
        },
        closeAddRecipeForm: () => {
            dispatch(closeAddRecipeForm());
        },
        onEditRecipe: (recipe) => {
            dispatch(putRecipe(recipe));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);