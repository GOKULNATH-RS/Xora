'use server'

import { auth } from '@/auth'
import connectDB from '@/db/db'
import Event from '@/db/models/EventModel'

// TODO : Add type to eventDetails
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

export async function listAllEvents() {
  await connectDB()

  return new Promise((resolve, reject) => {
    Event.find()
      .then((result) => {
        resolve(JSON.stringify(result))
      })
      .catch((err) => {
        reject(JSON.stringify({ message: 'Error fetching events', error: err }))
      })
  })
}

export async function getFunction(id: string) {
  await connectDB()

  return new Promise((resolve, reject) => {
    Event.findById(id)
      .then((result) => {
        resolve(JSON.stringify(result))
      })
      .catch((err) => {
        reject(JSON.stringify({ message: 'Error fetching event', error: err }))
      })
  })
}
