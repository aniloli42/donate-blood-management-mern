const moongoose = require("mongoose")

const Schema = moongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	bloodType: {
		type: String,
		required: true,
	},
	temporaryAddress: {
		type: String,
		required: true,
	},
	permanentAddress: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
})

module.exports = moongoose.model("users", Schema)
