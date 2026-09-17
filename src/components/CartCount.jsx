import React from 'react'

function CartCount() {
  return (
    <div className='relative'>
    <div className='w-15'>
      <img src='https://www.svgrepo.com/show/529452/cart-large-4.svg' alt='Cart'/>
    </div>
    <div className='text-violet-500 bg-white w-6 h-6 absolute top-1 left-10  flex justify-center items-center rounded-xl'>100</div>
    </div>
  )
}

export default CartCount
