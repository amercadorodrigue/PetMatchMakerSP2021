import express from 'express';
import { getBirds, getFish, getMammals, getReptiles } from '../controllers/quizzes.js';
const router = express.Router();

//trying different requests
router.get('/Birds', getBirds);
router.get('/Fish', getFish);
router.get('/Mammals', getMammals);
router.get('/Reptiles', getReptiles);

 

export default router;