import React from 'react'

function CartCount({itemCount}) {
  return (
    <div className='relative'>
    <div className='w-15'>
      <img src='https://www.svgrepo.com/show/529452/cart-large-4.svg' alt='Cart'/>
    </div>
    <div className='text-violet-500 bg-white w-6 h-6 absolute top-1 left-10  flex justify-center items-center rounded-xl'>{itemCount}</div>
    </div>
  )
}

export default CartCount
