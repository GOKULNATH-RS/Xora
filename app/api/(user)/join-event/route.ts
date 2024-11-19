import connectDB from '@/db/db'
import Event from '@/db/models/EventModel'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { eventId, userId } = await req.json()
  await connectDB()

  //check if already joined
  const event = await Event.findOne({ _id: eventId, participants: userId })
  if (event) {
    return NextResponse.json({
      message: 'Already joined the event'
    })
  }

  // add userId to event participants[]
  await Event.findOneAndUpdate(
    { _id: eventId },
    { $push: { participants: userId } }
  )

  return NextResponse.json({
    message: 'Joined Event Successfully'
  })
}

export async function DELETE(req: NextRequest) {
  const { eventId, userId } = await req.json()

  await connectDB()

  //check if user dont have the event in savedEvents
  const event = await Event.findOne({ _id: eventId, participants: userId })
  if (!event) {
    return NextResponse.json({
      message: 'Join first to leave event'
    })
  }

  await Event.findOneAndUpdate(
    { _id: eventId },
    { $pull: { participants: userId } }
  )

  return NextResponse.json({
    message: 'Left Event successfully'
  })
}
