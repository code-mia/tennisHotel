const Hebergement = require("../Model/Hebergement.js");


exports.getAllHebergement = async (req, res, next) => {
    try {
        const hebergements = await Hebergement.findAll();
        res.status(200).json({hebergements});
        console.log(hebergements);
    } catch(error) {
        console.log(error);
        next(error);
    }
};
exports.getHebergementById = async (req, res, next) => {
    try {
        let hebergementId = req.params.id;
        let[hebergement, _] = await Hebergement.findById(hebergementId);
        res.status(200).json({hebergement});
    } catch(error) {
        console.log(error);
        next(error);
    }
};
exports.getHebergementResearch = async (req, res, next) => {
    try {
        let {word} = req.body;
        let[hebergement, _] = await Hebergement.research(word);
        res.status(200).json({hebergement});
    } catch(error) {
        console.log(error);
        next(error);
    }
};
exports.getHebergementNotValid = async (req, res, next) => {
    try {
        const hebergements = await Hebergement.findAllNotValid();
        res.status(200).json({hebergements});
        console.log(hebergements);
    } catch(error) {
        console.log(error);
        next(error);
    }
};

exports.createHebergement = async (req, res, next) => {
    try {
        let {nom,localisation,nombreEtoiles,capacite,services,description} = req.body;
        let hebergement = new Hebergement(nom,localisation,nombreEtoiles,capacite,services,description);
        hebergement = await hebergement.save();
        res.status(201).json({message : "Hebergement créer"});
    } catch(error) {
        console.log(error);
        next(error);
    }
};

exports.validateHebergement = async (req, res, next) => {
    try {
        let {idhebergement} = req.body;
        let[hebergement, _] = await Hebergement.valider(idhebergement);
        res.status(200).json({hebergement});
    } catch(error) {
        console.log(error);
        next(error);
    }
};
exports.updateHebergement = async (req, res, next) => {
    try {
        let idhebergement = req.params.id;
        let {capacite} = req.body;
        let[hebergement, _] = await Hebergement.majCapacite(idhebergement,capacite);
        res.status(200).json({hebergement});
    } catch(error) {
        console.log(error);
        next(error);
    }
};
exports.deleteHebergement = async (req, res, next) => {
    try {
        let {idhebergement} = req.body;
        let[hebergement, _] = await Hebergement.delete(idhebergement);
        res.status(200).json({hebergement});
    } catch(error) {
        console.log(error);
        next(error);
    }
};