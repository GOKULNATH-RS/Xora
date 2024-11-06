import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  // signin logic here
  return NextResponse.json({ message: 'Signin Successful' })
}
