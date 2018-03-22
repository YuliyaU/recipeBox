import {Component} from 'react';
import {RecipesList} from './RecipiesList';
import {AddRecipe} from './AddRecipe';
import {getRecipies, deleteRecipe, editRecipe} from '../api/api';

export class RecipiesUIContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipies: [{
                "id":365558.83417074627,
                "recipeName":"commodo do",
                "ingredients":[{
                    "ingredientId":8704752.485715887,
                    "ingredientName":"ea irure"
                }, {
                    "ingredientId":61364703.937548354,
                    "ingredientName":"voluptate qui irure enim"
                }]},
                {"id":67778762.58874306,"recipeName":"qui conseq","ingredients":[{"ingredientId":33929516.86676681,"ingredientName":"irure in exercitation"}]},
                {"id":84980349.10338351,"recipeName":"Ut velit labore non","ingredients":[{"ingredientId":87369458.65003428,"ingredientName":"ut ipsum incididunt"},{"ingredientId":31203943.475608993,"ingredientName":"laborum amet incididunt"}]},
                {"id":13230824.882353295,"recipeName":"sint laborum voluptate","ingredients":[{"ingredientId":45683826.589026056,"ingredientName":"ex et"},{"ingredientId":66825759.08319206,"ingredientName":"consectetur reprehenderit incididunt"},{"ingredientId":38433165.166555524,"ingredientName":"ad officia ipsum cupidatat"},{"ingredientId":74956229.02406889,"ingredientName":"nisi aliquip et velit commodo"}]},
                {"id":59865062.965024225,"recipeName":"in","ingredients":[{"ingredientId":82939919.5394371,"ingredientName":"Ut nostrud in Excepteur dolor"},{"ingredientId":13190845.387485074,"ingredientName":"velit laboris dolor ex nostrud"},{"ingredientId":21266781.153889354,"ingredientName":"exercitation mollit voluptate anim"}]}]
        }

        this.addNewRecipe = this.addNewRecipe.bind(this);
        this.editRecipe = this.editRecipe.bind(this);
        this.onDeleteRecipe = this.onDeleteRecipe.bind(this);
    }

    addNewRecipe(newRecipe) {
        this.setState({
            recipies: [
                ...this.state.recipies,
                newRecipe
            ]
        }, () => console.log(this.state.recipies));
    }

    editRecipe(editedRecipe) {
        editRecipe(editedRecipe);
    }

    onDeleteRecipe(id) {

        // Bag: There is a delay in a state update without el.remove()
        
        deleteRecipe(id);

        var recipeToRemove = document.getElementById(id);
        recipeToRemove.remove();
        
        // window.location.reload(true);
    }

    componentWillMount() {
        getRecipies().then(results => {
            this.setState({
                recipies: results
            });
        });
    }

    render() {
        return (
            <div className="ui-container">
                <RecipesList recipies={this.state.recipies}
                             onRecipeDelete={this.onDeleteRecipe}
                             editRecipe={this.editRecipe} />
                <AddRecipe onNewRecipe={this.addNewRecipe}/>
            </div>
        );
    }
}

