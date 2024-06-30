import express from 'express';
import { createMissionController, getAllMissionsGeneralController,getAllMissionsEventController, getMissionByIdController, updateMissionController, deleteMissionController } from '../controllers/missionController';

const router = express.Router();

router.post('/missions', createMissionController);
router.get('/missions-general', getAllMissionsGeneralController);
router.get('/missions-event', getAllMissionsEventController);
router.get('/missions/:id', getMissionByIdController);
router.put('/missions/:id', updateMissionController);
router.delete('/missions/:id', deleteMissionController);

export default router;
