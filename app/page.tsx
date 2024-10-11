import { Button } from '@/components/ui/Button'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

import AsterickBig from '../public/assets/Asterisk-left.svg'
import AsterickSmall from '../public/assets/Asterisk-front.svg'
import DiamondSmall from '../public/assets/Diamond-right.svg'
import DiamondBig from '../public/assets/Diamond-left.svg'

export default function Home() {
  return (
    <main className='flex flex-col gap-10 items-center h-[80vh] max-lg:h-[40vh] relative py-20 max-lg:py-10'>
      <div className='flex flex-col items-center w-full'>
        <h1 className='text-4xl font-powerGrotesk '>
          Your One-Stop Event Solution.
        </h1>
        <p className='text-sm font-light tracking-widest'>
          Streamline Your Event Journey.
        </p>
      </div>
      <Button>
        Create Event <ArrowUpRight />
      </Button>

      {/* Images */}
      <Image
        src={AsterickBig}
        alt='Asterick Big'
        className='z-[2] absolute right-[-40px] bottom-[-60px]'
      />
      <Image
        src={AsterickSmall}
        alt='Asterick Big'
        className='z-[-10] absolute left-0 top-[-20px]'
      />
      <Image
        src={DiamondBig}
        alt='Asterick Big'
        className='z-[-10] absolute left-0 bottom-0'
      />
      <Image
        src={DiamondSmall}
        alt='Asterick Big'
        className='z-[-10] absolute right-0 top-0'
      />
    </main>
  )
}
