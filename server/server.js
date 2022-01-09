const express = require("express")
const app = express()
const cors = require("cors")
const moongoose = require("mongoose")

require("dotenv").config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome To Donate Blood Server" })
})

const port = process.env.PORT || 4001

const url = process.env.DB_URL

moongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

moongoose.connection.on("error", (err) => {
  console.log(err)
})

moongoose.connection.once("open", () => {
  console.log("Connected to database")
})

//  imports
const otp = require("./routes/otp")
const auth = require("./routes/auth")
const profile = require("./routes/profile")
const history = require("./routes/history")
const requests = require("./routes/requests")
const axios = require("axios")

// routes
app.use("/otp", otp)
app.use("/auth", auth)
app.use("/profile", profile)
app.use("/history", history)
app.use("/requests", requests)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

// for keep server live on heroku

const keepLive = async () => {
  try {
    await axios.get("https://donate-blood-server.herokuapp.com/")
  } catch (error) {
    console.log(error)
  }
}

setInterval(() => {
  keepLive()
}, 900000)
