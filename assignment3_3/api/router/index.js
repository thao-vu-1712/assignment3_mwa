const express = require("express");
const router = express.Router();

const controller = require("../controller");

router.route("/students").get(controller.getAll);

router.route("/students/:index").get(controller.getByIndex);

module.exports = router;