import React from 'react'
import LeftPanel from './LeftPanel'

const withAuthenticationLayout = (WrappedComponent: React.ElementType) => {
  const WithAuthenticationLayout = () => {
    return (
      <section className='w-full inline-block md:flex md:flex-row md:justify-between'>
        <LeftPanel />
        <div className='h-screen font-secondary bg-[#F9F9F9] w-full'>
          <WrappedComponent />
        </div>
      </section>
    )
  }

  return WithAuthenticationLayout
}

export default withAuthenticationLayout
