import User, { IUser } from "../models/user";

const findAll = async (): Promise<IUser[]> => {
  return User.find();
};

const findById = async (id: string): Promise<IUser | null> => {
  return User.findById(id);
};

const create = async (user: IUser): Promise<IUser> => {
  const newUser = new User(user);
  return newUser.save();
};

export default { findAll, findById, create };
