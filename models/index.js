const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;

mongoose.connect(
  "mongodb://warbler:warbler5171@ds163020.mlab.com:63020/warbler",
  {
    useNewUrlParser: true,
    keepAlive: true
  }
);

module.exports.User = require("./user");
module.exports.Message = require("./message");
