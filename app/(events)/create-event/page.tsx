import { Input } from '@/components/ui/CustomInput'
import dateRange from '../../../public/assets/date-range.svg'
import Image from 'next/image'

type Props = {}

export default function EventCreationPage({}: Props) {
  return (
    <section className='my-6'>
      <div className='flex justify-between '>
        <div className='flex-[0.4] h-full w-full px-6'>
          <div className='w-[350px] bg-black-700/50 rounded-lg h-[300px]' />
        </div>
        <div className='flex-[0.6] flex flex-col gap-5'>
          <Input
            type='text'
            size='lg'
            placeholder='Enter your Event name'
            className='font-powerGrotesk'
          />
          <Input
            type='text'
            placeholder='Give a small description about your event'
            className='ml-2'
          />
          <div className=''>
            <p className='text-md font-medium'>Event Date</p>
            <div className='flex gap-2 items-center'>
              <div>date picker</div>
              <div>
                <Image src={dateRange} height={16} alt='date range' />
              </div>
              <div>date picker</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
