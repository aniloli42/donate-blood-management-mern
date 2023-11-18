import compression from 'compression'
import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import { rateLimit } from 'express-rate-limit'
import helmet from 'helmet'
import { dbConnection } from './connection/db.js'
import auth from './routes/auth.js'
import history from './routes/history.js'
import otp from './routes/otp.js'
import profile from './routes/profile.js'
import requests from './routes/requests.js'

const ALLOWED_ORIGIN = process.env.CORS_DOMAIN
if (!ALLOWED_ORIGIN) throw new Error(`CORS Origin not found`)
console.info(`Domain pointed to ${ALLOWED_ORIGIN}`)

const app = express()

const CORS_TIMEOUT = 360_000
app.use(
  cors({
    origin: ALLOWED_ORIGIN,
    maxAge: CORS_TIMEOUT,
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true
  })
)

app.use(helmet())
app.use(compression())

const RESET_LIMIT_TIMER = +process.env.RESET_LIMIT_TIMER ?? 60_000
const LIMITED_REQUEST_ALLOWED = +process.env.LIMITED_REQUEST_ALLOWED ?? 60

const limiter = rateLimit({
  windowMs: RESET_LIMIT_TIMER,
  max: LIMITED_REQUEST_ALLOWED,
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

// routes
app.use('/otp', otp)
app.use('/auth', auth)
app.use('/profile', profile)
app.use('/history', history)
app.use('/requests', requests)

app.listen(port, () => {
  console.info(`Server running on port ${port}`)
})
