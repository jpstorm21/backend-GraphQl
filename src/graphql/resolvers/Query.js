import User from "../../models/User";

const Query = {
    users: async () => {
    return await User.find();
  }
};

export default Query;
