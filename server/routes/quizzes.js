import express from 'express';
import { getFish, getMammals, getReptiles } from '../controllers/quizzes.js';
const router = express.Router();

//trying different requests
router.get('/', getFish);
// router.get('/', getMammals);
// router.get('/', getReptiles);

export default router;