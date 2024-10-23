const mongoose = require("mongoose");

const product = new mongoose.Schema({
  // productName: {
  //   type: String,
  //   required: true,
  // },
  // productDesc: {
  //   type: String,
  //   required: true,
  // },
  img: {
    type: String,
    required: true,
  },
});

const productSchema = mongoose.model("product", product);

module.exports = productSchema;