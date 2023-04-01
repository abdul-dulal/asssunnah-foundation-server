const mongoose = require("mongoose");
const { Schema } = mongoose;

const checkoutSchem = Schema({
  category: {
    type: String,
  },
  amaount: {
    type: Number,
  },
  email: {
    type: String,
  },
});

module.exports = checkoutSchem;
