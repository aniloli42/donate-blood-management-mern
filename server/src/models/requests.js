import mongoose from 'mongoose'

const Schema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  bloodType: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  requestedAt: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  status: {
    type: Boolean,
    default: false
  }
})

export default mongoose.model('requests', Schema)
