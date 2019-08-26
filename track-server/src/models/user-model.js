const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

// hashing and salting for password.
schema.pre("save", function(next) {
  const user = this
  if (!user.isModified("password")) return next()
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err)
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err)
      user.password = hash
      next()
    })
  })
})

// password checking

schema.methods.comparePassword = function(candidatePassword) {
  return new Promise((resolve, reject) => {
    const user = this
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
      if (err) return reject(err)
      if (!isMatch) return reject(false)
      return resolve(true)
    })
  })
}

module.exports = mongoose.model("User", schema)
