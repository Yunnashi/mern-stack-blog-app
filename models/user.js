const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "usernameは必須です"],
  },
  password: {
    type: String,
    required: [true, "passwordは必須です"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
