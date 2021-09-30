const Quote = require("./qoutes.dao");

exports.createQuote = function (req, res, next) {
  let quoteData = {
    quote: req.body.quote,
    author: req.body.author,
  };

  Quote.create(quoteData, (error, quote) => {
    if (error) {
      res.status(400).json({
        status: 400,
        error: error,
      });
    }
    res.status(200).json({
      status: 200,
      quote: quote,
    });
  });
};
