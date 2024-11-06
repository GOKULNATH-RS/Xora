'use client'

import { Input } from '@/components/ui/CustomInput'
import dateRange from '../../../public/assets/date-range.svg'
import Image from 'next/image'
import { DatePicker } from '@/components/ui/DatePicker'
import { useEffect, useState } from 'react'
import TextEditor from '@/components/common/TextEditor'
import { Button } from '@/components/ui/CustomButton'
import { createEventAction } from '@/actions/events'
import { set } from 'date-fns'

type Props = {}

export default function EventCreationPage({}: Props) {
  const [eventTitle, setEventTitle] = useState<string>('')
  const [eventDescription, setEventDescription] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [aboutEvent, setAboutEvent] = useState<any>()

  async function publishEvent(status: 'draft' | 'publish') {
    await createEventAction({
      eventTitle,
      eventDescription,
      location,
      startDate,
      endDate,
      aboutEvent,
      status
    })
  }

  return (
    <section className='my-6'>
      <div className='flex justify-between '>
        <div className='flex-[0.4] h-full w-full px-6 flex flex-col gap-2'>
          <div className='w-[350px] bg-black-700/50 rounded-lg h-[300px]'>
            {/* //TODO: Add image upload field */}
          </div>

          <div>
            <p className='text-md font-medium'>Event Venue</p>
            <div className='flex gap-2 items-center my-2'>
              {/* // TODO: Add the location input field */}
              <p>Location</p>
            </div>
          </div>
        </div>

        <div className='flex-[0.6] flex flex-col gap-5'>
          <Input
            placeholder='Enter your Event name'
            type='text'
            size='lg'
            className='font-powerGrotesk'
            onChange={(e) => setEventTitle(e.target.value)}
          />
          <Input
            placeholder='Give a small description about your event'
            type='text'
            className='ml-2'
            onChange={(e) => setEventDescription(e.target.value)}
          />

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
