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
        const params = req.query;
        console.log("These are parameters " + params);
        const mammal = await MammalAnimal.find(params);
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
        var params = req.query;

        var space = params["values.space"];
        var allergies = params["values.allergies"];
        var energy = params["values.energy"];
        var size = params["values.size"];
        var attention = params["values.attention"];
        var budget = params["values.budget"];
        var emotionalSupport = params["values.emotionalSupport"];
        var smallChildren = params["values.smallChildren"];
        var cuddle = params["values.cuddle"];

        //making sure all values are passed from the quiz questions
        console.log(" Query starts here ----- space: " + space + " allergies: " + allergies + " energy: " + energy + " size: " + size
            + " attention: " + attention + " budget: " + budget + " emotional Support: " + emotionalSupport + " smallChildren: " + smallChildren
            + " cuddle: " + cuddle);

        //Query that will be used depending on allergies or smallChildren in the home or emotional support
        //The user might answer no to these but the system will still show animals that could give allergies or be friendly around children
        //or might be able to give emotional support
        var query = {};
        if (allergies == true && smallChildren == true && emotionalSupport == true) {
            query = {
                "values.space": { $lte: space }, "values.allergies": allergies, "values.energy": { $lte: energy }, "values.size": { $lte: size },
                "values.attention": { $lte: attention }, "values.emotionalSupport": emotionalSupport, "values.budget": { $lte: budget }, "values.smallChildren": smallChildren,
                "values.cuddle": cuddle
            };
        } else if (allergies == true && smallChildren == true && emotionalSupport == false) {
            query = {
                "values.space": { $lte: space }, "values.allergies": allergies, "values.energy": { $lte: energy }, "values.size": { $lte: size },
                "values.attention": { $lte: attention }, "values.budget": { $lte: budget }, "values.smallChildren": smallChildren,
                "values.cuddle": cuddle
            };
        } else if (allergies == true && smallChildren == false && emotionalSupport == true) {
            query = {
                "values.space": { $lte: space }, "values.allergies": allergies, "values.energy": { $lte: energy }, "values.size": { $lte: size },
                "values.attention": { $lte: attention }, "values.emotionalSupport": emotionalSupport, "values.budget": { $lte: budget },
                "values.cuddle": cuddle
            };
        } else if (allergies == true && smallChildren == false && emotionalSupport == false) {
            query = {
                "values.space": { $lte: space }, "values.allergies": allergies, "values.energy": { $lte: energy }, "values.size": { $lte: size },
                "values.attention": { $lte: attention }, "values.budget": { $lte: budget },
                "values.cuddle": cuddle
            };
        } else if (allergies == false && smallChildren == true && emotionalSupport == true) {
            query = {
                "values.space": { $lte: space }, "values.energy": { $lte: energy }, "values.size": { $lte: size },
                "values.attention": { $lte: attention }, "values.emotionalSupport": emotionalSupport, "values.budget": { $lte: budget }, "values.smallChildren": smallChildren,
                "values.cuddle": cuddle
            };
        } else if (allergies == false && smallChildren == false && emotionalSupport == true) {
            query = {
                "values.space": { $lte: space }, "values.energy": { $lte: energy }, "values.size": { $lte: size },
                "values.attention": { $lte: attention }, "values.emotionalSupport": emotionalSupport, "values.budget": { $lte: budget },
                "values.cuddle": cuddle
            };
        } else if (allergies == false && smallChildren == true && emotionalSupport == false) {
            query = {
                "values.space": { $lte: space }, "values.allergies": allergies, "values.energy": { $lte: energy }, "values.size": { $lte: size },
                "values.attention": { $lte: attention }, "values.emotionalSupport": emotionalSupport, "values.budget": { $lte: budget }, "values.smallChildren": smallChildren,
                "values.cuddle": cuddle
            };
        } else {
            query = {
                "values.space": { $lte: space }, "values.energy": { $lte: energy }, "values.size": { $lte: size },
                "values.attention": { $lte: attention }, "values.budget": { $lte: budget },
                "values.cuddle": cuddle
            };
        }

        console.log(query);
        var bird = await BirdAnimal.find(query);
        var mammal = await MammalAnimal.find(query);
        var fish = await FishAnimal.find(query);
        var reptile = await ReptileAnimal.find(query);
        var animals = [];
        animals.push(mammal);
        animals.push(bird);
        animals.push(fish);
        animals.push(reptile);

        console.log(animals);
        res.status(200).json(animals);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}