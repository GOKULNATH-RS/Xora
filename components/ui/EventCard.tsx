import { FC } from 'react'
import { CalendarDays, MapPin } from 'lucide-react'
import Link from 'next/link'
import { Tag } from './Tag'

type EventCardProps = {
  eventName: string
  eventDescription: string
  location: string
  date: string
  imgSrc: string
  href?: string
}

const EventCard: FC<EventCardProps> = ({
  eventName,
  eventDescription,
  location,
  date,
  imgSrc,
  href
}) => {
  return (
    <Link
      href={`/event/${href}` || '/'}
      className='bg-black-600/75 hover:bg-black-700 border-black-700 rounded-[20px] p-[8px] m-1 w-[500px] h-[150px] flex justify-between items-center backdrop-blur-[1px]'
    >
      <div className='mx-[5px] h-full flex-1 flex flex-col justify-between'>
        <div className='text-white-500'>
          <h1 className='text-md font-semibold'>{eventName}</h1>
          <p className='text-sm font-light px-2 text-white-500/80'>
            {eventDescription}
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <div className='inline-flex items-center gap-[2px]'>
            <MapPin size={10} />
            <p className='text-xs font-medium'>{location}</p>
          </div>
          <div className='inline-flex items-center gap-[2px]'>
            <CalendarDays size={10} />
            <p className='text-xs font-medium'>{date}</p>
          </div>
        </div>
      </div>
      <div className=''>
        <img
          src={imgSrc}
          alt={eventName}
          className='h-[135px] w-[135px] bg-transparent rounded-[12px] overflow-hidden object-center'
        />
      </div>
    </Link>
  )
}

export { EventCard }
