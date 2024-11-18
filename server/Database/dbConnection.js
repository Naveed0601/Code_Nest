const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "Code_Snippet",
    })
    .then(() => {
      console.log("DataBase is Connected");
    })
    .catch(() => {
      console.log("Some Error occur");
    });
};

module.exports = dbConnection;
