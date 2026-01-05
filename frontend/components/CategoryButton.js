
"use client"
import Link from 'next/link';
import React from 'react'
import Button from 'react-bootstrap/Button';
export default function CategoryButton({item}) {
   
    
  return (
    
        <Link href={`/category/${item._id}`}><Button  variant="secondary">{item.name}</Button></Link>
    
  )
}
