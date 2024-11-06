import Image from 'next/image'
import React from 'react'
import logo from '../../public/assets/XORA.svg'
import { Button } from '../ui/CustomButton'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='w-full min-h-[100px]  flex justify-between items-center'>
      <Link href='/'>
        <Image src={logo} height={20} alt='logo' />
      </Link>
      <Button href='/discover' variant='text' className='items-end'>
        Discover Events <ArrowUpRight />
      </Button>

      <div className='blur-[250px]  bg-gradient-to-t from-tertiary to-[#759204] absolute top-[-160px] left-0 right-0 mx-auto rounded-full h-[335px] w-[335px] z-[-999]' />
    </header>
  )
}

export default Header
