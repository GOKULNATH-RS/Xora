// actions/user.ts
import connectDB from '@/db/db'
import Event from '@/db/models/EventModel'
import User from '@/db/models/UserModel'

export async function getUser(userId: string) {
  await connectDB()

  try {
    const user = await User.findById(userId)
      .populate({
        path: 'saved_events',
        model: Event,
        select: '_id title start_date location' // only essential fields
      })
      .populate({
        path: 'participating_events',
        model: Event,
        select: '_id title start_date location' // only essential fields
      })

    return JSON.stringify(user)
  } catch (error) {
    console.error('Error fetching user:', error)
    return null
  }
}
