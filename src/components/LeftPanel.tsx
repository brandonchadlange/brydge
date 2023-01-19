import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

const LeftPanel = () => {
  return (
    <div className='hidden md:block max-w-4xl'>
      <div className='relative flex flex-col justify-center h-screen text-white left-panel md:col-span-1 p-7 font-primary bg-dark-500'>
        <Link href='/' className='absolute text-2xl font-bold top-6'>
          Brydge.
        </Link>
        {/* <Link href='/' className='absolute text-2xl font-bold top-6'>
          <Image
            src='/logo-white.png'
            alt='Brydge.com'
            className=''
            width={100}
            height={100}
          />
        </Link> */}
        <div>
          <h2 className='mb-3 text-3xl font-bold'>
            We are facilitating deals from different industries, handling
            diligence and sourcing.
          </h2>
          <p className='mb-3 opacity-80'>Over 1000+ investors and counting</p>
          <Image
            src='/avatar-group.png'
            alt='avatar faces'
            className='my-3'
            width={150}
            height={50}
          />
          <Link href='#' className='underline opacity-80'>
            Join our community
          </Link>
        </div>
      </div>

      {/* styles */}
      <style jsx>{`
        .left-panel {
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.85),
              rgba(0, 0, 0, 0.85)
            ),
            url('/wood-mask.jpg');
        }
      `}</style>
    </div>
  )
}

export default LeftPanel
