import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from "axios";

function ProductList({addToCart}) {
  const [products, setProduct] = useState([])
  const fetchProduct =() =>{
    axios.get('https://fakestoreapi.com/products')
    .then(response => {
      setProduct(response.data)
    })
  }
  useEffect(()=>{
    fetchProduct()
  },[])
  return (
    <div className='bg-amber-300 w-2/3 flex items-start ps-8 gap-4 p-4 flex-wrap overflow-auto'>
      {/* <pre>{JSON.stringify(products[0],null,2)}</pre>  */}
      {products.map(el=>(
        <ProductCard key={el.id} product={el} addToCart={addToCart}/>
      ))}
    </div>
  )
}

export default ProductList
