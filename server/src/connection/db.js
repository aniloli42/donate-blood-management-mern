import mongoose from 'mongoose'

const url = process.env.DB_URL

const dbConnection = () => {
  console.log('Connecting To Database....')
  mongoose.connect(url)
  mongoose.connection.on('error', err => console.log(err.message))
  mongoose.connection.once('open', () => console.log('Connected to database'))
}

export { dbConnection }
