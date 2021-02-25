import express from 'express';
import { getAnimals } from '../controllers/quizzes.js';
const router = express.Router();

router.get('/', getAnimals);

export default router;