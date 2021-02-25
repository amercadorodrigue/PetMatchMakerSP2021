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
        attention: Number,
        budget: Number,
    },
});

const ReptileAnimal = mongoose.model('Fish'. reptileSchema);
export default reptileSchema;