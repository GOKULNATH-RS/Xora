'use client'

'use client'

import { Check } from 'lucide-react'
import { Button } from '../ui/CustomButton'

const SaveEventButton = async ({ eventId }: any) => {
  const eventSaved = false

  return !eventSaved ? (
    <Button className='w-full' variant='outline'>
      Save Event
    </Button>
  ) : (
    <Button disabled={true} variant={'disabled'} className='w-full px-4'>
      <Check className='text-tertiary' />
      Saved Event
    </Button>
  )
}

export default SaveEventButton
