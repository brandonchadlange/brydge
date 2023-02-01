import Image from 'next/image'
import Link from 'next/link'
import { getProviders, signIn, LiteralUnion, ClientSafeProvider, SignInResponse } from "next-auth/react"
import { BuiltInProviderType } from 'next-auth/providers'

const Signup = () => {
  
  return (
    <div className='flex items-center justify-center h-screen font-primary w-100'>
      <div className='flex flex-col w-full p-6 text-center h-4/5 md:w-3/5 md:h-3/4'>
        <span className='text-2xl font-bold'>Welcome✋</span>
        <span className='my-5 text-xl font-semibold opacity-70 md:my-3'>
          Choose your preferred mode of sign up below
        </span>
        <span className='mb-5 text-sm md:text-sm'>
          By signing in, i agree to compound’s{' '}
          <Link href='#' className='text-[#79B100]'>
            terms
          </Link>{' '}
          &{' '}
          <Link href='#' className='text-[#79B100]'>
            Privacy Policy
          </Link>
        </span>
        {
          // Object.values(providers).map((provider => (
          //   <AuthButton text={`Sign in with ${provider.name}`} image={`/${provider.name.toLowerCase()}.svg`} onClick={signIn(provider.id)} key={provider.name}/>
          // )))

          <AuthButton text={`Sign in with google`} image={`/google.svg`} onClick={signIn('google')} />
        }
        <Divider />
        <Link
          href='/signup/email'
          className='flex items-center justify-center w-full py-3 mx-auto mt-4 mb-3 text-white border rounded-full sm:w-4/5 bg-dark'
        >
          Sign up with Email & Phone number
        </Link>
        <span>
          Already have an account?{' '}
          <Link href='/login' className='text-[#79B100]'>
            Login
          </Link>
        </span>
      </div>
    </div>
  )
}

const AuthButton = ({ image, text, onClick }: { image: string; text: string; onClick: Promise<SignInResponse | undefined>  }) => {
  return (
    <button onClick={() => onClick} className='flex items-center justify-center w-full py-3 mx-auto mb-3 border rounded-full sm:w-4/5 border-dark-400'>
      <Image src={image} alt='Social Icon' width={25} height={25} />
      <p className='ml-3'>{text}</p>
    </button>
  )
}

const Divider = () => {
  return (
    <>
      <div className='w-4/5 py-4 ml-auto mr-auto overflow-hidden text-center divider text-dark before:border-b before:border-dark-100 before:inline-block before:h-2 before:relative before:align-middle before:w-1/2 before:mb-2 after:border-b after:border-dark-100 after:inline-block after:h-2 after:relative after:align-middle after:w-1/2 after:mb-2 before:right-2 before:ml-[-50%] after:left-2 after:mr-[-50%]'>
        OR
      </div>
    </>
  )
}

export default Signup
