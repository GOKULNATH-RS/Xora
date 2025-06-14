'use server'
import { auth } from '@/auth'
import connectDB from '@/db/db'
import Event from '@/db/models/EventModel'
import User from '@/db/models/UserModel'
import mongoose from 'mongoose'
import { z } from 'zod'

/* ------------------------- Type Definitions ------------------------- */
const eventSchema = z.object({
  eventTitle: z.string(),
  eventDescription: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  location: z.string(),
  imageUrl: z.string().url(),
  status: z.enum(['publish', 'draft']),
  aboutEvent: z.string()
})

interface EventDetails extends z.infer<typeof eventSchema> {}

interface APIResponse<T = any> {
  message: string
  data?: T
  error?: any
  status?: 'success' | 'error'
}

/* ------------------------- Create Event ------------------------- */
export async function createEventAction(
  eventDetails: unknown
): Promise<APIResponse> {
  const session = await auth()
  if (!session?._id) {
    return { message: 'Unauthorized', status: 'error' }
  }

  const parsed = eventSchema.safeParse(eventDetails)
  if (!parsed.success) {
    return {
      message: 'Invalid input',
      error: parsed.error.format(),
      status: 'error'
    }
  }

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
  } = parsed.data

  const newEvent = {
    title: eventTitle,
    short_description: eventDescription,
    start_date: startDate,
    end_date: endDate,
    location,
    imageUrl,
    about: aboutEvent,
    hosted_by: session._id,
    published: status === 'publish'
  }

  try {
    const result = await Event.create(newEvent)
    return {
      message: 'Event created successfully',
      data: result,
      status: 'success'
    }
  } catch (err) {
    return { message: 'Error creating event', error: err, status: 'error' }
  }
}

/* ------------------------- List All Events ------------------------- */
export async function listAllEvents(): Promise<APIResponse> {
  await connectDB()
  try {
    const result = await Event.find()
    return {
      message: 'Events fetched successfully',
      data: result,
      status: 'success'
    }
  } catch (err) {
    return { message: 'Error fetching events', error: err, status: 'error' }
  }
}

/* ------------------------- Get Event by ID ------------------------- */
export async function getFunction(
  id: string
): Promise<APIResponse & { isSavedByUser?: boolean }> {
  await connectDB()

  try {
    const event = await Event.findById(id).populate('hosted_by')
    if (!event) {
      return { message: 'Event not found', status: 'error' }
    }

    const session = await auth()
    let isSavedByUser = false

    if (session?._id) {
      const user = await User.findById(session._id)
      const eventObjectId = new mongoose.Types.ObjectId(id)
      isSavedByUser = user?.saved_events?.some((saved: any) =>
        saved.equals(eventObjectId)
      )
    }

    return {
      message: 'Event fetched successfully',
      data: event,
      status: 'success',
      isSavedByUser
    }
  } catch (err) {
    console.log(err)
    return { message: 'Error fetching event', error: err, status: 'error' }
  }
}

/* ------------------------- Join Event ------------------------- */
export async function joinEvent(eventId: string){
  const session = await auth()
  if (!session?._id) {
    return { message: 'Unauthorized', status: 'error', success: false }
  }

  await connectDB()

  try {
    const event = await Event.findById(eventId)
    const user = await User.findById(session._id)

    if (!event) {
      return { message: 'Event not found', status: 'error', success: false }
    }

    if (event.participants.includes(session._id) || user.participating_events.includes(eventId)) {
      return {
        message: 'User already joined the event',
        status: 'already_exist',
        success: false
      }
    }

    event.participants.push(session._id)
    user.participating_events.push(event._id)

    await event.save()
    

    return {
      message: 'Event joined successfully',
      status: 'success',
      success: true
    }
  } catch (err) {
    return {
      message: 'Error joining event',
      error: err,
      status: 'error',
      success: false
    }
  }
}

/* ------------------------- Save Event ------------------------- */
export async function saveEvent(eventId: string) {
  await connectDB()
  const session = await auth()

  if (!session?._id) {
    return { success: false, message: 'Unauthorized' }
  }

  try {
    const user = await User.findById(session._id)

    if (!user) {
      return { success: false, message: 'User not found' }
    }

    const eventObjectId = new mongoose.Types.ObjectId(eventId)

    // Prevent duplicate saves
    if (user.saved_events.includes(eventObjectId)) {
      return { success: true, message: 'Already saved' }
    }

    user.saved_events.push(eventObjectId)
    await user.save()

    return { success: true, message: 'Event saved successfully' }
  } catch (err) {
    console.error('Error saving event:', err)
    return { success: false, message: 'Internal Server Error' }
  }
}