require("dotenv").config()
const User = require("../models/user")
const History = require("../models/history")

const getHistory = async (req, res) => {
	try {
		const { id } = req.user

		const history = History.find({ createdBy: id })

		if (!history)
			return res
				.status(200)
				.json({ message: "No Any Donation History Available!" })

		res.status(200).json({ history })
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

const createHistory = async (req, res) => {}
const updateHistory = async (req, res) => {
	try {
		const { id } = req.user
		const { id: historyId, donatedAt, location, remarks, status } = req.body

		const history = await History.findOne({ id: historyId, createdBy: id })

		if (!history)
			return res.status(400).json({ message: "Invalid Update Request" })

		history.donatedAt = donatedAt
		history.location = location
		history.remarks = remarks
		history.status = status

		await history.save()

		res.status(200).json({ message: "History Updated" })
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

const deleteHistory = async (req, res) => {}

module.exports = {
	getHistory,
	createHistory,
	updateHistory,
	deleteHistory,
}
