const knex = require("../../config/database");

const userEnderecos = knex("user_enderecos");

module.exports = userEnderecos;
