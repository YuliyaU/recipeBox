import {Component} from 'react';
import {AddIngredientBtn} from './AddIngredientBtn';
import {AddIngredient} from './AddIngredient';
import { Ingredient } from './Ingredient';

export class AddRecipe extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            isAddIngredientClicked: false,
            addedIngredients: []
        }
         
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick() {               
        if (this.state.isAddIngredientClicked) {            
            this.setState({
                isAddIngredientClicked: false
            });
        } else {
            this.setState({
                isAddIngredientClicked: true
            });
        }
    }

    handleSubmit() {
        var recipe = {
            id: _recipeName,
            recipeName: _recipeName,
            ingredients: _ingredients
        }
    }

    render() {
        var _recipeName = '',
            _ingredients = [];
        return (
            <div>
                <button>+</button><span className="btn-tip">Add a Recipe</span>
                <h2>Add New Recipe</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" placeholder="Recipe Name"
                                           ref={input => _recipeName = input} />
                    </div>
                    {// e => fun(e) for event handler is necessary 
                        this.state.isAddIngredientClicked ? 
                            <AddIngredient handleClick={e => this.handleClick(e)}/> : 
                            <AddIngredientBtn handleClick={e => this.handleClick(e)}/>}
                    <div>
                        <button>Cancel</button>
                        <button type="submit">Save the Recipe</button>
                    </div>                
                </form>
            </div>
        );
    }
} 