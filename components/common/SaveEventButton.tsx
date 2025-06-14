'use client'

import { Check } from 'lucide-react'
import { Button } from '../ui/CustomButton'
import { useTransition, useState } from 'react'
import { saveEvent } from '@/actions/events'

type Props = {
  eventId: string
  isSaved?: boolean
}

const SaveEventButton = ({ eventId, isSaved = false }: Props) => {
  const [isPending, startTransition] = useTransition()
  const [saved, setSaved] = useState(isSaved)

  const handleSave = () => {
    startTransition(async () => {
      const res = await saveEvent(eventId)
      if (res.success) setSaved(true)
    })
  }

  return !saved ? (
    <Button
      className='w-full'
      onClick={handleSave}
      disabled={isPending}
    >
      {isPending ? 'Saving...' : 'Save Event'}
    </Button>
  ) : (
    <Button disabled variant='disabled' className='w-full px-4'>
      <Check className='text-tertiary' />
      Saved Event
    </Button>
  )
}

export default SaveEventButton
