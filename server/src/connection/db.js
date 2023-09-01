const moongoose = require('mongoose')
const url = process.env.DB_URL

const dbConnection = () => {
  moongoose.set('strict', true)
  moongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

  moongoose.connection.on('error', err => console.log(err))
  moongoose.connection.once('open', () => console.log('Connected to database'))
}

module.exports = { dbConnection }
