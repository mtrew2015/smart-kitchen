
exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
        users.increments('id');
        users.string('email').notNullable();
        users.string('username').notNullable();
        users.string('password').notNullable();
    })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
