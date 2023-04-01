const mongoose = require("mongoose");
const { Schema } = mongoose;

const donateSchema = Schema({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = donateSchema;
