const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const routes = require("./Routers/Route");
const columnRoutes = require("./Routers/colRoute");

app.use(cors());
app.use(express.json());

app.use("/", routes);
app.use("/column", columnRoutes);

app.listen(process.env.PORT, (req, res) => {
  console.log("http://127.0.0.1:8080");
});
