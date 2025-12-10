import React, { useEffect, useState } from 'react'
import { Flex, Space, Table, Tag } from 'antd';
import axios from 'axios'

const ViewProduct = () => {
  let [allproduct,setAllProduct]=useState([])


  useEffect(() => {
    async function allProduct() {
      let data = await axios.get("http://localhost:8000/api/v1/product/viewproduct")
      let arr = []
      data.data.map(item => {
        arr.push(
          {
            key: '1',
            name: item.name,
            image: item.image,
            regularprice: item.saleprice,
            saleprice: item.regularprice,

          },
        )

      })
      setAllProduct(arr)
    }
    allProduct()

  }, [])





  const columns = [
    {
      title: 'Serial',
      dataIndex: 'serial',
      key: 'serial',
       render: (text,arr,index) => <p>{index+1}</p>,
      
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: text => <img width={50} src={`http://localhost:8000${text}`} alt="" />,
    },
    {
      title: 'Regular Price',
      dataIndex: 'regularprice',
      key: 'regularprice',
    },
    {
      title: 'Sale Price',
      dataIndex: 'saleprice',
      key: 'saleprice',
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
    <Table columns={columns} dataSource={allproduct} />
  )
}

export default ViewProduct