import React from 'react'
import CartCount from './CartCount'

function Header({itemCount}) {
  return (
    <div className='h-1/12 flex justify-between items-center px-4'>
      <div className='h-5/5  flex items-center gap-2'>
          <img className="h-full" src='https://www.svgrepo.com/show/501826/shop.svg' alt='Shop' />
          <h3 className='text-3xl font-bold text-blue-600'>CC22 SHOP</h3>
      </div>
      <CartCount itemCount={itemCount}/>
    </div>
  )
}

export default Header
