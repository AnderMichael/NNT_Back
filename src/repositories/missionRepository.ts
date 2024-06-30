import Mission, { IMission } from '../models/mission';

export const createMission = async (mission: IMission): Promise<IMission> => {
  const newMission = new Mission(mission);
  return await newMission.save();
};

export const findAllMissionsGeneral = async (): Promise<IMission[]> => {
  return await Mission.find({type: 'general'}).exec();
};

export const findAllMissionsEvent = async (): Promise<IMission[]> => {
    return await Mission.find({type: 'event'}).exec();
};

export const findMissionById = async (id: string): Promise<IMission | null> => {
  return await Mission.findById(id).exec();
};

export const updateMission = async (id: string, mission: Partial<IMission>): Promise<IMission | null> => {
  return await Mission.findByIdAndUpdate(id, mission, { new: true }).exec();
};

export const deleteMission = async (id: string): Promise<IMission | null> => {
  return await Mission.findByIdAndDelete(id).exec();
};
