import connectDB from '@/db/db'
import User from '@/db/models/UserModel'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { eventId, userId } = await req.json()

  await connectDB()

  //check if user already saved the event
  const event = await User.findOne({ _id: userId, savedEvents: eventId })
  if (event) {
    return NextResponse.json({
      message: 'Already saved the event'
    })
  }

  const response = await User.findOneAndUpdate(
    { _id: userId },
    { $push: { savedEvents: eventId } }
  )

  return NextResponse.json({
    message: 'Event saved successfully'
  })
}

export async function DELETE(req: NextRequest) {
  const { eventId, userId } = await req.json()

  await connectDB()

  //check if user dont have the event in savedEvents
  const event = await User.findOne({ _id: userId, savedEvents: eventId })
  if (!event) {
    return NextResponse.json({
      message: 'No Event found to remove'
    })
  }

  await User.findOneAndUpdate(
    { _id: userId },
    { $pull: { savedEvents: eventId } }
  )

  return NextResponse.json({
    message: 'Event removed successfully'
  })
}
