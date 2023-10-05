const express = require("express");
const router = express.Router();

const gameController = require("../controllers/game.controller");

router.route("/").get(gameController.getAll);

module.exports = router;
