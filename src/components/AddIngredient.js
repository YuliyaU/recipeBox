import {Component} from 'react';

export const AddIngredient = (props) => {
    
        return (
            <div id="add-ingredient">
                <input type="text" 
                    placeholder="Ingredient" />
                <button onClick={props.handleClick}>v</button>
            </div>        
        );
        
}