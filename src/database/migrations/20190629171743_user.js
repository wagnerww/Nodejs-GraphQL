exports.up = function(knex) {
  return knex.schema.createTable("users", table => {
    table.increments("id").primary();
    table.string("nome", 80).notNullable();
    table.string("email", 80).notNullable();
    table.string("senha", 80).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
