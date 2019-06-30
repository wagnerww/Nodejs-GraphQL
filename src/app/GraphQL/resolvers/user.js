const User = require("../../Models/user");
const userEnderecos = require("../../Models/UserEnderecos");

module.exports = {
  Query: {
    users: async () => {
      const res = await User.select("*");
      return res;
    },

    user: async (_, { id }) => {
      const result = await User.where({ id }).first();
      console.log("result", result);
      return result;
    }
  },

  Mutation: {
    createUser: async (_, data) => {
      const res = await User.insert(data).returning("*");
      return res[0];
    }
  },

  User: {
    enderecos: async ({ id }) => {
      return await userEnderecos.where({ user_id: id });
    }
  }
};
