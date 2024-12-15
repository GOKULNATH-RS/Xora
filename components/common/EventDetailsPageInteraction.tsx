'use client'

import { getFunction, joinEvent } from '@/actions/events'
import { Check } from 'lucide-react'
import mongoose from 'mongoose'
import { Button } from '../ui/CustomButton'
import { useEffect, useState } from 'react'
import { auth } from '@/auth'

export const JoinButton = async ({
  eventId
}: {
  eventId: mongoose.Schema.Types.ObjectId
}) => {
  const [isParticipating, setIsParticipating] = useState(false)

  const session = await auth()
  console.log('Session', session)

  useEffect(() => {
    getFunction(eventId).then((res) => {
      const event = JSON.parse(res as string)
      const participants = event?.participants
      //   setIsParticipating(participants.includes(userId))
    })
  }, [])

  if (!eventId) return <></>

  return isParticipating ? (
    <Button
      onClick={async () => {
        await joinEvent(eventId)
      }}
      className='w-full'
    >
      Join Event
    </Button>
  ) : (
    <Button disabled={true} variant={'disabled'} className='w-full px-4'>
      <Check className='text-tertiary' />
      Joined Event
    </Button>
  )
}
