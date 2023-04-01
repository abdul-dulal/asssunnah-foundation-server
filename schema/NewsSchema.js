const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const newsSchem = Schema({
  title: {
    type: String,
  },
  img: {
    type: String,
  },
  desc: {
    type: String,
  },
  img2: {
    type: String,
  },
  desc2: {
    type: String,
  },
  img3: {
    type: String,
  },
  desc3: {
    type: String,
  },
  img4: {
    type: String,
  },
  desc4: {
    type: String,
  },
});

module.exports = newsSchem;
