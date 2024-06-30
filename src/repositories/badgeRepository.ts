import Badge, { IBadge } from "../models/badge";

const findAll = async (): Promise<IBadge[]> => {
  return Badge.find();
};

const findById = async (id: string): Promise<IBadge | null> => {
  return Badge.findById(id);
};

const create = async (badge: IBadge): Promise<IBadge> => {
  const newBadge = new Badge(badge);
  return newBadge.save();
};

export default { findAll, findById, create };
