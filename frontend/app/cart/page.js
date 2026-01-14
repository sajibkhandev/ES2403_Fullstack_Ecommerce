import AddToCartComponent from '@/components/AddToCartComponent'
import React from 'react'



const Cart = async () => {
    const data = await fetch('http://localhost:8000/api/v1/product/viewaddtocart')
  const posts = await data.json()
  return (
    <AddToCartComponent cartdata={posts}/>
    
  )
}

export default Cart