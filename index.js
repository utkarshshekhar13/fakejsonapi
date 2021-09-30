const express = require("express");
const app = express();
const router = express.Router();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const database = require("./database");
database();

const quoteRoute = require("./api/qoute/qoute.routes");

app.use("/api", router);
quoteRoute(router);

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization"
  );
  next();
});

app.get("/", (req, res) => {
  res.json({ status: 200, message: "This is home route" });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
