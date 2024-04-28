const express = require("express");

const router = express.Router();

const hpGuessController = require("../controllers/hpGuessController");

router.get("/allHpCharacters", hpGuessController.GetAllHpCharacters);

module.exports = router;
