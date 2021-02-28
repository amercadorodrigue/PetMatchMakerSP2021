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
        allergies: Boolean
    },
});

const MammalAnimal = mongoose.model('Mammal'. mammalsSchema);
export default mammalsSchema;
