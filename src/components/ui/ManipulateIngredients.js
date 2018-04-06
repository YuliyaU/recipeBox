import {Component} from 'react';
import {AddIngredientBtn} from './AddIngredientBtn';
import {AddIngredient} from './AddIngredient';
import {IngredientPill} from './IngredientPill';

export class ManipulateIngredients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddIngredientClicked: false  
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, ingredient) {               
        if (this.state.isAddIngredientClicked) {   
            this.props.onAddIngredient(ingredient);
            this.setState({
                isAddIngredientClicked: false
            });
        } else {
            this.setState({
                isAddIngredientClicked: true
            });
        }
    }

    render() {
        var hasAddedIngredients = false;
        if (this.props.addedIngredients) {
            if (this.props.addedIngredients.length === 0) {
                hasAddedIngredients = false;
            } else hasAddedIngredients =true;
        } else {
            hasAddedIngredients = false; 
        }
        return (
            <div>
                { hasAddedIngredients ? 
                    this.props.addedIngredients.map(ingredient => 
                        <IngredientPill key={ingredient.ingredientId}
                                        ingredient={ingredient}
                                        onDeleteIngredient={this.props.onDeleteIngredient}/>) : null }
                { this.state.isAddIngredientClicked ? 
                    <AddIngredient handleClick={this.handleClick}
                                    generateId={this.props.generateId}/> : 
                    <AddIngredientBtn handleClick={this.handleClick}/> }
            </div>
        );
    }
}