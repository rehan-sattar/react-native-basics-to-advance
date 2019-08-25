require('../src/models/user-model')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('../src/routes/auth-routes')
const requireAuth = require('./middlewares/requireAuth')

const mongoUri =
  'mongodb+srv://admin:adminadmin@cluster0-ms10h.mongodb.net/test?retryWrites=true&w=majority'

const app = express()
app.use(bodyParser.json())
app.use('/auth', authRoutes)

const PORT = 8080 || process.env.PORT

// database connection.
mongoose.connect(
  mongoUri,
  { useNewUrlParser: true, useCreateIndex: true },
  err => {
    if (err) return
    console.log('database connected successfully.')
  }
)

app.get('/', requireAuth, (req, res) => {
  res.send(`your email is: ${req.user.email}`)
})

app.listen(PORT, err => {
  if (err) return
  console.log('server started on port 8080.')
})
