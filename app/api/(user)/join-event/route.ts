import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { eventId } = await req.json()

  // add userId to event participants[]

  return NextResponse.json({ message: 'Join Event' })
}
