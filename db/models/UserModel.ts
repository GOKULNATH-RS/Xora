import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    image: {
      type: String
    },
    saved_events: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        default: []
      }
    ],
    participating_events: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        default: []
      }
    ]
  },
  { timestamps: true }
)

const User = mongoose.models.User || mongoose.model('User', UserSchema)
export default User
