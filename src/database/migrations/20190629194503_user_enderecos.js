//const db = require("../../config/database");
exports.up = function(knex) {
  return knex.schema.createTable("user_enderecos", table => {
    table.increments("id").primary();
    table.integer("user_id").notNullable();
    table
      .foreign("user_id")
      .references("id")
      .inTable("users");
    table.string("endereco").notNullable();
    table.integer("numero").notNullable();
    table.string("bairro");
    table.string("complemento");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("user_enderecos");
};
