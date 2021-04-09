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
        const params =  req.query;
        console.log("These are parameters " + params);
        const mammal = await MammalAnimal.find( params );
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

export const getAnimals = async (req, res) => {
    try {
        const params = req.query;

        const space = params["values.space"];
        const allergies = params["values.allergies"];
        const energy = params["values.energy"];
        const size = params["values.size"];
        const attention = params["values.attention"];
        const budget = params["values.budget"];
        const emotionalSupport = params["values.emotionalSupport"];
        const smallChildren = params["values.smallChildren"];
        const cuddle = params["values.cuddle"];
        console.log(" Query starts here ----- space: " + space + " allergies: " + allergies + " energy: " + energy + " size: " + size
             + " attention: " + attention + " budget: " + budget + " emotional Support: " + emotionalSupport + " smallChildren: " + smallChildren
              + " cuddle: " + cuddle);

        const query = { "values.space" : { $lt: space }, "values.energy" : { $lt: energy },  "values.size" : { $lt: size },  "values.attention" : { $lt: attention },  "values.budget" : { $lt: budget} , "values.emotionalSupport" : emotionalSupport ,  "values.smallChildren" : smallChildren ,  "values.allergies" : allergies }; 
        const bird = await BirdAnimal.find( query );
        const mammal = await MammalAnimal.find( query );
        const fish = await FishAnimal.find( query );
        const reptile = await ReptileAnimal.find( query );
        const animals = [];
        animals.push(mammal);
        animals.push(bird);
        animals.push(fish);
        animals.push(reptile);
        
    
        res.status(200).json(animals);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}