
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipeId: 1, title: "Cookies", author: 1, steps:'Bake Cookies @ 400 for 50 mins, Remove From Oven, Enjoy'},
        {recipeId: 2, title: "Pork Chops", author: 2, steps:'Bake Pork Chops @ 400 for 50 mins, Remove From Oven, Enjoy'},
        {recipeId: 3, title: "Muffins", author: 2, steps:'Bake Muffins @ 400 for 50 mins, Remove From Oven, Enjoy', comments: "Great Recipe, I can't wait to try this"},
      ]);
    });
};
