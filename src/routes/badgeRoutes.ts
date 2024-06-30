import { Router } from 'express';
import { createBadge, getBadgeById, getBadges } from '../controllers/badgeController';

const router = Router();

router.get('/badges', getBadges);
router.get('/badges/:id', getBadgeById);
router.post('/badges', createBadge);

export default router;