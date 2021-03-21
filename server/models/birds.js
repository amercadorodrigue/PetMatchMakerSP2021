import mongoose from 'mongoose';

const birdsSchema = mongoose.Schema({
    breed: String,
    description: String,
    conditions: String,
    diet: String,
    spaceNeeded: String,
    noiseLevel: String,
    values: {
        space: Number,
        attention: Number,
        budget: Number,
        allergies: Boolean
    },
}, { collection: 'Birds' });

const BirdAnimal = mongoose.model('Bird', birdsSchema);
export default BirdsAnimal;
