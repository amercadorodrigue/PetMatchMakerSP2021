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
        allergies: Boolean,
        energy: Number,
        size: Number,
        attention: Number,
        emotionalSupport: Boolean,
        budget: Number,
        smallChildren: Boolean
    },
}, { collection: 'Mammals' });

const MammalAnimal = mongoose.model('Mammal', mammalsSchema);
export default MammalAnimal;
