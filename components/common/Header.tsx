import Image from 'next/image'
import React from 'react'
import logo from '../../public/assets/XORA.svg'
import { Button } from '../ui/CustomButton'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { auth, signIn, signOut } from '@/auth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

type Props = {}

const Header = async (props: Props) => {
  const session = await auth()
  return (
    <header className='w-full min-h-[100px]  flex justify-between items-center'>
      <Link href='/'>
        <Image src={logo} height={20} alt='logo' />
      </Link>

      {session && session?.user ? (
        <div className='flex items-center'>
          <Button href='/discover' variant='text' className='items-end'>
            Discover Events <ArrowUpRight />
          </Button>
          {session?.user?.image && (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src={session.user.image} />
                    <AvatarFallback className='bg-black-500 text-white border-[2px] border-white/40'>
                      {session.user.name?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>{session.user.name}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem className='p-0'>
                    <form
                      action={async () => {
                        'use server'
                        await signOut({ redirectTo: '/' })
                      }}
                      className='w-full h-full'
                    >
                      <button
                        type='submit'
                        className='w-full h-full px-2 py-1.5 text-start'
                      >
                        Logout
                      </button>
                    </form>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </div>
      ) : (
        <form
          action={async () => {
            'use server'
            await signIn('google')
          }}
        >
          <Button type='submit' variant='text' className='items-end'>
            Login
          </Button>
        </form>
      )}

      <div className='blur-[250px]  bg-gradient-to-t from-tertiary to-[#759204] absolute top-[-160px] left-0 right-0 mx-auto rounded-full h-[335px] w-[335px] z-[-999]' />
    </header>
  )
}

export default Header
