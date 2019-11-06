
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipeId: 1, author: 1, steps:'Bake Cookies @ 400 for 50 mins, Remove From Oven, Enjoy'},
        {recipeId: 2, author: 2, steps:'Bake Cookies @ 400 for 50 mins, Remove From Oven, Enjoy'},
        {recipeId: 3, author: 2, steps:'Bake Cookies @ 400 for 50 mins, Remove From Oven, Enjoy'},
      ]);
    });
};
