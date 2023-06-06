const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: Number,
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("contactSchema", contactSchema);
