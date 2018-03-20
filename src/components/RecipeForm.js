import {Component} from 'react';
import {AddIngredientBtn} from './AddIngredientBtn';
import {AddIngredient} from './AddIngredient';
import {IngredientPill} from './IngredientPill';

export class RecipeForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAddIngredientClicked: false,
            addedIngredients: []            
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.generateId = this.generateId.bind(this);
        this.onDeleteIngredient = this.onDeleteIngredient.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    handleClick(e, ingredient) {               
        if (this.state.isAddIngredientClicked) {
            console.log(ingredient);            
            this.setState({
                addedIngredients: [
                    ...this.state.addedIngredients,
                    ingredient
                ],
                isAddIngredientClicked: false
            }, () => console.log(this.state.addedIngredients));
        } else {
            this.setState({
                isAddIngredientClicked: true
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();   
        
        var recipeName = this.refs._recipeName;
        console.log('refs value ' + recipeName.value);

        this.props.onNewRecipe({
            id: this.generateId(),
            recipeName: recipeName.value,
            ingredients: this.state.addedIngredients
        });

        recipeName.value = '';
        this.setState({
            addedIngredients: [],
        });

        this.props.closeAddRecipeForm();

        // Change or remove completely transition and instantly hide the form
        // var addRecipeForm = document.getElementById('add-recipe-form');
        // if (addRecipeForm.classList.contains('unhid')) {
        //     addRecipeForm.classList.remove('unhid');
        // }
    }

    generateId() {
        var date = Date.now().toString(),
            id = date + Math.random().toFixed(3).toString();
        return id;
    }

    onDeleteIngredient(e, ingredientId) {
        var newIngredientsArr = this.state.addedIngredients;
        for (var i = 0; i < newIngredientsArr.length; i += 1) {
            if (newIngredientsArr[i]['ingredientId'] == ingredientId) {
                newIngredientsArr.splice(i, 1);
                this.setState({
                    addedIngredients: newIngredientsArr
                }, () => console.log(this.state.addedIngredients));
            } else {
                console.log("The ingredient wasn't found.");
            }
        }
    }

    // A bag (fixed):
    // The onCancel() doesn't only clear the form but changes a recipies state
    // And adds canceled recipe into a recipies list

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
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}
                  id="add-recipe-form"
                  className="add-recipe-form">
                <fieldset>
                    <legend>Add New Recipe</legend>
                    <div>
                        <input type="text"
                               placeholder="Recipe Name"
                               ref="_recipeName" />
                    </div>
                    <div>
                        { this.state.addedIngredients ? 
                            this.state.addedIngredients.map(ingredient => 
                                <IngredientPill key={ingredient.ingredientId}
                                                ingredient={ingredient}
                                                isEditMode={this.props.isEditMode}
                                                onDeleteIngredient={this.onDeleteIngredient}/>) : null }
                        { this.state.isAddIngredientClicked ? 
                            <AddIngredient handleClick={this.handleClick}
                                           generateId={this.generateId}/> : 
                            <AddIngredientBtn handleClick={this.handleClick}/> }
                    </div>
                    <div>
                        <button onClick={e => this.onCancel(e)}>Cancel</button>
                        <button type="submit">Save the Recipe</button>
                    </div>   
                </fieldset>             
            </form>
        );
    }
}