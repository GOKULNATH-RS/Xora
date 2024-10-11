import connectDB from '@/db/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  await connectDB()

  // get all events logic here

  return NextResponse.json({ message: 'Events' })
}

export async function POST(req: NextRequest) {
  await connectDB()

  // create event logic here

  return NextResponse.json({ message: 'Create Event' })
}
