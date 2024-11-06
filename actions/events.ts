'use server'

import EventDetails from '@/app/(events)/event/[id]/page'
import connectDB from '@/db/db'

export async function createEventAction(eventDetails: any) {
  // should add zod validation here
  await connectDB()

  console.log('Event Details ', eventDetails)

  return 'Signed up!'
}
