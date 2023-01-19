import React from 'react'
import Menu from './Menu'

const withDashboardLayout = (WrappedComponent: React.ElementType) => {
  const WithDashboardLayout = () => {
    return (
      <section className='grid md:grid-cols-4'>
        <Menu />
        <div className='h-screen font-secondary bg-[#F9F9F9] md:col-span-3'>
          <WrappedComponent />
        </div>
      </section>
    )
  }
  return WithDashboardLayout
}

export default withDashboardLayout
