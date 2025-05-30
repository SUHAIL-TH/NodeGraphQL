const userModel = require("./model/user");

const resolver = {
  Query: {
    getAllUsers: async () => {
      let data = await userModel.find();
      return data;
    },
  },
  Mutation: {
    createUser: async (_, arg) => {
      let { name, age } = arg;
      const newuser = new userModel({ name, age });
      let newuserdata = await newuser.save();
      return newuserdata;
    },
    udateUser: async (_, arg) => {
      const updatedUser = await userModel.findByIdAndUpdate(
        arg.id,
        {
          name: arg.name,
          age: arg.age,
        },
        {
          new: true, // Return the updated document
          runValidators: true, // Optional: ensure validation rules are applied
        }
      );
    },
  },
};

module.exports = resolver;
