import { Button } from '@/components/ui/CustomButton'
import { CalendarDays, MapPin } from 'lucide-react'

export default async function EventDetails() {
  return (
    <section className='my-6'>
      <div className='flex justify-between'>
        <div className='flex-[0.4] h-max w-full px-8 flex flex-col gap-2 '>
          <div className='w-full rounded-xl h-[400px] flex justify-center items-center'>
            <div className='w-full h-full relative bg-white-500/10 rounded-2xl animate-pulse'>
              <div className='mb-2 mr-2 rounded-xl' />
            </div>
          </div>
          <div>
            <div className='w-[200px] h-[20px] bg-white-500/10 rounded-2xl animate-pulse' />
          </div>
          <div className='my-4 flex gap-2'>
            <Button className='w-full'>Join Event</Button>
            <Button variant={'outline'} className='w-full'>
              Save Event
            </Button>
          </div>
        </div>

        <div className='flex-[0.6] flex flex-col gap-4 mt-6'>
          <div className='w-[250px] h-[45px] bg-white-500/10 rounded-2xl animate-pulse' />
          <div className='w-[450px] h-[20px] bg-white-500/10 rounded-2xl animate-pulse' />

          <div className='w-[65px] h-[15px] bg-white-500/10 rounded-2xl animate-pulse' />

          <div>
            {/* date */}
            <div className='flex gap-2 items-center my-2'>
              <div className='flex items-center gap-1'>
                <CalendarDays size={16} className='text-tertiary' />
                <div className='w-[200px] h-[20px] bg-white-500/10 rounded-2xl animate-pulse' />
              </div>
            </div>
            {/* location */}
            <div>
              <div className='flex gap-1 items-center'>
                <MapPin size={16} className='text-tertiary' />
                <div className='w-[200px] h-[20px] bg-white-500/10 rounded-2xl animate-pulse' />
              </div>
            </div>
            {/* Hosted By */}
            <div className='my-2'>
              <p className=' px-[2px]'>Hosted By</p>
              <div className='w-[200px] h-[20px] bg-white-500/10 rounded-2xl animate-pulse' />
            </div>
          </div>

          <div>
            <h2 className='text-2xl font-powerGrotesk'>About Event</h2>
            <div className='bg-black-500 h-full p-4'>
              <div className='w-[180px] h-[40px] bg-white-500/10 rounded-2xl animate-pulse m-2' />
              <div className='w-[220px] h-[20px] bg-white-500/10 rounded-2xl animate-pulse m-4' />
              <div className='w-[220px] h-[20px] bg-white-500/10 rounded-2xl animate-pulse m-4' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
