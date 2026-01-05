import CategoryButton from '@/components/CategoryButton'
import React from 'react'
import { Container } from 'react-bootstrap'


const CategoryComponent =async () => {
     const data = await fetch('http://localhost:8000/api/v1/product/viewcategory')
    const posts = await data.json()
    
    
  return (
    <Container>
      <div className='flex gap-x-6 my-10'>
        {
        posts.map(item=>(

          <div key={item._id}>
            <CategoryButton item={item}/>
          </div>
        ))
      }
      </div>
      

      
    </Container>
  )
}

export default CategoryComponent