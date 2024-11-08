'use server'

import { auth } from '@/auth'
import connectDB from '@/db/db'
import Event from '@/db/models/EventModel'
import { resolve } from 'dns'

export async function createEventAction(eventDetails: any) {
  const session = await auth()
  // TODO:should add zod validation here
  await connectDB()

  const {
    eventTitle,
    eventDescription,
    startDate,
    endDate,
    location,
    imageUrl,
    status,
    aboutEvent
  } = eventDetails

  const hosted_by = {
    email: session?.user?.email,
    name: session?.user?.name,
    image: session?.user?.image
  }

  const published = status === 'publish'

  const newEvent = {
    title: eventTitle,
    short_description: eventDescription,
    start_date: startDate,
    end_date: endDate,
    location,
    imageUrl,
    about: aboutEvent,
    hosted_by,
    published
  }

  return new Promise((resolve, reject) => {
    Event.create(newEvent)
      .then((result) => {
        resolve(
          JSON.stringify({
            message: 'Event created successfully',
            data: result
          })
        )
      })
      .catch((err) => {
        reject(JSON.stringify({ message: 'Error creating event', error: err }))
      })
  })
}
