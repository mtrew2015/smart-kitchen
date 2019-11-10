exports.up = function(knex) {
	return knex.schema.createTable('recipes', (recipe) => {
        recipe.increments('id');
        recipe.string('title').notNullable();
        recipe.integer('author').unsigned().notNullable();
        recipe.text('steps').notNullable();
        recipe.text('category')
        recipe.text('imageLink')
        recipe.text('comments');
        recipe.float('rating').defaultTo(0)
        recipe.foreign('author').references('id').inTable('users');
        
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('recipes');
};
