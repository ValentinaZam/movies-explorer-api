const bcrypt = require("bcryptjs");
const { isEmail } = require("validator");
const mongoose = require("mongoose");
const { INVALID_AUTH_CREDENTIALS } = require("../utils/constants");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => isEmail(value),
      message: "Неправильный формат почты",
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email })
    .select("+password")
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error(INVALID_AUTH_CREDENTIALS));
      }
      return bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          return Promise.reject(new Error(INVALID_AUTH_CREDENTIALS));
        }
        return user;
      });
    });
};

const User = mongoose.model("user", userSchema);
module.exports = User;
