import mongoose from 'mongoose';

const fishSchema = mongoose.Schema({
    breed: String,
    description: String,
    conditions: String,
    diet: String,
    specialNeeds: String,
    tankSize: String,
    waterType: String,
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
}, { collection: 'Fish' });

const FishAnimal = mongoose.model('Fish', fishSchema);
export default FishAnimal;

