const express = require("express");
const columnRoutes = express.Router();
const columnController = require("../Controller/colController");

columnRoutes.route("/add-column").post(columnController.addColumn);
columnRoutes.route("/get-column").get(columnController.getAllColumn);

module.exports = columnRoutes;