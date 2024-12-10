'use client'

import { Input } from '@/components/ui/CustomInput'
import dateRange from '../../../public/assets/date-range.svg'
import Image from 'next/image'
import { DatePicker } from '@/components/ui/DatePicker'
import { useState } from 'react'
import { Button } from '@/components/ui/CustomButton'
import { Button as DefaultButton } from '@/components/ui/button'
import { createEventAction } from '@/actions/events'
import dynamic from 'next/dynamic'
import { Trash2 } from 'lucide-react'
import ImageUploader from '@/components/common/ImageUploader'
import { useRouter } from 'next/navigation'

type Props = {}

const TextEditor = dynamic(() => import('@/components/common/TextEditor'), {
  ssr: false
})

export default function EventCreationPage({}: Props) {
  const router = useRouter()
  const [eventTitle, setEventTitle] = useState<string>('')
  const [eventDescription, setEventDescription] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [aboutEvent, setAboutEvent] = useState<any>()
  const [imageUrl, setImageUrl] = useState<string>('')

  async function publishEvent(status: 'draft' | 'publish') {
    const eventDetails = {
      eventTitle,
      eventDescription,
      startDate,
      endDate,
      location,
      imageUrl,
      status,
      aboutEvent
    }

    // TODO: Add Toast notification
    createEventAction(eventDetails)
      .then((res) => {
        const response = JSON.parse(res as string)
        if (response.message === 'Event created successfully')
          router.push('/discover')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <section className='my-6'>
      <div className='flex justify-between'>
        <div className='flex-[0.4] h-max w-full px-6 flex flex-col gap-2'>
          <div className='w-[350px] rounded-xl min-h-[300px] flex justify-center items-center'>
            <p>loading</p>
          </div>
        </div>

        <div className='flex-[0.6] flex flex-col gap-5'>
          <h1>Loading</h1>
          <h3>Loading</h3>

          <div>
            <p className='text-md font-medium'>Event Date</p>
            <div className='flex gap-2 items-center my-2'>
              <div>
                <DatePicker label='Start Date' setFunction={setStartDate} />
              </div>
              <div>
                <Image src={dateRange} height={16} alt='date range' />
              </div>
              <div>
                <DatePicker label='End Date' setFunction={setEndDate} />
              </div>
            </div>
          </div>

          {/* // TODO: Add the location input field */}

          <div>
            <p className='text-md font-medium'>Event Venue</p>
            <div className='flex gap-2 items-center'>
              <Input
                placeholder='Enter your location'
                type='text'
                className='font-powerGrotesk'
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          <div>
            <h2 className='text-2xl font-powerGrotesk'>About Event</h2>
            <TextEditor onChangeFunc={setAboutEvent} />
          </div>

          <div className='my-4 flex gap-2'>
            <Button
              onClick={() => publishEvent('draft')}
              variant={'outline'}
              className='w-full'
            >
              Save Draft
            </Button>
            <Button onClick={() => publishEvent('publish')} className='w-full'>
              Publish Event
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
