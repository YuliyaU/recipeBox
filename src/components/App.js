import { RecipiesUIContainer } from './RecipiesUIContainer';
import '../stylesheets/main.scss';

export const App = () => {
    return(
        <div className="container">
            <header><h1>RecipeBox</h1></header>
            <RecipiesUIContainer />                
            <footer><span>Made by Yuliya Ulanova, 2018</span></footer>
        </div>
    );
}