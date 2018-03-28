import { RecipesUIContainer } from './RecipesUIContainer';
import '../stylesheets/main.scss';

export const App = () => {
    return(
        <div className="container">
            <header className="row twelve columns"><h1>RecipeBox</h1></header>
            <RecipesUIContainer />                
            <footer className="row twelve columns"><span>Made by Yuliya Ulanova, 2018</span></footer>
        </div>
    );
}