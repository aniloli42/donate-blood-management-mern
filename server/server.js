const express = require("express")
const app = express()
const cors = require("cors")
const moongoose = require("mongoose")

require("dotenv").config()

const port = 4001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const url = process.env.DB_URL

moongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

moongoose.connection.on("error", (err) => {
	console.log(err)
})

moongoose.connection.once("open", () => {
	console.log("Connected to database")
})

//  imports
const history = require("./routes/history")
const auth = require("./routes/auth")
const requests = require("./routes/requests")
const otp = require("./routes/otp")

// routes
app.use("/auth", auth)
app.use("/history", history)
app.use("/requests", requests)
app.use("/otp", otp)

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})
