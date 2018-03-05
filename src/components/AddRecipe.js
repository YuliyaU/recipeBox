export const AddRecipe = () => {
    return (
        <div>
            <button>+</button><span className="plus-btn-tip">Add a Recipe</span>
            <h2>Add New Recipe</h2>
            <form>
                <div>
                    <input type="text" />
                </div>
                <div>
                    <button>+</button><span className="plus-btn-tip">Add Ingredient</span>
                </div>
                <div>
                    <button>Cancel</button>
                    <button>Save the Recipe</button>
                </div>                
            </form>
        </div>
    );
} 