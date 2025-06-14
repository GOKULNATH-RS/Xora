'use client'

import { Check } from 'lucide-react'
import { Button } from '../ui/CustomButton'
import { useTransition, useState } from 'react'
import { joinEvent } from '@/actions/events'

type Props = {
  eventId: string
  isJoined?: boolean
}

const JoinEventButton = ({ eventId, isJoined = false }: Props) => {
  const [isPending, startTransition] = useTransition()
  const [joined, setJoined] = useState(isJoined)

  const handleJoin = () => {
    startTransition(async () => {
      const res = await joinEvent(eventId)
      if (res.success) {
        setJoined(true)
      }
    })
  }

  return !joined ? (
    <Button
      className='w-full'
      onClick={handleJoin}
      disabled={isPending}
    >
      {isPending ? 'Joining...' : 'Join Event'}
    </Button>
  ) : (
    <Button disabled variant='disabled' className='w-full px-4'>
      <Check className='text-tertiary' />
        Joined Event
    </Button>
  )
}

export default JoinEventButton
