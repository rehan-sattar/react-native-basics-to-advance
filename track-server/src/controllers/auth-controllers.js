const mongoose = require("mongoose")
const User = mongoose.model("User")
const jwt = require("jsonwebtoken")

const signup = async (req, res) => {
  try {
    const { email, password } = req.body
    const user$ = new User({ email, password })
    await user$.save()
    const token = jwt.sign({ userId: user$._id }, "MY_SECRET_ID")

    res.status(200).send({ token })
  } catch (error) {
    return res.status(422).send(error.message)
  }
}

const signin = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password)
    return res
      .status(422)
      .send({ message: "You must provide email and password" })
  const user = await User.findOne({ email })
  if (!user)
    return res.status(422).send({ message: "Invalid email or password" })

  try {
    await user.comparePassword(password)
    const token = jwt.sign({ userId: user._id }, "MY_SECRET_ID")
    return res.status(200).send({ token })
  } catch (err) {
    return res.status(422).send({ message: "Invalid email or password" })
  }
}
module.exports = {
  signup,
  signin
}
