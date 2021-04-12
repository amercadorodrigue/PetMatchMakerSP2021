import express from 'express';
import { getBirds, getFish, getMammals, getReptiles, getAnimals} from '../controllers/quizzes.js';
const router = express.Router();

//trying different requests
router.get('/', (req, res) => { res.send('Hello from Express!')});
router.get('/Birds', getBirds);
router.get('/Fish', getFish);
router.get('/Mammals', getMammals);
router.get('/Reptiles', getReptiles);
router.get('/Animals', getAnimals);

 

export default router;