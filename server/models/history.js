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
	},
	createdBy: {
		type: moongoose.Schema.Types.ObjectId,
		ref: "users",
	},
})

module.exports = moongoose.model("requests", Schema)
