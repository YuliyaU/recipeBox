import {Component} from 'react';
import {RecipesList} from './RecipiesList';
import {AddRecipe} from './AddRecipe';

export class RecipiesUIContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipies: [
                {
                    "id":75380075.997071,
                    "recipeName":"dolore ea",
                    "ingredients":[
                        {
                            "ingredientName":"magna quis"
                        },{
                            "ingredientName":"adipisicing pariatur ipsum deserunt"
                        },{
                            "ingredientName":"ex officia"
                        },{
                            "ingredientName":"eiusmod incididunt"
                        }
                    ]
                },
                {"id":22207849.447996482,"recipeName":"ut culpa","ingredients":[{"ingredientName":"non nulla"},{"ingredientName":"adipisicing incididunt"},{"ingredientName":"qui veniam"},{"ingredientName":"ut"}]},
                {"id":28790361.49302566,"recipeName":"veniam est","ingredients":[{"ingredientName":"non Excepteur sit"},{"ingredientName":"ex adipisicing aliqua"},{"ingredientName":"sit anim adipisicing"},{"ingredientName":"esse non Excepteur"},{"ingredientName":"commodo esse laborum dolore"}]},
                {"id":88476724.4485286,"recipeName":"","ingredients":[{"ingredientName":"ex nostrud la"},{"ingredientName":"ea sed cupidatat"}]}
            ]
        }

        this.addNewRecipe = this.addNewRecipe.bind(this);
        this.deleteRecipe = this.deleteRecipe.bind(this);
    }

    addNewRecipe(newRecipe) {
        this.setState({
            recipies: [
                ...this.state.recipies,
                newRecipe
            ]
        }, () => console.log(this.state.recipies));
    }

    deleteRecipe(id) {
        var newRecipiesArr = this.state.recipies;
        for (var i = 0; i < newRecipiesArr.length; i += 1) {
            if (newRecipiesArr[i]['id'] == id) {
                newRecipiesArr.splice(i, 1);
                this.setState({
                    recipies: newRecipiesArr
                }, () => console.log(this.state.recipies))
            } else {
                console.log('The recipe is not found')
            }
        }
    }

    render() {
        return (
            <div className="ui-container">
                <RecipesList recipies={this.state.recipies}
                             onRecipeDelete={this.deleteRecipe} />
                <AddRecipe onNewRecipe={this.addNewRecipe}/>
            </div>
        );
    }
}

