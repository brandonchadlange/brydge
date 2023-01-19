import React from 'react'
import { useForm } from 'react-hook-form'
import { HiOutlineDocumentArrowUp } from 'react-icons/hi2'
import Button from './Button'
import { Input } from './Input'

const StructuredSyndicate = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data: any) => console.log(data)

  return (
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
        type='text'
        label='Name of Syndicate Head'
        placeholder="Enter Sydicate head's name"
        name='syndicate_head'
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
        <input type='file' id='utilityBill' className='invisible hidden' />
        <div className='flex flex-col ml-3 border-red-500 borde'>
          <p className='font-bold text-md'>Click to upload</p>
          <p className='text-sm text-blue'>Max 10MB</p>
        </div>
      </div>
      <Button type='submit' full>
        Submit
      </Button>
    </form>
  )
}

export default StructuredSyndicate
