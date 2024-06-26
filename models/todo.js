const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    enum: ["なし", "低", "中", "高"],
  },
  memo: {
    type: String,
    required: false,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
