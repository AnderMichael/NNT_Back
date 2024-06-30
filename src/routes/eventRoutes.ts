import { Router } from 'express';
import { createEvent, getEventById, getEvents } from '../controllers/eventController';

const router = Router();

router.get('/events', getEvents);
router.get('/events/:id', getEventById);
router.post('/events', createEvent);

export default router;