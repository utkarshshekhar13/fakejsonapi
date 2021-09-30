const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let quoteSchema = new Schema(
  {
    quote: {
      type: String,
      required: true,
      unique: false,
    },

    author: {
      type: String,
      required: true,
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = quoteSchema;
