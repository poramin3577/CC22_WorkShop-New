import React from 'react'
import ProductCard from './ProductCard'
import axios from "axios";

function ProductList() {

  return (
    <div className='bg-amber-300 w-2/3 flex items-start ps-8 gap-4 p-4 flex-wrap overflow-auto'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}

export default ProductList
