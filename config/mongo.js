const mongoose = require("mongoose");

// const db = () => {
module.exports = mongoose.connect("mongodb://localhost/contacts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});
// };

// module.exports = db;
