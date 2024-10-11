import Image from 'next/image'
import React from 'react'
import logo from "../../public/assets/XORA.png"
import { Button } from '../ui/Button'
import { ArrowUpRight } from 'lucide-react'
import { Gradient } from '../ui/Gradient'


type Props = {}

const Header = (props: Props) => {
  return (
    <header className='w-full min-h-[100px]  flex justify-between items-center'>

        <Image src={logo}  height={20} alt="logo" />
        <Button variant='text' className='items-end'>Explore Events <ArrowUpRight /></Button>

        <div className='blur-[250px]  bg-gradient-to-t from-action to-[#759204] absolute top-[-160px] left-0 right-0 mx-auto rounded-full h-[335px] w-[335px]' />
    </header>
  )
}

export default Header