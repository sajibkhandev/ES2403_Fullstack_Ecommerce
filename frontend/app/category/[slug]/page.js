import React from 'react'

const Category = async ({ params }) => {
  let slug=await params
  const data = await fetch('http://localhost:8000/api/v1/product/viewallsubcategory')
  const posts = await data.json()
 
  
  
  return (
    posts.map(item=>(
      <ul>
        <li>{item.name}</li>
      </ul>
    ))
  )
}

export default Category