const { Column } = require("../Model/Model.js");

exports.addColumn = async (req, res) => {
  try {
    const { name } = req.body;
    await Column.create({ name });
    res.status(201).json("Column Added successfully");
  } catch (error) {
    res.status(500).json({ error: "Unable to create column" });
  }
};

exports.getAllColumn = async (req, res) => {
  try {
    const columns = await Column.find();
    res.status(200).json({
      columns,
    });
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};
