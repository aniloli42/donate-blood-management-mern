import mongoose from 'mongoose'

const schema = mongoose.Schema({
  token: {
    type: String,
    required: true,
    unqiue: true
  },
  assign: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('token', schema)
