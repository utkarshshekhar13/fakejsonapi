const Quote = require("./qoutes.dao");

exports.createQuoteAuthor = function (req, res, next) {
  let quoteData = {
    quote: req.body.quote,
    author: req.body.author,
  };

  Quote.create(quoteData, (error, data) => {
    if (error) {
      res.status(400).json({
        status: 400,
        error: error,
      });
    }
    res.status(200).json({
      status: 200,
      data: data,
    });
  });
};

exports.getAllQuotesAuthors = function (req, res, next) {
  Quote.get({}, (error, quotes) => {
    if (error) {
      res.status(400).json({ status: 400, error: error });
    }

    res.status(200).json({ status: 200, quotes: quotes });
  });
};

exports.updateQuoteAuthorById = function (req, res, next) {
  let quoteData = {
    quote: req.body.quote,
    author: req.body.author,
  };

  Quote.updateDataById({ _id: req.body.id }, quoteData, (error, data) => {
    if (error) {
      res.status(400).json({ status: 400, error: error });
    }

    if ((data.modifiedCount && data.matchedCount) == 1) {
      res
        .status(200)
        .json({ status: 200, data: data, message: "Updated Successfully" });
    } else {
      res
        .status(404)
        .json({
          status: 404,
          message: "No Record Found with the corresponding id to update",
        });
    }
  });
};

exports.deleteQuoteAuthorById = function (req, res, next) {
  Quote.deleteDataById({ _id: req.body.id }, (error, data) => {
    if (error) {
      res.status(400).json({ status: 400, error: error });
    }

    if (data.deletedCount == 1) {
      res
        .status(200)
        .json({ status: 200, data: data, message: "Deleted Successfully" });
    } else {
      res.status(404).json({
        status: 404,
        message: "No Record Found with corresponding id to delete",
      });
    }
  });
};
