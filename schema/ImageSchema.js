const mongoose = require("mongoose");
const { Schema } = mongoose;
const image = Schema({
  img: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

module.exports = image;
