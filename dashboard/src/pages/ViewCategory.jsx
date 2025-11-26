import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Flex, Space, Table, Tag } from 'antd';

const ViewCategory = () => {
  let [allCategory, setAllCategory] = useState([])



  useEffect(() => {

    async function allcategory() {
      let data = await axios.get("http://localhost:8000/api/v1/product/viewcategory")
      let arr = []
      data.data.map(item => {
        arr.push(
          {
            key: item._id,
            name: item.name,

          },
        )
        
        setAllCategory(arr)
      })
    }

    allcategory()


  }, [])







  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',

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
      <h1 className='text-center text-5xl py-3'>All Categories</h1>
      <Table columns={columns} dataSource={allCategory} />

    </div>
  )
}

export default ViewCategory
