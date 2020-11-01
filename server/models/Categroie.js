const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CategorySchema = new Schema({
  name: {
    type: String,
  },
  parent: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
  },
});

module.exports = Category = mongoose.model("Category", CategorySchema);
