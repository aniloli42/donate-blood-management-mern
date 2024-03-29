import mongoose from 'mongoose'

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  bloodType: {
    type: String,
    required: true
  },
  temporaryAddress: {
    type: String,
    required: true
  },
  permanentAddress: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

export default mongoose.model('users', schema)
