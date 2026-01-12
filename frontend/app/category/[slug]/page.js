import React from 'react'

const Category = async ({ params }) => {
  let slug=await params
  // console.log(slug.slug);
  
  const data = await fetch(`http://localhost:8000/api/v1/product/viewallsubcategory?slug=${slug.slug}`)
  const posts = await data.json()
 
  
  
  return (
    posts.map(item=>(
      <ul key={item._id}>
        <li>{item.name}</li>
      </ul>
    ))
  )
}

export default Category