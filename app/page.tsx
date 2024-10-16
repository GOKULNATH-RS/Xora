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
        <h1 className='text-4xl font-powerGrotesk '>
          Your One-Stop Event Solution.
        </h1>
        <p className='text-sm font-light tracking-widest'>
          Streamline Your Event Journey.
        </p>
      </div>
      <Button href='/create-event'>
        Create Event <ArrowUpRight />
      </Button>

      {/* Images */}
      <Image
        src={AsterickBig}
        alt='Asterick Big'
        className='z-[2] absolute right-[-40px] bottom-[-100px] max-md:hidden'
      />
      <Image
        src={AsterickSmall}
        alt='Asterick Small'
        className='z-[-10] absolute left-0 top-[-20px] max-md:hidden'
      />
      <Image
        src={DiamondBig}
        alt='Diamond Big'
        className='z-[-10] absolute left-0 bottom-0 max-md:hidden'
      />
      <Image
        src={DiamondSmall}
        alt='Diamond Small'
        className='z-[-10] absolute right-0 top-0 max-md:hidden'
      />
    </main>
  )
}
