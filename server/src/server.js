require('dotenv/config')
const express = require('express')
const app = express()
const cors = require('cors')
const { dbConnection } = require('./connection/db')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome To Donate Blood Server' })
})

const port = process.env.PORT ?? 5000

dbConnection()

//  imports
const otp = require('./routes/otp')
const auth = require('./routes/auth')
const profile = require('./routes/profile')
const history = require('./routes/history')
const requests = require('./routes/requests')

// routes
app.use('/otp', otp)
app.use('/auth', auth)
app.use('/profile', profile)
app.use('/history', history)
app.use('/requests', requests)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
