
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, username: 'mtrew', email:"mtrew2015@gmail.com", password: "test123"},
        {id: 2, username: 'mtrew', email:"mtrew2015@gmail.com", password: "test123"},
        {id: 3, username: 'mtrew', email:"mtrew2015@gmail.com", password: "test123"},
      ]);
    });
};
