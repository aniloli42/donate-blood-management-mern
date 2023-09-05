require('dotenv/config')
const express = require('express')
const app = express()
const cors = require('cors')
const { dbConnection } = require('./connection/db')
const { rateLimit } = require('express-rate-limit')

const ALLOWED_ORIGIN = process.env.CORS_DOMAIN
if (!ALLOWED_ORIGIN) throw new Error(`CORS Origin not found`)

console.info(`Domain pointed to ${ALLOWED_ORIGIN}`)
const CORS_TIMEOUT = 360_000
app.use(
  cors({
    origin: ALLOWED_ORIGIN,
    maxAge: CORS_TIMEOUT,
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true
  })
)

const EXPIRE_IN = 60_000
const TOTAL_ALLOW_REQUESTS = 30

const limiter = rateLimit({
  windowMs: EXPIRE_IN,
  max: TOTAL_ALLOW_REQUESTS,
  standardHeaders: 'draft-7',
  legacyHeaders: false
})

// api rate limiting
app.use(limiter)
app.set('trust proxy', process.env.TRUST_PROXY_LEVEL ?? 1)

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
  console.info(`Server running on port ${port}`)
})
