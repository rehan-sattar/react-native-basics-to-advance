const mongoose = require('mongoose')
const User = mongoose.model('User')
const jwt = require('jsonwebtoken')

const signup = async (req, res) => {
  try {
    const { email, password } = req.body
    const user$ = new User({ email, password })
    await user$.save()
    const token = jwt.sign({ userId: user$._id }, 'MY_SECRET_ID')

    res.status(200).send({ token })
  } catch (error) {
    return res.status(422).send(error.message)
  }
}

module.exports = {
  signup
}
