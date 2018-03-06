export const AddIngredient = (props) => {

    return (
        <div>
            <input type="text" 
                   placeholder="Ingredient"/>
            <button onClick={props.handleClick}
                    id="add-ingredient">v</button>
        </div>        
    );
}

// import {Component} from 'react';

// export class AddIngredient extends Component {
//     render() {
//         return (
//             <div>
//                 <input type="text" 
//                     placeholder="Ingredient" />
//                 <button onClick={this.props.handleClick}
//                         id="add-ingredient">v</button>
//             </div>        
//         );
//     }
// }