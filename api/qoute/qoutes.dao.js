const mongoose = require("mongoose");
const quoteSchema = require("./qoute.model");

quoteSchema.statics = {
  //Never use fat arrow, as this won't have the correct scope

  create: function (data, cb) {
    let public = new this(data);
    public.save(cb);
  },

  get: function (query, cb) {
    this.find(query, cb);
  },

  updateDataById: function (query, updateData, cb) {
    this.updateOne(query, { $set: updateData }, { new: true }, cb);
  },

  deleteDataById: function (query, cb) {
    this.deleteOne(query, cb);
  },
};

const quoteModel = mongoose.model("Quote", quoteSchema);
module.exports = quoteModel;
