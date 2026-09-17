import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from "axios";

function ProductList() {
  const [products, setProduct] = useState([])
  const fetchProduct =() =>{
    axios.get('https://fakestoreapi.com/products')
    .then(response => {
      console.log(response)
    })
  }
  useEffect(()=>{
    fetchProduct()
  },[])
  return (
    <div className='bg-amber-300 w-2/3 flex items-start ps-8 gap-4 p-4 flex-wrap overflow-auto'>
      <pre>{JSON.stringify()}</pre>
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
