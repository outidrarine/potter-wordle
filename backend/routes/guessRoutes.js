const express = require("express");

const router = express.Router();

const hpGuessController = require("../controllers/hpGuessController");

router.post("/guess", hpGuessController.Guess);

module.exports = router;
