import { getFunction } from '@/actions/events'
import { Button } from '@/components/ui/CustomButton'
import { Tag } from '@/components/ui/Tag'
import { convertDate, formatDatetoStr } from '@/utils/utils'
import { CalendarDays, MapPin } from 'lucide-react'
import dynamic from 'next/dynamic'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'
import mongoose from 'mongoose'

type Props = {
  params: {
    id: mongoose.Schema.Types.ObjectId
  }
}

const TextEditor = dynamic(() => import('@/components/common/TextEditor'), {
  ssr: false
})

export default async function EventDetails({ params }: Props) {
  const { id } = params

  const res = await getFunction(id)
  const event = JSON.parse(res as string)
  const {
    title,
    short_description,
    start_date,
    end_date,
    location,
    imageUrl,
    about,
    hosted_by,
    published,
    participants
  } = event

  return (
    <section className='my-6'>
      <div className='flex justify-between'>
        <div className='flex-[0.4] h-max w-full px-8 flex flex-col gap-2 '>
          <div className='w-full rounded-xl min-h-[300px] flex justify-center items-center'>
            <div className='w-full h-full relative'>
              <img
                src={imageUrl}
                alt='event image'
                className='mb-2 mr-2 rounded-xl'
              />
            </div>
          </div>
          <div>
            <p>100+ Participating</p>
          </div>
          <div className='my-4 flex gap-2'>
            <Button className='w-full'>Join Event</Button>
            <Button variant={'outline'} className='w-full'>
              Save Event
            </Button>
          </div>
        </div>

        <div className='flex-[0.6] flex flex-col gap-5 mt-6'>
          <p className='text-3xl font-bold leading-4 flex flex-col'>{title}</p>
          <p className='text-base font-light leading-4 tracking-wide'>
            {short_description}
          </p>

          <Tag className='w-max'>
            <div className='h-[10px] w-[10px] rounded-full bg-tertiary' />
            <p className='mx-[1px]'>Live</p>
          </Tag>

          <div>
            {/* date */}
            <div className='flex gap-2 items-center my-2'>
              <div className='flex items-center gap-1'>
                <CalendarDays size={16} className='text-tertiary' />
                <p>{formatDatetoStr(convertDate(start_date))}</p>
              </div>
              {start_date !== end_date && (
                <div>
                  <p>{`-  ${formatDatetoStr(convertDate(end_date))}`}</p>
                </div>
              )}
            </div>
            {/* location */}
            <div>
              <div className='flex gap-1 items-center'>
                <MapPin size={16} className='text-tertiary' />
                <p className='text-base'>{location}</p>
              </div>
            </div>
            {/* Hosted By */}
            <div className='my-2'>
              <p className=' px-[2px]'>Hosted By</p>
              <HoverCard>
                <HoverCardTrigger className='cursor-pointer'>
                  <span className=''>@</span>
                  <p className='inline underline'>{hosted_by.name}</p>
                </HoverCardTrigger>
                <HoverCardContent className='w-max bg-black-700/90 backdrop-blur-lg'>
                  {/* //TODO: Make this this Link which redirects to profile */}
                  <div className='flex items-center gap-2'>
                    <img
                      src={hosted_by.image}
                      alt='hosted by'
                      className='h-[20px] w-[20px] rounded-full'
                    />
                    <div>
                      <p className='text-base font-semibold'>
                        {hosted_by.name}
                      </p>
                      <p className='text-sm'>{hosted_by.email}</p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>

          <div>
            <h2 className='text-2xl font-powerGrotesk'>About Event</h2>
            <TextEditor NonEditable content={about} />
          </div>
        </div>
      </div>
    </section>
  )
}
