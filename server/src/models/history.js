import mongoose from 'mongoose'

const schema = mongoose.Schema({
  donatedAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  location: {
    type: String,
    required: true
  },
  remarks: {
    type: String
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  status: {
    type: Boolean,
    required: true,
    default: false
  }
})

export default mongoose.model('histories', schema)
