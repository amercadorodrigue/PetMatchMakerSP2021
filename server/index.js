import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import quizRoutes from './routes/quizzes.js';

const app = express();
dotenv.config();

app.use(bodyParser.json( { limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded( { limit: "30mb", extended: true}));
app.use(cors());
app.use('/app', quizRoutes);

app.get('/', (req, res) =>{
    res.send('Hello to Pet Matchmakers API');
})
//Local host serving for testing
//const PORT = process.env.PORT || 5000;

//Actual server hosting
const PORT = process.env.PORT;

mongoose.connect(process.env.CONNECTION_URL, { dbName: 'PetMatchMaker', useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
