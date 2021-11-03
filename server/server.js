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
const data = require("./routes/data")
const auth = require("./routes/auth")

// routes
app.use("/auth", auth)
app.use("/data", data)

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})
