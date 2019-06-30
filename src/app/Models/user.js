const knex = require("../../config/database");

const User = knex("users");

module.exports = User;
