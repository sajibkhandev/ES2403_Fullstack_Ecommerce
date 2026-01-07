import CategoryButton from '@/components/CategoryButton'
import React from 'react'
import { Container } from 'react-bootstrap'


const CategoryComponent =async () => {
     const data = await fetch('http://localhost:8000/api/v1/product/viewcategory')
    const posts = await data.json()
    console.log(posts);
    
    
    
  return (
    <Container>
      <div className='flex gap-x-6 my-10'>
        {
        posts.map(item=>(

          <div className='group relative' key={item._id}>
            <CategoryButton item={item}/>
            <ul className='hidden group-hover:block bg-teal-500  absolute top-[36px]  left-0 z-30 rounded'>
              {
             item.subcategorylist && item.subcategorylist.map(item2=>(
              
              
                
                   <li className='w-[100px] py-2'>{item2.name}</li>
               
              ))
            }
            </ul>
          </div>
        ))
      }
      </div>
      

      
    </Container>
  )
}

export default CategoryComponent