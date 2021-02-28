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
        attention: Number,
        budget: Number,
        allergies: Boolean
    },
});

const FishAnimal = mongoose.model('Fish'. fishSchema);
export default fishSchema;

