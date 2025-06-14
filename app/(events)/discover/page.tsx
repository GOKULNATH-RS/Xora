import Image from 'next/image'
import React from 'react'
import star from '../../../public/assets/star.svg'
import { EventCard } from '@/components/ui/EventCard'
import { Tag } from '@/components/ui/Tag'
import { listAllEvents } from '@/actions/events'
import { EventType } from '@/types'

// import { EventCardSkeleton } from '@/components/ui/EventCardSkeleton' // if needed for loading state

export default async function Events() {
  const res = await listAllEvents()
  const events: EventType[] = res.data

  return (
    <section>
      <div>
        <h1 className='relative text-3xl tracking-wide inline font-powerGrotesk'>
          Discover Events
          <Image
            src={star}
            height={40}
            width={40}
            alt='star'
            className='absolute top-0 right-[-45px]'
          />
        </h1>

        <div className='flex gap-2 mt-4'>
          <Tag>
            <div className='h-[10px] w-[10px] rounded-full bg-tertiary' />
            <p>Live</p>
          </Tag>
          <Tag>
            <div className='h-[10px] w-[10px] rounded-full bg-purple' />
            <p>Upcoming</p>
          </Tag>
        </div>
      </div>

      <div className='flex flex-wrap justify-center my-10 gap-3'>
        {events.length === 0 ? (
          <p>No Events</p>
        ) : (
          events.map((event, index) => (
            <EventCard
              key={event._id ?? index}
              eventName={event.title}
              eventDescription={event.short_description}
              location={event.location}
              date={new Date(event.start_date)
                .toLocaleDateString('en-GB')
                .replace(/\//g, '-')}
              imgSrc={event.imageUrl}
              href={`/event/${event._id}`}
            />
          ))
        )}
      </div>
    </section>
  )
}
