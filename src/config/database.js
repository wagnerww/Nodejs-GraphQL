const knexfile = require("./knexfile");
const knex = require("knex")(knexfile);

module.exports = knex;

/*
exemplos de query
knex("users")
  .insert({ nome: "wagner ricardo", email: "wagner@teste", senha: "123" })
  .then(data => console.log("data", data));

knex("users")
  .first("nome")
  .then(res => console.log("res", res));

  knex("users")
  .select("nome")
  .then(res => console.log("res", res));
  
knex("users")
  .where({ id: 1 })
  .first("nome")
  .then(res => console.log("res", res));

  */
