const mongoose = require("mongoose");
const { Schema } = mongoose;

const memberSchema = new Schema({
  member: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  fname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = memberSchema;
