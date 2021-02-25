import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import quizRoutes from './routes/quizzes.js';

const app = express();
dotenv.config();

app.use('/quiz', quizRoutes);
app.use(bodyParser.json( { limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded( { limit: "30mb", extended: true}));
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
