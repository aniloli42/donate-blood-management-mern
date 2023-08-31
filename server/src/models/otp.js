const moongoose = require("mongoose")

const Schema = moongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	otp: {
		type: Number,
		required: true,
	},
	expiredAt: {
		type: Date,
		required: true,
	},
})

module.exports = moongoose.model("otp", Schema)
