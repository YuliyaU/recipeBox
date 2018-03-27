import {Component} from 'react';
import {RecipeForm} from './RecipeForm';
import TiPlus from 'react-icons/lib/ti/plus';

export class AddRecipe extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            isEditMode: false,
            isAddRecipeMode: false
        }
        
        this.handleAddRecipeClick = this.handleAddRecipeClick.bind(this);
        this.closeAddRecipeForm = this.closeAddRecipeForm.bind(this);
    }

    // Show a form above all other elements and slide it to the top of the up
    handleAddRecipeClick() {
        // var addRecipeForm = document.getElementById('add-recipe-form');
        // if (!addRecipeForm.classList.contains('unhid')) {
        //     addRecipeForm.classList.add('unhid');
        // }
        this.setState({
            isAddRecipeMode: true
        });
    }

    closeAddRecipeForm() {
        this.setState({
            isAddRecipeMode: false
        }, () => {console.log(this.state.isAddRecipeMode)});
    }

    render() {
        var _recipeName = '';
        return (
            <div>
                {!this.state.isAddRecipeMode ? 
                    (<div>
                        <button onClick={this.handleAddRecipeClick}>
                            <TiPlus />
                        </button><span className="btn-tip">Add a Recipe</span>
                    </div>) : null}
                {this.state.isAddRecipeMode ? 
                    <RecipeForm isEditMode={this.state.isEditMode}
                                onNewRecipe={this.props.onNewRecipe}
                                closeAddRecipeForm={this.closeAddRecipeForm}/> : null}
            </div>
        );
    }
} 