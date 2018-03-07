import {Component} from 'react';
import {AddIngredientBtn} from './AddIngredientBtn';
import {AddIngredient} from './AddIngredient';
import {Ingredient} from './Ingredient';
import {IngredientPill} from './IngredientPill';

export class AddRecipe extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            isAddIngredientClicked: false,
            addedIngredients: []
        }
         
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            id: recipeName.value + Math.floor(Math.random() * recipeName.value.length),
            recipeName: recipeName.value,
            ingredients: this.state.addedIngredients
        });

        recipeName.value = '';
        this.setState({
            addedIngredients: []
        });
    }

    // A bag (fixed):
    // The onCancel() doesn't only clear the form but changes a recipies state
    // And adds canceled recipe into a recipies list

    // A bag:
    // The onCancel() doesn't clear and cancel the ingredient input when 
    // isAddIngredientClicked = true and doesn't change it to false
    // it stays as an input field with confirm btn  
    onCancel(e) {
        e.preventDefault(); // Prevents the state to be changed and doesn't adds a canceled recipe to the recipies list 
        var recipeName = this.refs._recipeName;
        recipeName.value = '';
        this.setState({
            addedIngredients: []
        });
    }

    render() {
        var _recipeName = '';
        return (
            <div>
                <button>+</button><span className="btn-tip">Add a Recipe</span>
                <h2>Add New Recipe</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                               placeholder="Recipe Name"
                               ref="_recipeName" />
                    </div>
                    <div>
                        { this.state.addedIngredients ? 
                            this.state.addedIngredients.map((ingredient, index) => 
                                <IngredientPill key={index}
                                                ingredient={ingredient}/>) : null }
                        { this.state.isAddIngredientClicked ? 
                            <AddIngredient handleClick={this.handleClick}/> : 
                            <AddIngredientBtn handleClick={this.handleClick}/> }
                    </div>
                    <div>
                        <button onClick={e => this.onCancel(e)}>Cancel</button>
                        <button type="submit">Save the Recipe</button>
                    </div>                
                </form>
            </div>
        );
    }
} 