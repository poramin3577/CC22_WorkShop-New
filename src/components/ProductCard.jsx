import React from 'react'

function ProductCard({product, addToCart}) {
  return (
    <div className="card bg-base-100 w-60 h-[420px] shadow-sm">
  <figure className='h-48  shrink-0 p-4'>
    <img
      className='w-full h-full object-contain mt-2 p-2'
      src={product.image}
      alt={product.title}
      />
  </figure>
  <div className="card-body flex-none gap-5">
    <h2 className="card-title text-[20px] line-clamp-1">{product.title}</h2>
    <p className='line-clamp-3 text-base leading-7'>{product.description}</p>
    <div className="flex justify-between items-center mt-auto">
      <p className='text-red-400 text-xl'>{product.price} THB</p>
      <button className="btn btn-sm btn-primary" onClick={addToCart}>Add to Cart</button>
    </div>
  </div>
</div>
  )
}

export default ProductCard
