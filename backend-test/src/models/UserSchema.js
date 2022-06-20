const mongoose = require('mongoose')

const UserLoginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    default: true,
  },
})

module.exports = mongoose.model("User", UserLoginSchema)