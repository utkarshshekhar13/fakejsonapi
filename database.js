const mongoose = require("mongoose");
const databaseUrl = "mongodb://localhost:27017/fakeJsonApi";

module.exports = () => {
  mongoose.connect(databaseUrl);

  mongoose.connection.on("connected", () => {
    console.log(`Mongoose default connection is open to ${databaseUrl}`);
  });

  mongoose.connection.on("error", (error) => {
    console.log(`Mongoose default connection has occured ${error} error`);
  });

  mongoose.connection.on("disconnected", () => {
    console.log(`Mongoose default connection is disconnected`);
  });

  process.on("SIGINT", function () {
    mongoose.connection.close(function () {
      console.log(
        termination(
          "Mongoose default connection is disconnected due to application termination"
        )
      );
      process.exit(0);
    });
  });
};
