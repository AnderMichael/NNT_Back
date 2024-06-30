import { Router } from 'express';
import { createEvent, getEventById, getEvents, updateEvent } from '../controllers/eventController';

const router = Router();

router.get('/events', getEvents);
router.get('/events/:id', getEventById);
router.post('/events', createEvent);
router.put('/events/:id', updateEvent)

export default router;