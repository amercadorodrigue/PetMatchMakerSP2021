import FishAnimal from '../models/fish.js';
import MammalAnimal from '../models/mammals.js';
import ReptileAnimal from '../models/reptiles.js';
import BirdAnimal from '../models/birds.js';


export const getFish = async (req, res) => {
    try {
        const fish = await FishAnimal.find();
        console.log(fish);

        res.status(200).json(fish);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getMammals = async (req, res) => {
    try {
        const mammal = await MammalAnimal.find();
        console.log(mammal);

        res.status(200).json(mammal);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getReptiles = async (req, res) => {
    try {
        const reptiles = await ReptileAnimal.find();
        console.log(reptiles);

        res.status(200).json(reptiles);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getBirds = async (req, res) => {
    try {
        const birds = await BirdAnimal.find();
        console.log(birds);

        res.status(200).json(birds);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}