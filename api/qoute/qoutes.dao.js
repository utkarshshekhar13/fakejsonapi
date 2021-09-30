const mongoose = require("mongoose");
const quoteSchema = require("./qoute.model");

quoteSchema.statics = {
  //Never use fat arrow, as this won't have the correct scope

  create: function (data, cb) {
    let public = new this(data);
    public.save(cb);
  },

  get: function (data, cb) {
    this.find(query, cb);
  },

  update: function (query, updateData, cb) {
    this.updateOne(query, { $set: updateData }, { new: true }, cb);
  },

  delete: function (query, cb) {
    this.deleteOne(query, cb);
  },
};

const quoteModel = mongoose.model("Quote", quoteSchema);
module.exports = quoteModel;
