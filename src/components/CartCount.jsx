import React from 'react'

function CartCount() {
  return (
    <div className='relative'>
    <div className='w-15'>
      <img src='https://www.svgrepo.com/show/529452/cart-large-4.svg' alt='Cart'/>
    </div>
    <div className='text-violet-500 bg-white w-5 h-5 absolute top-2 right-0  flex justify-center items-center rounded-xl'>9</div>
    </div>
  )
}

export default CartCount
