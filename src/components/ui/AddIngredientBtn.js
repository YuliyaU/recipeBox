import TiPlus from 'react-icons/lib/ti/plus';

export const AddIngredientBtn = (props) => {

    return (
        <div id="add-ingredient" className="add-ingredient">
            <button onClick={e => props.handleClick(e)}><TiPlus /></button>
            <span className="btn-tip">Add Ingredient</span>
        </div>
    );
};