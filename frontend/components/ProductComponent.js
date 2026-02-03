
import React from 'react'
import CardComponent from './CardComponent';


const ProductComponent =async () => {
      const data = await fetch('http://localhost:8000/api/v1/product/viewproduct')
      const posts = await data.json()
//   console.log(posts);
  
    return (
        <CardComponent  allPro={posts}/>
       
    )
}

export default ProductComponent