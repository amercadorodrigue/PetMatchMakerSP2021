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
        allergies: Boolean,
        energy: Number,
        size: Number,
        attention: Number,
        emotionalSupport: Boolean,
        budget: Number,
        smallChildren: Boolean,
        cuddle: Boolean
    },
}, { collection: 'Birds' });

const BirdsAnimal = mongoose.model('Bird', birdsSchema);
export default BirdsAnimal;
