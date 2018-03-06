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

    render() {
        return (
            <div>
                <button>+</button><span className="btn-tip">Add a Recipe</span>
                <h2>Add New Recipe</h2>
                <form>
                    <div>
                        <input type="text" placeholder="Recipe Name" />
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
                        <button>Cancel</button>
                        <button type="submit">Save the Recipe</button>
                    </div>                
                </form>
            </div>
        );
    }
} 