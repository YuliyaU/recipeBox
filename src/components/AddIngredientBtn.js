export const AddIngredientBtn = (props) => {

    return (
        <div>
            <button onClick={props.handleClick}
                    id="add-ingredient">+</button><span className="btn-tip">Add Ingredient</span>
        </div>
    );
}