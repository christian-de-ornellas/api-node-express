const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://christian:EkAhsfE2J0QBFLfA@cluster0.l8jig.mongodb.net/expertDeveloper?retryWrites=true&w=majority"
);

mongoose.Promise = global.Promise;

module.exports = mongoose;
