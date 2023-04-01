const router = require("express").Router();
const mongoose = require("mongoose");
const newsSchem = require("../schema/NewsSchema");
const News = mongoose.model("new", newsSchem);

router.get("/news", async (req, res) => {
  try {
    const result = await News.find({});
    res.send(result);
  } catch (err) {
    res.send(err.message);
  }
});

router.get("/news_details/:id", async (req, res) => {
  try {
    const newsDetails = await News.findById({ _id: req.params.id });
    res.send(newsDetails);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
