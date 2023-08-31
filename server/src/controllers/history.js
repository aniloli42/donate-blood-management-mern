const History = require("../models/history");

const getHistorys = async (req, res) => {
  try {
    const { id } = req.user;

    const history = await History.find({ createdBy: id }).sort({
      donatedAt: -1,
    });

    if (!history)
      return res
        .status(200)
        .json({ message: "No Any Donation History Available!" });

    res.status(200).json({ history });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getHistory = async (req, res) => {
  try {
    const { id } = req.params;

    const history = await History.findOne({ _id: id, createdBy: req.user.id });

    if (!history) return res.status(400).json({ message: "Invalid History" });

    res.status(200).json({ history });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createHistory = async (req, res) => {
  try {
    const { donatedAt, location, remarks } = req.body;
    const { id } = req.user;

    const oldHistory = await History.find({ createdBy: id });

    if (oldHistory) {
      const result = oldHistory.some(
        (history) =>
          new Date(history.donatedAt).getTime() ===
          new Date(donatedAt).getTime()
      );

      if (result)
        return res.status(400).json({
          message: "Invalid History",
        });
    }

    const history = new History({
      donatedAt,
      location,
      remarks,
      createdBy: id,
    });

    const createdHistory = await history.save();

    res.status(200).json({
      message: "Successfully Created History",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateHistory = async (req, res) => {
  try {
    const { id } = req.user;
    const { id: historyId } = req.params;
    const { donatedAt, location, remarks, status } = req.body;

    const history = await History.findOne({ _id: historyId, createdBy: id });

    if (!history)
      return res.status(400).json({ message: "Invalid Update Request" });

    history.donatedAt = donatedAt;
    history.location = location;
    history.remarks = remarks;
    history.status = status;

    await history.save();

    res.status(200).json({ message: "History Updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteHistory = async (req, res) => {
  try {
    const { id } = req.user;
    const { id: historyId } = req.params;

    const history = await History.findOne({ _id: historyId, createdBy: id });

    if (!history) return res.status(400).json({ message: "Invalid Request" });

    await history.remove();

    res.status(200).json({ message: "Successfully Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getHistory,
  getHistorys,
  createHistory,
  updateHistory,
  deleteHistory,
};
