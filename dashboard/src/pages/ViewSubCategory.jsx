import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Flex, Space, Table, Tag } from 'antd';
const ViewSubCategory = () => {

  let [allSubCategory, setAllSubCategory] = useState([])
    useEffect(() => {

    async function allsubcategory() {
      let data = await axios.get("http://localhost:8000/api/v1/product/viewsubcategory")
      let arr = []
      data.data.map(item => {
        console.log(item.categoryId.name);
        
        arr.push(
          {
            key: item._id,
            subcategory: item.name,
            category:`(${item.categoryId.name})`

          },
        )
        
        setAllSubCategory(arr)
      })
    }

    allsubcategory()


  }, [])


   const columns = [
      {
        title: 'Sub Category',
        dataIndex: 'subcategory',
        key: 'subcategory',
  
      },
      {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
  
      },
  
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
  
            <a>Edit</a>
            <a>Delete</a>
          </Space>
        ),
      },
    ];
  
  return (
    <div className='mr-10'>
         <h1 className='text-center text-5xl py-3'>All SubCategories</h1>
         <Table columns={columns} dataSource={allSubCategory} />
   
       </div>
  )
}

export default ViewSubCategory
