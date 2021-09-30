const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const database = require("./database");
database();

express.urlencoded({ extended: false });
express.json();

app.get("/", (req, res) => {
  res.json({ status: 200, message: "This is home route" });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
