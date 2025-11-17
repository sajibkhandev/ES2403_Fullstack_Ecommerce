import React, { use } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
const items = [
  {
    key: 'sub1',
    label: 'Admin',
    icon: <MailOutlined />,
    children: [
      {
        key: 'g1',
        label: 'Merchant',
       
      },
      {
        key: 'g2',
        label: 'User',
        
      },
    ],
  },
   {
    type: 'divider',
  },
  {
    key: 'sub2',
    label: 'Category',
    icon: <AppstoreOutlined />,
    children: [
      { key: '/dashboard/addcategory', label: 'Add Category' },
      { key: '/dashboard/viewcategory', label: 'View Category' },
      
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'sub4',
    label: 'SubCategory',
    icon: <SettingOutlined />,
    children: [
      { key: '/dashboard/addsubcategory', label: 'Add SubCategory' },
      { key: '/dashboard/viewsubcategory', label: 'View SubCategory' },
      
    ],
  },

   {
    type: 'divider',
  },
  {
    key: 'sub5',
    label: 'Product',
    icon: <SettingOutlined />,
    children: [
      { key: '11', label: 'Add Product' },
      { key: '12', label: 'View Product' },
      
    ],
  },
   {
    type: 'divider',
  },
  {
    key: 'sub6',
    label: 'Veriant',
    icon: <SettingOutlined />,
    children: [
      { key: '13', label: 'Add Veriant' },
      { key: '14', label: 'View Veriant' },
      
    ],
  },
   {
    type: 'divider',
  },
  {
    key: 'sub7',
    label: 'Discount',
    icon: <SettingOutlined />,
    children: [
      { key: '15', label: 'Add Discount' },
      { key: '16', label: 'View Discount' },
      
    ],
  },
  
];

const Dashboard = () => {
    let navigate=useNavigate()
    
  const onClick = e => {
    console.log(e.key);
    navigate(e.key)
    

  };
  return (
     <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  )
}

export default Dashboard
