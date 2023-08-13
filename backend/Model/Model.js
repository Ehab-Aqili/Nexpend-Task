const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

const cardSchema = new mongoose.Schema({
  title: String,
  description: String,
  subtasks: Array,
  status: String,
});

const columnSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cardIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Card",
    },
  ],
});

const Column = mongoose.model("Column", columnSchema);
const Card = mongoose.model("Card", cardSchema);

mongoose
  .connect(process.env.CONN_STR, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.error("Mongoose connection error:", err);
  });

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

module.exports = { Card, Column }; 
