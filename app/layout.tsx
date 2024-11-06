import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Manrope } from 'next/font/google'
import Header from '@/components/common/Header'

const powerGrotesk = localFont({
  src: '..//public/fonts/PowerGrotesk-Regular.ttf',
  variable: '--font-powerGrotesk',
  weight: '400'
})

const manRope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Xora',
  description:
    'Xora is an innovative event platform designed to streamline event management and enhance attendee experiences.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${manRope.className} ${powerGrotesk.variable} antialiased inner-width dark`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
