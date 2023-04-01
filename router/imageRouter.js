const router = require("express").Router();
const mongoose = require("mongoose");
const img = require("../schema/ImageSchema");
const Image = mongoose.model("Image", img);

router.post("/image", async (req, res) => {
  const image = new Image(req.body);
  try {
    await image.save();
    res.send("success");
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.get("/image", async (req, res) => {
  try {
    const image = await Image.find({});
    res.send(image.slice(0, 8));
  } catch (err) {
    res.send(err.message);
  }
});

router.get("/getImg", async (req, res) => {
  try {
    const result = await Image.find({ type: req.query.type });
    res.send(result);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
