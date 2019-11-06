
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {userId: 1, username: 'mtrew', email:"mtrew2015@gmail.com", password: "test123"},
        {userId: 2, username: 'mtrew', email:"mtrew2015@gmail.com", password: "test123"},
        {userId: 3, username: 'mtrew', email:"mtrew2015@gmail.com", password: "test123"},
      ]);
    });
};
