import React from 'react'
import { Header } from '@/components/Header'
import Link from 'next/link'
import StructuredSyndicate from '@/components/StructuredSyndicate'
import UnstructuredSyndicate from '@/components/UnstructuredSyndicate'

const Syndicate = () => {
  const [view, setView] = React.useState('structured')

  return (
    <>
      <Header />
      <main className='grid justify-around gap-10 px-8 mt-8 lg:px-20 md:gap-32 font-primary md:grid-cols-2'>
        <section className='col-span-1'>
          <div className='px-8 py-4 mb-4 text-white rounded-lg lg:w-3/5 bg-dark'>
            <p className='text-lg font-semibold mb'>Syndicate</p>
            <p className='text-sm text-gray-400'>
              A group of persons that come together to invest. It is usually on
              a deal-by-deal basis.
            </p>
          </div>
          <div className='flex mb-2 border lg:w-3/5'>
            {view === 'structured' && (
              <div className='p-0 mr-2 border-l-4 rounded border-blue'></div>
            )}
            <button
              className='w-full px-6 py-3 bg-gray-300 rounded-lg cursor-pointer focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600'
              onClick={() => setView('structured')}
            >
              Structured Syndicate
            </button>
          </div>
          <div className='flex mb-4 lg:w-3/5'>
            {view === 'unstructured' && (
              <div className='p-0 mr-2 border-l-4 rounded border-blue'></div>
            )}
            <button
              className='w-full px-6 py-3 bg-gray-300 rounded-lg cursor-pointer focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600'
              onClick={() => setView('unstructured')}
            >
              Unstructured Syndicate
            </button>
          </div>
          <Link href='#' className='font-semibold underline text-blue'>
            Create a new syndicate
          </Link>
          <p className='mt-2 text-sm text-gray-500'>
            To wire this amount to the company, your total raise must cover any
            fees. <span className='text-blue'>See fee overview</span>
          </p>
        </section>
        <section className='col-span-1 px-2'>
          {view === 'structured' && <StructuredSyndicate />}
          {view === 'unstructured' && <UnstructuredSyndicate />}
        </section>
      </main>
    </>
  )
}

export default Syndicate
