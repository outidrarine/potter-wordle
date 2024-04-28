const express = require("express");

const router = express.Router();

const championController = require("../controllers/championController");
const hpGuessController = require("../controllers/hpGuessController");

router.get("/champions", hpGuessController.GetAllHpCharacters);

module.exports = router;
