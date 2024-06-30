import { Router } from 'express';
import { getUsers, getUserById, createUser, updateUser, getRanking } from '../controllers/userController';

const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.get('/ranking', getRanking)

export default router;
