import { FC } from 'react'
import { CalendarDays, MapPin } from 'lucide-react'
import Link from 'next/link'
import { Tag } from './Tag'

type EventCardProps = {}

const EventCardSkeleton: FC = ({}) => {
  return (
    <Link
      href={'/'}
      className='bg-black-600/75 hover:bg-black-700 border-black-700 rounded-[20px] p-[8px] m-1 w-[500px] h-[150px] flex justify-between items-center backdrop-blur-[1px]'
    >
      <div className='mx-[5px] h-full flex-1 flex flex-col justify-between'>
        <div className='text-white-500'>
          <div className='h-[22px] w-[120px] bg-accent/60 rounded-[12px] overflow-hidden object-cente animate-pulse ' />
          <div className='h-[12px] w-[180px] m-2 bg-accent/60 rounded-[12px] overflow-hidden object-center animate-pulse' />
        </div>
        <div className='flex items-center gap-2'>
          <div className='inline-flex items-center gap-[2px]'>
            <MapPin size={10} />
            <div className='h-[12px] w-[40px] bg-accent/60 rounded-[12px] overflow-hidden object-center animate-pulse' />
          </div>
          <div className='inline-flex items-center gap-[3px]'>
            <CalendarDays size={10} />
            <div className='h-[12px] w-[40px] bg-accent/60 rounded-[12px] overflow-hidden object-center animate-pulse' />
          </div>
        </div>
      </div>
      <div className=''>
        <div className='h-[135px] w-[135px] bg-accent/60 rounded-[12px] overflow-hidden object-center animate-pulse' />
      </div>
    </Link>
  )
}

export { EventCardSkeleton }
