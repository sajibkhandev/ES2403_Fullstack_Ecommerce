import Bannar from '@/layouts/banner';
import React from 'react'
import Button from 'react-bootstrap/Button';
import CategoryComponent from '@/layouts/categoryComponent';

const page = () => {
  return (
    <div>
      <Bannar/>
      <CategoryComponent/>
    </div>
  )
}

export default page