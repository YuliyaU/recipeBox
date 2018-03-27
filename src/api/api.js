export function getRecipes() {
    var recipesLS = localStorage.getItem('recipes');
    var recipes = JSON.parse(recipesLS);
    console.log(recipes);
    return recipes;
}

export function createRecipe(newRecipe) {
    var recipes = getRecipes();
    if (recipes) {
        recipes.push(newRecipe);
    } else {
        recipes = [];
        recipes.push(newRecipe);
    }
    saveRecipesToLocalStorage(recipes);
}

export function updateRecipes(editedRecipe) {
    var recipes = getRecipes();
    for (var i = 0; i < recipes.length; i += 1) {
        if (String.toString(recipes[i]['id']) === String.toString(editedRecipe['id'])) {
            recipes[i] = editedRecipe;
        }
    }
    saveRecipesToLocalStorage(recipes);
}

export function deleteRecipe(recipeId) {
    var recipes = getRecipes();
    for (var i = 0; i < recipes.length; i += 1) {
        if (String.toString(recipes[i]['id']) === String.toString(recipeId)) {
            recipes.splice(i, 1);
        }
    }
    saveRecipesToLocalStorage(recipes);
}

function saveRecipesToLocalStorage(recipes) {
    recipes = JSON.stringify(recipes);
    localStorage.setItem('recipes', recipes);
};