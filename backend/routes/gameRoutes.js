const express = require("express");

const router = express.Router();

const championController = require("../controllers/championController");
const itemController = require("../controllers/itemController");
const oldItemController = require("../controllers/oldItemController");
const hpGuessController = require("../controllers/hpGuessController");

router.get("/champions", hpGuessController.GetAllHpCharacters);
router.get("/items", itemController.GetAllItems);
router.get("/oldItems", oldItemController.GetAllItems);

module.exports = router;
