'use client'

import Link from 'next/link'
import { CalendarDays, MapPin } from 'lucide-react'

type Props = {
    events: any[]
}

export default function ParticipatingEvents ({ events }: Props) {
    return (
        <div>
            <h2 className='text-xl font-bold mb-4'>Participating Events</h2>
            <ul className='flex flex-col gap-4'>
                {events.length === 0 && <p className='text-gray-500'>No joined events.</p>}
                {events.map(event => (
                    <li key={event._id} className='border rounded-lg p-4 shadow-sm bg-black-800/40'>
                        <h3 className='text-lg font-semibold'>{event.title}</h3>
                        <div className='flex items-center gap-2 mt-2 text-sm text-gray-300'>
                            <CalendarDays size={16} />
                            <span>{new Date(event.start_date).toLocaleDateString()}</span>
                            <MapPin size={16} />
                            <span>{event.location}</span>
                        </div>
                        <Link
                            href={`/event/${event._id}`}
                            className='inline-block mt-3 text-sm text-tertiary hover:underline'
                        >
                            View Event →
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
