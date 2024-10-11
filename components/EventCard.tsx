import { FC } from "react"
import { CalendarDays,MapPin } from 'lucide-react';

type EventCardProps ={
    eventName: string,
    eventDescription: string,
    location: string,
    date: string,
    imgSrc: string,
    href?: string
}

const EventCard: FC<EventCardProps> = ({ eventName, eventDescription, location, date, imgSrc, href }) => {
    return (
        <div className="bg-black-600/80 hover:bg-black-700 border-black-700 rounded-[20px] p-[8px] m-1 w-[500px] h-[150px] flex justify-between items-center ">
            <div className="mx-[5px] h-full flex-1 flex flex-col justify-between">
                <div className="text-white-500">
                    <h1 className="text-md font-semibold">{eventName}</h1>
                    <p className="text-sm font-light px-2">{eventDescription}</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="inline-flex items-center gap-[2px]">
                        <MapPin size={10} />
                        <p className="text-xs font-medium">{location}</p>
                    </div>
                    <div className="inline-flex items-center gap-[2px]">
                        <CalendarDays size={10} />
                        <p className="text-xs font-medium">{date}</p>
                    </div>
                </div>
            </div>
            <div>
                <img src={imgSrc} alt={eventName} className="h-[135px] w-[135px] bg-white-500/30 rounded-[12px] overflow-hidden object-center" />
            </div>
        </div>
    )
}

export { EventCard }