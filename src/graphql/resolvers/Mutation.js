import User from "../../models/User";

const Mutation = {
    createUser: async (_, { rut, name, lastname }) => {
    const user = new User({ rut, name, lastname });
    return await user.save();
  }
};

export default Mutation;
