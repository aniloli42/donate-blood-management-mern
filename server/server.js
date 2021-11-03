const express = require("express")
const app = express()
const cors = require("cors")

const port = 5000

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})

app.use(express.json())
app.use(cors())

//  imports
const data = require("./routes/data")
const auth = require("./routes/auth")

// routes
app.use("/auth", auth)
app.use("/data", data)
