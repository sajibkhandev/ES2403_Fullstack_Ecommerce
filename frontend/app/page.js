import Bannar from '@/layouts/banner';
import React from 'react'
import Button from 'react-bootstrap/Button';
import CategoryComponent from '@/layouts/categoryComponent';
import ProductComponent from '@/components/ProductComponent';

const page = () => {
  return (
    <div>
      <Bannar/>
      <CategoryComponent/>
      <ProductComponent/>
    </div>
  )
}

export default page