const db = require('../knexfile');

module.exports = {
    getAllRecipes: () => {
        return db('recipes');
    },
    getRecipesByUser: (author) => {
        return db('recipes').where('author', author)
    },
    getRecipeById: (id) => {
        return db('recipes').where('id', id)
    },
    insertRecipe:(recipe) => {
        return db('recipes').insert(recipe)
    },
    updateRecipe:(id, recipe) => {
        return db ('recipes').where('id', id).update(recipe)
    }, 
    deleteRecipe:(id) => {
        return db('recipes').where('id', id).del()
    }
}