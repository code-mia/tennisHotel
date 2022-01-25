const express = require('express');
const app = express();
const router = express.Router();
const reservationController = require("../Controller/reservationController.js");

router.route("/").get(reservationController.getAllReservation).post(reservationController.createReservation);
router.route("/valider").get(reservationController.getReservationNotValid).post(reservationController.validateReservation);
router.route('/supprimer/:id').get(reservationController.deleteReservation)
router.route("/:id").get(reservationController.getReservationById);
module.exports = router;