import connectDB from '@/db/db'
import User from '@/db/models/UserModel'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { username, email, password } = await req.json()

  await connectDB()

  // signup logic here

  return NextResponse.json({ message: 'Signup Successful' })
}
