import exp from 'constants'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: 'Events' })
}

export async function POST(req: NextRequest) {
  const { id } = await req.json()
  console.log(id)

  return NextResponse.json({ id })
}
