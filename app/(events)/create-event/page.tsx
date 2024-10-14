import { Input } from '@/components/ui/Input'

type Props = {}

export default function EventCreationPage({}: Props) {
  return (
    <section className='my-6'>
      <div className='flex justify-between '>
        <div className='flex-[0.4] h-full w-full px-6'>
          <div className='w-[350px] bg-black-700 h-[300px]' />
        </div>
        <div className='flex-[0.6] flex flex-col gap-5'>
          <Input
            type='text'
            size={'lg'}
            placeholder='Event name'
            className='font-powerGrotesk'
          />
          <Input
            type='text'
            placeholder='Give a small description about your event'
            className='ml-2'
          />
          <div className=''>
            <p>Event Date</p>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
