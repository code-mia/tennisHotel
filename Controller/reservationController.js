const Reservation = require("../Model/Reservation.js");


exports.getAllReservation = async (req, res, next) => {
    try {
        const reservations = await Reservation.findAll();
        res.status(200).json({reservations});
        console.log(reservations);
    } catch(error) {
        console.log(error);
        next(error);
    }
};
exports.getReservationById = async (req, res, next) => {
    try {
        let reservationId = req.params.id;
        let[reservation, _] = await Reservation.findById(reservationId);
        res.status(200).json({reservation});
    } catch(error) {
        console.log(error);
        next(error);
    }
};
exports.getReservationNotValid = async (req, res, next) => {
    try {
        const reservations = await Reservation.findAllNotValid();
        res.status(200).json({reservations});
        console.log(reservations);
    } catch(error) {
        console.log(error);
        next(error);
    }
};

exports.createReservation = async (req, res, next) => {
    try {
        let {idhebergement,nbrpersonne,datedebut,datefin,nom,vip} = req.body;
        let reservation = new Reservation(idhebergement,nbrpersonne,datedebut,datefin,nom,vip);
        reservation = await reservation.save();
        res.status(201).json({message : "Reservation créer"});
    } catch(error) {
        console.log(error);
        next(error);
    }
};

exports.validateReservation = async (req, res, next) => {
    try {
        let {idreservation} = req.body;
        let[reservation, _] = await Reservation.valider(idreservation);
        res.status(200).json({reservation});
    } catch(error) {
        console.log(error);
        next(error);
    }
};

exports.deleteReservation = async (req, res, next) => {
    try {
        let idreservation = req.params.id;;
        let[reservation, _] = await Reservation.delete(idreservation);
        res.status(200).json({reservation});
    } catch(error) {
        console.log(error);
        next(error);
    }
};