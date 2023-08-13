const { Card, Column } = require("../Model/Model.js");
exports.getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json({
      cards,
    });
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

exports.addCard = async (req, res) => {
  // const { title, description, subtasks, status } = req.body;

  // try {
  //   await Card.create({
  //     title,
  //     description,
  //     subtasks,
  //     status,
  //   });

  //   res.status(201).json("Card Added successfully");
  // } catch (error) {
  //   res.status(400).json({ error: error.message });
  // }

  try {
    const { title, description, subtasks, status } = req.body;
    const card = await Card.create({ title, description, subtasks, status });
    const column = await Column.findOne({name:status});
    // console.log(column);
    // console.log(card._id);
    column.cardIds.push(card._id);
    await column.save();
     
    res.status(201).json("card Add sessuccfuly");
  } catch (error) {
    res.status(500).json({ error: "Unable to create card" });
  }
};

// exports.editCard = async (req, res) => {
//   try {
//     const { title, description, subtasks, status } = req.body;
//     const cardId = req.params.id;
//     await Card.findByIdAndUpdate(
//       cardId,
//       {
//         title,
//         description,
//         subtasks,
//         status,
//       },
//       { new: true } // Set to true to return the updated document
//     );
//     const column = await Column.findOne({ cardIds: cardId });
//     const column2 = await Column.find({ name: status });
//     console.log("column ",column._id);
//     console.log("column2 ",column2[0]._id);
//     await Column.findByIdAndUpdate(
//       {_id:column._id},
//       {
//         $unset: {cardIds:column2[0]._id},
//       },
//       { new: true } // Set to true to return the updated document
//     );

//     res.status(200).json("Update Card successfully");
//   } catch (err) {
//     res.status(404).json({
//       message: err.message,
//     });
//   }
// };

exports.editCard = async (req, res) => {
  try {
    const { title, description, subtasks, status } = req.body;
    const cardId = req.params.id;
    await Card.findByIdAndUpdate(
      cardId,
      {
        title,
        description,
        subtasks,
        status,
      },
      { new: true }
    );
    const originalColumn = await Column.findOne({ cardIds: cardId });
    if (originalColumn) {
      originalColumn.cardIds.pull(cardId);
      await originalColumn.save();
    }

    let newColumn = await Column.findOne({ name: status });
    newColumn.cardIds.push(cardId);
    await newColumn.save();

    res.status(200).json("Update Card successfully");
  } catch (err) {
    res.status(500).json({
      error: "Unable to update card",
    });
  }
};
