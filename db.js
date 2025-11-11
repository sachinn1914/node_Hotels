const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/HOTELS"; // url to connect mongodb database

mongoose.connect(mongoURL, {
  useNewUrlParser: true, //useNewUrlParser: true: This option was used to explicitly tell Mongoose to use the new URL string parser for MongoDB connection strings.///
  useUnifiedTopology: true, //This option enabled the new Server Discovery and Monitoring engine in the MongoDB Node.js driver. //
  /// if we sdont use this parameters we cant connect to db//
});

const db = mongoose.connection; //connnectiion

db.on("connected", () => {
  console.log("mongo is connected"); // shows us an mongo is connected //
});

db.on("error", () => {
  console.log("an error is occured"); // shows erroe//
});

db.on("disconnected", () => {
  console.log("mongo is disconnectd"); //shows us mongo is diconnected
});

//export to data base connection//
module.exports = db;
