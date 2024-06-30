import { IBadge } from "../models/badge";
import BadgeRepository from "../repositories/badgeRepository";

const getAllBadges = async(): Promise<IBadge[]> => {
  return BadgeRepository.findAll();
}

const getBadgeById = async(id: string): Promise<IBadge | null> => {
  return BadgeRepository.findById(id);
}

const createBadge = async(badge: IBadge): Promise<IBadge> => {
  return BadgeRepository.create(badge);
}

export default { getAllBadges, getBadgeById, createBadge };