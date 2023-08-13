const express = require("express");
const controller = require("../Controller/Controller");
const router = express.Router();

router.route("/cards").get(controller.getAllCards);
router.route("/add-card").post(controller.addCard);
router.route("/edit-card/:id").patch(controller.editCard);

module.exports = router;
