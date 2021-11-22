const moongoose = require("mongoose")

const Schema = moongoose.Schema({
	donatedAt: {
		type: Date,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	remarks: {
		type: String,
		required: true,
		default: "",
	},
	createdBy: {
		type: moongoose.Schema.Types.ObjectId,
		ref: "users",
	},
	status: {
		type: Boolean,
		required: true,
		default: false,
	},
})

module.exports = moongoose.model("requests", Schema)
