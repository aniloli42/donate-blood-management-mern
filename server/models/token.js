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
})

module.exports = moongoose.model("token", schema)
