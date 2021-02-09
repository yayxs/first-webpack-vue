module.exports = (app) => {
  const mongoose = require("mongoose");
  const db = require("../config/db.config").mongoURI;
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`MongoDB Connected`))
    .catch((err) => console.log(err));
};
