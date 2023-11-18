import mongoose from 'mongoose'

const Schema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  otp: {
    type: Number,
    required: true
  },
  expiredAt: {
    type: Date,
    required: true
  }
})

export default mongoose.model('otp', Schema)
