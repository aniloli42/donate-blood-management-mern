import Request from '../models/requests.js'

const getRequest = async (req, res) => {
  try {
    const { id: requestId } = req.params
    const { id } = req.user

    const request = await Request.findOne({ _id: requestId, createdBy: id })

    if (!request) return res.status(400).json({ message: 'Invalid Request' })

    res.status(200).json({ request })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const createRequest = async (req, res) => {
  try {
    const { name, location, bloodType, phone } = req.body
    const { id } = req.user

    const newRequest = new Request({
      name,
      location,
      bloodType,
      phone,
      createdBy: id
    })

    await newRequest.save()
    res.status(200).json({ message: 'Successfully Request Created' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const ownRequest = async (req, res) => {
  try {
    const { id } = req.user

    const request = await Request.find({ createdBy: id, status: false }).sort({
      requestedAt: -1
    })

    if (request.length === 0)
      return res.status(200).json({ message: 'Request not Found', request: [] })

    res.status(200).json({ request })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const DAY_IN_MILLISECONDS = 86400_000

const otherRequest = async (req, res) => {
  try {
    const { id } = req.user

    const request = await Request.find({
      createdBy: { $ne: id },
      status: false,
      requestedAt: {
        $gt: new Date(new Date().getTime() - DAY_IN_MILLISECONDS)
      }
    }).sort({
      requestedAt: -1
    })

    if (request.length === 0)
      return res.status(200).json({ message: 'Request not Found', request: [] })

    res.status(200).json({ request })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const updateRequest = async (req, res) => {
  try {
    const { _id, name, location, bloodType, phone, status } = req.body
    const { id } = req.user

    const updateRequest = await Request.findOne({ _id, createdBy: id })

    if (!updateRequest)
      return res.status(400).json({ message: 'Invalid Request Update' })

    updateRequest.name = name
    updateRequest.location = location
    updateRequest.bloodType = bloodType
    updateRequest.phone = phone
    updateRequest.status = status

    await updateRequest.save()
    res.status(200).json({ message: 'Successfully Request Updated' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
const deleteRequest = async (req, res) => {
  try {
    const { id: requestId } = req.params
    const { id } = req.user

    const request = await Request.findOne({ _id: requestId, createdBy: id })

    if (!request) return res.status(400).json({ message: 'Invalid Request' })
    await request.remove()

    res.status(200).json({ message: 'Request Successfully Deleted' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const recentRequest = async (req, res) => {
  try {
    const { id } = req.user

    const request = await Request.find({
      createdBy: { $ne: id },
      status: false,
      requestedAt: {
        $gt: new Date(new Date().getTime() - DAY_IN_MILLISECONDS)
      }
    })
      .limit(3)
      .sort({
        requestedAt: -1
      })

    if (request.length === 0)
      return res.status(200).json({ message: 'Request not Found', request: [] })

    res.status(200).json({ request })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export {
  getRequest,
  createRequest,
  ownRequest,
  otherRequest,
  updateRequest,
  deleteRequest,
  recentRequest
}
