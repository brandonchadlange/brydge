import React from 'react'
import Button from '@/components/Button'
import { Header } from '@/components/Header'
import { Input } from '@/components/Input'
import Link from 'next/link'
import { HiOutlineDocumentArrowUp } from 'react-icons/hi2'
import { useForm } from 'react-hook-form'

const Business = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data: any) => console.log(data)

  return (
    <>
      <Header />
      <main className='grid justify-around gap-10 px-8 mt-8 lg:px-20 md:gap-32 font-primary md:grid-cols-2'>
        <section className='col-span-1'>
          <div className='px-8 py-4 mb-4 text-white rounded-lg lg:w-3/5 bg-dark'>
            <p className='text-lg font-semibold mb'>Business</p>
            <p className='text-sm text-gray-400'>
              A group of persons that come together to invest. It is usually on
              a deal-by-deal basis.
            </p>
          </div>
          <div className='flex mb-4 lg:w-3/5'>
            <div className='p-0 mr-2 border-l-4 rounded border-blue'></div>
            <button className='w-full px-6 py-3 bg-gray-300 rounded-lg cursor-pointer focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600'>
              Exisiting Business
            </button>
          </div>
          <Link href='#' className='font-semibold underline text-blue'>
            Create a new business
          </Link>
          <p className='mt-2 text-sm text-gray-500'>
            This user is also a
            <span className='text-blue'>
              {' '}
              Merchant-Exporter, Importer, supplier, aggregator.
            </span>
          </p>
        </section>
        <section className='col-span-1 px-2 overflow-x-hidden overflow-y-auto'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              className='mb-4'
              type='text'
              label='Registered Name'
              placeholder='Name of company'
              name='registered_name'
              register={register}
            />
            <Input
              className='mb-4'
              type='number'
              label='RC Number'
              placeholder='Enter RC Number'
              name='rc_number'
              register={register}
            />
            <Input
              className='mb-4'
              type='number'
              label='Bank Verification Number'
              placeholder='Enter BVN'
              name='bvn'
              register={register}
              rules={{ required: true, maxLength: 11 }}
            />
            <div className='mb-2'>
              <label htmlFor='Operational Address'>Operational Address</label>
              <textarea
                className='w-full px-5 py-2 my-2 border border-gray-300 rounded-lg focus:outline-none focus:border-dark-300 focus:ring-1 focus:ring-dark-300'
                cols={20}
                rows={5}
                placeholder='Enter street name and number'
                {...register('operational_address')}
              ></textarea>
            </div>
            <div className='mb-2'>
              <label htmlFor='state'>State</label>
              <select
                name='state'
                defaultValue='default'
                className='w-full px-5 py-2 my-2 bg-white border border-gray-300 rounded-lg font-primary focus:outline-none focus:border-dark-300 focus:ring-1 focus:ring-dark-300'
              >
                <option value='default' disabled className='text-gray-300'>
                  Select state...
                </option>
                <option value='Abia'>Abia</option>
              </select>
            </div>
            <label>Utility Bill</label>
            <div className='flex px-5 py-3 mt-2 mb-8 border-2 border-dashed rounded-lg font-secondary bg-blue-50 border-blue'>
              <label htmlFor='utilityBill'>
                <HiOutlineDocumentArrowUp className='w-10 h-10 cursor-pointer text-blue' />
              </label>
              <input
                type='file'
                id='utilityBill'
                className='invisible hidden'
              />
              <div className='flex flex-col ml-3 border-red-500 borde'>
                <p className='font-bold text-md'>Click to upload</p>
                <p className='text-sm text-blue'>Max 10MB</p>
              </div>
            </div>
            <Button type='submit' full>
              Submit
            </Button>
          </form>
        </section>
      </main>
    </>
  )
}

export default Business
