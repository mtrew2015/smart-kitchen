exports.up = function(knex) {
	return knex.schema.createTable('recipes', (recipe) => {
        recipe.increments('recipeId');
        recipe.string('title').notNullable();
        recipe.integer('author').unsigned().notNullable();
        recipe.text('steps').notNullable();
        recipe.text('comments');
        recipe.float('rating')
        recipe.foreign('author').references('userId').inTable('users');
        
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('recipes');
};
