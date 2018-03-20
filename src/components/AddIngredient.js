import TiTick from 'react-icons/lib/ti/tick';

export const AddIngredient = (props) => {
    var ingredient = {
            ingredientId: '',
            ingredientName: ''
        };

    const handleChange = (e) => {        
        var inputValue = e.target.value;
        ingredient['ingredientId'] = props.generateId();
        ingredient['ingredientName'] = inputValue;
        return ingredient;
    }

    return (
        <div id="add-ingredient" className="add-ingredient">
            <input type="text"
                    placeholder="Ingredient"
                    onChange={e => handleChange(e)} />
            <button onClick={e => props.handleClick(e, ingredient)}><TiTick /></button>
        </div>        
    );
}