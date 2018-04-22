const mongoose = require("mongoose");

const User = new mongoose.Schema({
  first_name: { type: String, required: true, trim: true },
  last_name: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  state: { type: String, required: true, trim: true },
  zipcode: { type: String, required: true, trim: true }
});

module.exports = mongoose.model("MongoUser", User);
