const mongoose = require("mongoose");
const mongodbUri = "mongodb://@ds131676.mlab.com:31676/twitter-clone";
mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
  auth: {
    user: "erislandio",
    password: "Er1sl@ndio"
  }
});
const conn = mongoose.connection;
conn.on("error", console.error.bind(console, "Erro!:"));

conn.once("open", () => {
  console.log("conectado a database Mlab");
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
