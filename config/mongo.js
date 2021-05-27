const mongoose = require("mongoose");

module.exports = mongoose.connect("mongodb://localhost/contacts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});
