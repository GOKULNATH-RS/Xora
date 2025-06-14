'use client'

import { Input } from '@/components/ui/CustomInput'
import dateRange from '../../../public/assets/date-range.svg'
import Image from 'next/image'
import { DatePicker } from '@/components/ui/DatePicker'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/CustomButton'
import { Button as DefaultButton } from '@/components/ui/button'
import { createEventAction } from '@/actions/events'
import dynamic from 'next/dynamic'
import { Trash2 } from 'lucide-react'
import ImageUploader from '@/components/common/ImageUploader'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { before } from 'node:test'

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

    if (startDate && endDate && new Date(startDate) > new Date(endDate)){
      console.log(startDate,endDate)
      toast.error("Select Event dates properly to publish event")
      return
    }

    const toastId = toast.loading('Creating your event...')

    createEventAction(eventDetails)
      .then((res) => {
        console.log(res)
        if (res.status === 'success') {
          toast.success('Event created successfully!', { id: toastId })
          router.push('/discover')
        } else {
          toast.error('Failed to create event.', { id: toastId })
        }
      })
  }

  useEffect(() => {

    if(startDate && endDate) {
      if (new Date(startDate) > new Date(endDate)) {
        setEndDate(new Date(startDate))
      }
    }

  },[startDate])

  return (
    <section className='my-6'>
      <div className='flex justify-between'>
        <div className='flex-[0.4] h-max w-full px-6 flex flex-col gap-2'>
          <div className='w-[350px] rounded-xl min-h-[300px] flex justify-center items-center'>
            {!imageUrl ? (
              <div className='bg-black-500/50 rounded-xl w-full'>
                <ImageUploader setFunction={setImageUrl} />
              </div>
            ) : (
              <div className='w-full h-full relative'>
                <img
                  src={imageUrl}
                  alt='event image'
                  className='mb-2 rounded-xl  min-h-[300px] object-cover aspect-square'
                />
                <DefaultButton
                  variant='destructive'
                  size={'sm'}
                  onClick={() => setImageUrl('')}
                  className='flex items-center gap-1'
                >
                  <Trash2 size={12} /> Remove Photo
                </DefaultButton>
              </div>
            )}
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
                <DatePicker label='Start Date' setFunction={setStartDate} disabled={{ before: new Date() }}/>
              </div>
              <div>
                <Image src={dateRange} height={16} alt='date range' />
              </div>
              <div>
                <DatePicker label='End Date' setFunction={setEndDate} disabled={{ before: new Date(startDate as any) }} />
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
