export const AddIngredientBtn = (props) => {

    return (
        <div>
            <button onClick={e => props.handleClick(e)}
                    id="add-ingredient">+</button><span className="btn-tip">Add Ingredient</span>
        </div>
    );
}