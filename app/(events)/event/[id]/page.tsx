import { getFunction } from '@/actions/events'
import ImageUploader from '@/components/common/ImageUploader'
import { Button } from '@/components/ui/CustomButton'
import { DatePicker } from '@/components/ui/DatePicker'
import { Trash2 } from 'lucide-react'
import dynamic from 'next/dynamic'
import { Input } from 'postcss'

type Props = {
  params: {
    id: string
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
    published
  } = event

  return (
    <section className='my-6'>
      <div className='flex justify-between'>
        <div className='flex-[0.4] h-max w-full px-6 flex flex-col gap-2'>
          <div className='w-[350px] rounded-xl min-h-[300px] flex justify-center items-center'>
            <div className='w-full h-full relative '>
              <img
                src={imageUrl}
                alt='event image'
                className='mb-2 rounded-xl'
              />
            </div>
          </div>
        </div>

        <div className='flex-[0.6] flex flex-col gap-5'>
          <p>{title}</p>
          <p>{short_description}</p>

          <div>
            <p className='text-md font-medium'>Event Date</p>
            <div className='flex gap-2 items-center my-2'>
              <div>
                <p>{start_date}</p>
              </div>
              <div>
                <p>{end_date}</p>
              </div>
            </div>
          </div>

          {/* // TODO: Add the location input field */}

          <div>
            <p className='text-md font-medium'>Event Venue</p>
            <div className='flex gap-2 items-center'>
              <p>{location}</p>
            </div>
          </div>

          <div>
            <h2 className='text-2xl font-powerGrotesk'>About Event</h2>
            <TextEditor NonEditable content={about[0]} />
          </div>

          <div className='my-4 flex gap-2'>
            <Button variant={'outline'} className='w-full'>
              Save Draft
            </Button>
            <Button className='w-full'>Publish Event</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
