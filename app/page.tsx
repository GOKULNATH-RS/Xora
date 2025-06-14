import { Button } from '@/components/ui/CustomButton'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

import AsterickBig from '../public/assets/Asterisk-left.svg'
import AsterickSmall from '../public/assets/Asterisk-front.svg'
import DiamondSmall from '../public/assets/Diamond-right.svg'
import DiamondBig from '../public/assets/Diamond-left.svg'

export default function Home() {
  return (
    <main className='flex flex-col gap-10 lg:gap-6 items-center min-h-[550px] relative py-20 md:py-16'>
      <div className='flex flex-col items-center w-full mt-10'>
        <h1 className='text-4xl font-powerGrotesk max-lg:text-3xl'>
          Your One-Stop Event Solution.
        </h1>
        <p className='text-sm font-light tracking-widest'>
          Streamline Your Event Journey.
        </p>
      </div>
      <div className='flex'>
        {/* <Button href='/create-event'>Create Event</Button> */}
        <Button href='/discover' className='items-end'>
          Discover Events 
        </Button>
      </div>

      {/* Images */}
      <Image
        src={AsterickBig}
        alt='Asterick Big'
        className='z-[2] absolute right-[-40px] bottom-[-100px] max-md:hidden max-lg:scale-[0.8] duration-300 max-lg:right-[-100px] max-lg:bottom-[-80px]'
      />
      <Image
        src={AsterickSmall}
        alt='Asterick Small'
        className='z-[-10] absolute left-0 top-[-20px] max-md:hidden max-lg:scale-[0.8] duration-300 max-lg:top-[-40px] max-lg:left-[-10px]'
      />
      <Image
        src={DiamondBig}
        alt='Diamond Big'
        className='z-[-10] absolute left-0 bottom-0 max-md:hidden max-lg:scale-[0.8] duration-300 max-lg:bottom-[-20px] max-lg:left-[-10px]'
      />
      <Image
        src={DiamondSmall}
        alt='Diamond Small'
        className='z-[-10] absolute right-0 top-0 max-md:hidden max-lg:scale-[0.8] duration-300 max-lg:top-[-10px] max-lg:right-[-10px]'
      />
    </main>
  )
}
