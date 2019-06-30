const userEnderecos = require("../../Models/UserEnderecos");

module.exports = {
  Query: {
    enderecos: () => userEnderecos.select("*")
  }
};
