const express = require("express");
const router = express.Router();

const controller = require("../controller")
router.route("/:first").get(controller.multiply);

module.exports = router;