import { Request, Response } from 'express';
import { createMissionService, getAllMissionsGeneralService, getAllMissionsEventService, getMissionByIdService, updateMissionService, deleteMissionService } from '../services/missionService';
import { IMission } from '../models/mission';

export const createMissionController = async (req: Request, res: Response): Promise<void> => {
  try {
    const mission: IMission = req.body;
    const newMission = await createMissionService(mission);
    res.status(201).json(newMission);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getAllMissionsGeneralController = async (req: Request, res: Response): Promise<void> => {
  try {
    const missions = await getAllMissionsGeneralService();
    res.json(missions);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getAllMissionsEventController = async (req: Request, res: Response): Promise<void> => {
    try {
      const missions = await getAllMissionsEventService();
      res.json(missions);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

export const getMissionByIdController = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const mission = await getMissionByIdService(id);
    if (mission) {
      res.json(mission);
    } else {
      res.status(404).json({ message: 'Mission not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateMissionController = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const mission: Partial<IMission> = req.body;
    const updatedMission = await updateMissionService(id, mission);
    if (updatedMission) {
      res.json(updatedMission);
    } else {
      res.status(404).json({ message: 'Mission not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const deleteMissionController = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const deletedMission = await deleteMissionService(id);
    if (deletedMission) {
      res.json(deletedMission);
    } else {
      res.status(404).json({ message: 'Mission not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
