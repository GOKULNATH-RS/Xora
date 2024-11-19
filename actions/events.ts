'use server'

import { auth } from '@/auth'
import connectDB from '@/db/db'
import Event from '@/db/models/EventModel'
import { resolve } from 'dns'
import mongoose from 'mongoose'

// TODO : Add type to eventDetails
export async function createEventAction(eventDetails: any) {
  // TODO: Add session Type
  const session: any = await auth()
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

  const hosted_by = session?._id

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

export async function getFunction(id: mongoose.Schema.Types.ObjectId) {
  await connectDB()

  return new Promise(async (resolve, reject) => {
    Event.findById(id)
      .populate('hosted_by', { _id: 1, name: 1, email: 1, image: 1 })
      .populate('participants', { name: 1, email: 1, image: 1 })
      .then((result) => {
        resolve(JSON.stringify(result))
      })
      .catch((err) => {
        reject(JSON.stringify({ message: 'Error fetching event', error: err }))
      })
  })
}
