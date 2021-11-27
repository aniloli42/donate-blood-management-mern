const moongoose = require("mongoose")

const schema = moongoose.Schema({
	token: {
		type: String,
		required: true,
		unqiue: true,
	},
	assign: {
		type: moongoose.Schema.Types.ObjectId,
		ref: "users",
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
})

module.exports = moongoose.model("token", schema)
