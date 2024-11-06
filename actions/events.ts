'use server'

import connectDB from '@/db/db'

export async function createEventAction(eventDetails: any) {
  // should add zod validation here
  await connectDB()

  console.log('Event Details ', eventDetails)

  return 'Signed up!'
}
