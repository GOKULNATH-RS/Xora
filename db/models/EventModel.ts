import mongoose from 'mongoose'

const EventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    short_description: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    about: {
      type: Array,
      required: true
    },
    hosted_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    participants: {
      type: Array<mongoose.Schema.Types.ObjectId>(),
      default: []
    }
  },
  { timestamps: true }
)

const Event = mongoose.models.Event || mongoose.model('Event', EventSchema)

export default Event