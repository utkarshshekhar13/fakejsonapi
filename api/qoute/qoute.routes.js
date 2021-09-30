const Quote = require("./qoute.controller");

module.exports = (router) => {
  router.post("/createQuote", Quote.createQuote);
};
