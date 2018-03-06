export const AddIngredientBtn = (props) => {

    return (
        <div id="add-ingredient" className="add-ingredient">
            <button onClick={e => props.handleClick(e)}>+</button><span className="btn-tip">Add Ingredient</span>
        </div>
    );
}