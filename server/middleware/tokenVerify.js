const jwt = require("jsonwebtoken")

function tokenVerify(req, res, next) {
	const Header = req.headers["authorization"]

	if (typeof Header === "undefined")
		return res.status(400).json({ message: "Access denied" })

	const token = Header.split(" ")[1]

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, authData) => {
		if (err) return res.status(403).json({ message: "Access denied" })
		req.user = authData
		next()
	})
}

module.exports = tokenVerify
