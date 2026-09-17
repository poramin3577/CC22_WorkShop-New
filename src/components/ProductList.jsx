import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from "axios";

function ProductList() {
  const [products, setProduct] = useState([])
  const fetchProduct =() =>{
    axios.get('https://fakestoreapi.com/products')
    .then(response => {
      console.log(response.data)
      setProduct(response.data)
    })
  }
  useEffect(()=>{
    fetchProduct()
  },[])
  return (
    <div className='bg-amber-300 w-2/3 flex items-start ps-8 gap-4 p-4 flex-wrap overflow-auto'>
      <pre>{JSON.stringify(products[0],null,2)}</pre> 
      {products.map(product=>(
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  )
}

export default ProductList
