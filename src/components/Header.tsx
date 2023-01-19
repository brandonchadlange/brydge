import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export const Header = () => {
  const router = useRouter()
  const { back } = router

  return (
    <header className='font-primary flex w-full h-[80px] px-6 justify-between items-center border-b border-slate-200'>
      <Link href='/' className='flex items-center h-auto overflow-hidden'>
        <Image
          src='/logo-black.jpg'
          alt='Brydge Logo'
          className='borde'
          width={100}
          height={80}
        />
      </Link>
      <button type='button' className='' onClick={() => back()}>
        Go Back
      </button>
    </header>
  )
}
