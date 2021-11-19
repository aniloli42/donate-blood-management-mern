const moongoose = require("mongoose")

const Schema = moongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	bloodType: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	phone: {
		type: number,
		required: true,
	},
	requestedAt: {
		type: Date,
		default: Date.now,
	},
	requestedBy: {
		type: moongoose.Schema.Types.ObjectId,
		ref: "users",
	},
	status: {
		type: Boolean,
		default: false,
	},
})

module.exports = moongoose.model("requests", Schema)
