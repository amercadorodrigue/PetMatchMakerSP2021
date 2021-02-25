import mongoose from 'mongoose';

const mammalsSchema = mongoose.Schema({
    breed: String,
    type: String,
    description: String,
    conditions: String,
    diet: String,
    specialNeeds: String,
    energyLevel: String,
    spaceNeeded: String,
    personality: String,
    hairType: String,
    grooming: String,
    values: {
        space: Number,
        attention: Number,
        budget: Number,
    },
});

const MammalAnimal = mongoose.model('Fish'. mammalsSchema);
export default mammalsSchema;
