import { IMission } from '../models/mission';
import { createMission, findAllMissionsGeneral, findAllMissionsEvent, findMissionById, updateMission, deleteMission } from '../repositories/missionRepository';

export const createMissionService = async (mission: IMission): Promise<IMission> => {
  return await createMission(mission);
};

export const getAllMissionsGeneralService = async (): Promise<IMission[]> => {
  return await findAllMissionsGeneral();
};

export const getAllMissionsEventService = async (): Promise<IMission[]> => {
  return await findAllMissionsEvent();
};

export const getMissionByIdService = async (id: string): Promise<IMission | null> => {
  return await findMissionById(id);
};

export const updateMissionService = async (id: string, mission: Partial<IMission>): Promise<IMission | null> => {
  return await updateMission(id, mission);
};

export const deleteMissionService = async (id: string): Promise<IMission | null> => {
  return await deleteMission(id);
};
