import React from 'react'

function ProductCard({product}) {
  return (
    <div className="card bg-base-100 w-50 h-[400px] shadow-sm">
  <figure className=''>
    <img
      src={product.image}
      alt={product.title}
      />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default ProductCard
