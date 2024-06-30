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

const update = async (id: string, user: Partial<IUser>): Promise<IUser | null> => {
    return User.findByIdAndUpdate(id, { $set: user }, { new: true, runValidators: true });
};

const findRankedByPoints = async (): Promise<IUser[]> => {
    return await User.find().sort({ missions: -1 });
  }

export default { findAll, findById, create, update, findRankedByPoints };
