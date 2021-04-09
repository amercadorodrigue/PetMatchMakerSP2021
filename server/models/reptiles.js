import mongoose from 'mongoose';

const reptileSchema = mongoose.Schema({
    breed: String,
    description: String,
    conditions: String,
    diet: String,
    specialNeeds: String,
    tankSize: String,
    humidityLevel: String,
    temperature: String,
    size: String,
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
}, { collection: 'Reptiles' });

const ReptileAnimal = mongoose.model('Reptile', reptileSchema);
export default ReptileAnimal;