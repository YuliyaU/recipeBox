export const AddIngredientBtn = (props) => {

    return (
        <div>
            <button onClick={props.handleClick}
                    id="add-ingredient">+</button><span className="btn-tip">Add Ingredient</span>
        </div>
    );
}

// import {Component} from 'react';
 
// export class AddIngredientBtn extends Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleClick}
//                         id="add-ingredient">+</button><span className="btn-tip">Add Ingredient</span>
//             </div>
//         );
//     }    
// }