const router = require("express").Router();
const mongoose = require("mongoose");
const donateSchema = require("../schema/Donateschema");
const Doante = mongoose.model("donate", donateSchema);

router.get("/donate", async (req, res) => {
  try {
    const donate = await Doante.find({});
    res.send(donate);
  } catch (err) {
    res.send(err.message);
  }
});

router.get("/:category", async (req, res) => {
  try {
    const data = await Doante.findOne({ category: req.params.category });
    res.send(data);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
