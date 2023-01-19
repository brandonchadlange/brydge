import Button from '@/components/Button'
import { Header } from '@/components/Header'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

const Onboarding = () => {
  const { register, handleSubmit } = useForm()
  const router = useRouter()
  const { push } = router

  const onSubmit = (data: any) => {
    const { user_type } = data

    if (user_type === 'syndicate') {
      push('/onboarding/syndicate')
    } else if (user_type === 'business') {
      push('/onboarding/business')
    }
  }

  return (
    <>
      <Header />
      <main className='font-primary w-fit px-4 mx-auto mt-12 h-[calc(100vh-80px)] flex flex-col items-center'>
        <h1 className='text-2xl font-bold'>Welcome to brydge 🎉</h1>
        <p className='my-5 text-dark-300'>
          Choose your preferred option to get started
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className='mx-auto sm:w-2/3'>
          <ul className='font-medium bg-white rounded-lg text-dark'>
            <li className='w-full p-2 border border-gray-400 rounded-lg focus-within:border focus-within:border-dark-500'>
              <div className='flex pl-3'>
                <input
                  type='radio'
                  value='syndicate'
                  id='list-syndicate-radio'
                  className='w-4 h-4 mt-4 bg-gray-600 border-gray-300 text-dark-600 accent-dark-400 focus:ring-dark-500'
                  {...register('user_type')}
                />
                <label
                  htmlFor='list-syndicate-radio'
                  className='w-full py-3 ml-5 text-sm font-medium text-gray-900'
                >
                  <span className='block font-bold text-md'>Syndicate</span>
                  <span className='text-gray-500'>
                    An Individual or a group of persons that come together to
                    invest. It is usually on a deal-by-deal basis.
                  </span>
                </label>
              </div>
            </li>
            <li className='w-full p-2 mt-3 border border-gray-400 rounded-lg focus-within:border focus-within:border-dark-500'>
              <div className='flex pl-3'>
                <input
                  type='radio'
                  value='business'
                  id='list-business-radio'
                  className='w-4 h-4 mt-4 bg-gray-600 border-gray-300 text-dark-600 accent-dark-400 focus:ring-dark-500'
                  {...register('user_type')}
                />
                <label
                  htmlFor='list-business-radio'
                  className='w-full py-3 ml-5 text-sm font-medium text-gray-900'
                >
                  <span className='block font-bold text-md'>Business</span>
                  <span className='text-gray-500'>
                    This user is also a Merchant- Exporter, Importer, supplier,
                    aggregator.
                  </span>
                </label>
              </div>
            </li>
          </ul>
          <Button type='submit' className='my-6' full>
            Continue
          </Button>
        </form>
        <Link href='/dashboard' className='underline'>
          Skip to dashboard
        </Link>
      </main>
    </>
  )
}

export default Onboarding
