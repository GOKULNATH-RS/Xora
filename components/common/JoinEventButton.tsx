'use client'

import { Check } from 'lucide-react'
import { Button } from '../ui/CustomButton'
import { getFunction, joinEvent } from '@/actions/events'
import { useEffect, useState } from 'react'

const JoinEventButton = async ({ eventId, userId }: any) => {
  const [isParticipating, setIsParticipating] = useState(false)
  const [num, setNum] = useState(0)

  async function checkParticipation() {}

  async function handleJoinEvent() {
    await joinEvent(eventId)
    console.log('Joining event')
  }

  return !isParticipating ? (
    <Button onClick={handleJoinEvent} className='w-full'>
      Join Event
    </Button>
  ) : (
    <Button disabled={true} variant={'disabled'} className='w-full px-4'>
      <Check className='text-tertiary' />
      Joined Event
    </Button>
  )
}

export default JoinEventButton
