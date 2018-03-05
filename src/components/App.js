import {Component} from 'react';
import { RecipiesUIContainer } from './RecipiesUIContainer';

export class App extends Component {
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
    }

    render() {
        return(
            <div>
                <header><h1>RecipeBox</h1></header>
                <RecipiesUIContainer recipies={this.state.recipies} />                
                <footer><span>Made by Yuliya Ulanova, 2018</span></footer>
            </div>
        );
    }
}