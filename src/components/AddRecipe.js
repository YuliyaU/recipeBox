import {Component} from 'react';
import {AddIngredientBtn} from './AddIngredientBtn';
import {AddIngredient} from './AddIngredient';

export class AddRecipe extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            isAddIngredientClicked: false
        }
        
        this.handleClick - this.handleClick.bind(this);
    }

    handleClick() {       
        this.setState({
            isAddIngredientClicked: !this.state.isAddIngredientClicked
        }, () => console.log(this.state.isAddIngredientClicked));
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
                    {// e => fun(e) for event handler is necessary 
                        this.state.isAddIngredientClicked ? <AddIngredient handleClick={e => this.handleClick(e)}/> : 
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