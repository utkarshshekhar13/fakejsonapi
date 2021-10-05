const Quote = require("./qoute.controller");

module.exports = (router) => {
  router.post("/createQuoteAuthor", Quote.createQuoteAuthor);
  router.get("/getAllQuotesAuthors", Quote.getAllQuotesAuthors);
  router.put("/updateQuoteAuthorById", Quote.updateQuoteAuthorById);
  router.delete("/deleteQuoteAuthorById", Quote.deleteQuoteAuthorById);
};


