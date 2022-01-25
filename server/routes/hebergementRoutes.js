const express = require('express');
const app = express();
const router = express.Router();
const hebergementController = require("../Controller/hebergementController.js");

router.route("/recherche").get(hebergementController.getHebergementResearch);
router.route("/").get(hebergementController.getAllHebergement).post(hebergementController.createHebergement);
router.route("/valider").get(hebergementController.getHebergementNotValid).post(hebergementController.validateHebergement);
router.route('/supprimer').post(hebergementController.deleteHebergement)
router.route("/:id").get(hebergementController.getHebergementById).post(hebergementController.updateHebergement);

module.exports = router;