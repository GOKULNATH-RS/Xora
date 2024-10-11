import mongoose from 'mongoose'

const MongoDB_URI = process.env.MONGODB_URI as string

const connectDB = async () => {
  try {
    await mongoose.connect(MongoDB_URI)
    console.log('MongoDB Connected')
  } catch (error) {
    console.log(error)
  }
}

export default connectDB
