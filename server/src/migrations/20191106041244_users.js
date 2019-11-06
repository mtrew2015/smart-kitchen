
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', users => {
        users.increments('userId');
        users.string('email').notNullable();
        users.string('username').notNullable();
        users.string('password').notNullable();
    })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
