import Image from 'next/image'
import React from 'react'
import star from '../../../public/assets/star.svg'
import { EventCard } from '@/components/ui/EventCard'
import { Tag } from '@/components/ui/Tag'

type Props = {}

export default function Events({}: Props) {
  const eventData = [
    {
      eventName: 'Music Concert',
      eventDescription: 'Enjoy a night of great music and vibes.',
      location: 'New York, NY',
      date: '2023-11-01',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/photo-management-app-17909.appspot.com/o/xora%2Fmusic-concert.jpg?alt=media&token=b9959dd3-2aa2-431a-a843-d948d952c095',
      href: '/event/music-concert'
    },
    {
      eventName: 'Art Exhibition',
      eventDescription: 'Explore the latest in contemporary art.',
      location: 'San Francisco, CA',
      date: '2023-11-05',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/photo-management-app-17909.appspot.com/o/xora%2Fart-exhibition.jpg?alt=media&token=e583f0ff-6779-41a9-b30b-8e3641294dab',
      href: '/event/art-exhibition'
    },
    {
      eventName: 'Tech Conference',
      eventDescription:
        'Join industry leaders in discussing the future of technology.',
      location: 'Austin, TX',
      date: '2023-11-10',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/photo-management-app-17909.appspot.com/o/xora%2Ftech-conf.jpg?alt=media&token=a89b25a5-86ba-49a3-8f2d-f3b00165d17d',
      href: '/event/tech-conference'
    },
    {
      eventName: 'Food Festival',
      eventDescription: 'Taste dishes from around the world.',
      location: 'Los Angeles, CA',
      date: '2023-11-15',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/photo-management-app-17909.appspot.com/o/xora%2Ffood-festival.jpg?alt=media&token=2c4cac69-6647-4b6f-b9fe-074123b30b65',
      href: '/event/food-festival'
    },

    {
      eventName: 'Film Festival',
      eventDescription: 'Watch the latest indie films.',
      location: 'Seattle, WA',
      date: '2023-11-25',
      imgSrc:
        'https://firebasestorage.googleapis.com/v0/b/photo-management-app-17909.appspot.com/o/xora%2Ffilm-fest.jpg?alt=media&token=34a9e575-ed77-4bbb-baad-fd139e634a64',
      href: '/event/film-festival'
    },
    {
      eventName: 'Marathon',
      eventDescription: 'Run for a cause in our annual marathon.',
      location: 'Chicago, IL',
      date: '2023-11-20',
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ9APUNLw_nOBJ8dBgOGYP5PVNknt7QIoRhA&s',
      href: '/event/marathon'
    },
    {
      eventName: 'Book Fair',
      eventDescription: 'Discover new books and meet authors.',
      location: 'Boston, MA',
      date: '2023-11-30',
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ9APUNLw_nOBJ8dBgOGYP5PVNknt7QIoRhA&s',
      href: '/event/book-fair'
    },
    {
      eventName: 'Comedy Show',
      eventDescription: 'Laugh out loud with top comedians.',
      location: 'Las Vegas, NV',
      date: '2023-12-05',
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ9APUNLw_nOBJ8dBgOGYP5PVNknt7QIoRhA&s',
      href: '/event/comedy-show'
    },
    {
      eventName: 'Science Expo',
      eventDescription: 'Explore the wonders of science.',
      location: 'Houston, TX',
      date: '2023-12-10',
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ9APUNLw_nOBJ8dBgOGYP5PVNknt7QIoRhA&s',
      href: '/event/science-expo'
    },
    {
      eventName: 'Fashion Show',
      eventDescription: 'See the latest trends in fashion.',
      location: 'Miami, FL',
      date: '2023-12-15',
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ9APUNLw_nOBJ8dBgOGYP5PVNknt7QIoRhA&s',
      href: '/event/fashion-show'
    }
  ]

  const eventNames = eventData.map((event) => event.eventName)
  console.log(eventNames)
  return (
    <section>
      <div>
        <div className=''>
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
        </div>
        <div>
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
      <div className='flex flex-wrap justify-center my-10'>
        {eventData.map((event, index) => (
          <EventCard
            key={index}
            eventName={event.eventName}
            eventDescription={event.eventDescription}
            location={event.location}
            date={event.date}
            imgSrc={event.imgSrc}
            href={event.href}
          />
        ))}
      </div>
    </section>
  )
}
