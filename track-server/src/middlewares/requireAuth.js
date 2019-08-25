const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = mongoose.model('User')

module.exports = (req, res, next) => {
  const { authorization } = req.headers
  console.log('Authorization : ', authorization)
  if (!authorization) {
    res.status(422).send({ error: 'You must logged in!!' })
    return
  }
  const token = authorization.split(' ')[1]
  jwt.verify(token, 'MY_SECRET_ID', async (err, info) => {
    if (err) {
      res.status(422).send({ error: 'You must logged in!!' })
      return
    }
    const user = await User.findOne({ _id: info.userId })
    req.user = user
    console.log(user)
    next()
  })
}
