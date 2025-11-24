import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { ToastContainer,toast } from 'react-toastify';
import axios from 'axios';

const AddCategory = () => {
  let userInfo=JSON.parse(localStorage.getItem("userInfo"))
  
  
    const onFinish =async values => {


  let data = await axios.post("http://localhost:8000/api/v1/product/addcategory", {
      name:values.category,
      ownerId:userInfo.id

    })
    if(data.data.success=="Category has been Created"){
      toast.success("Category has been Created")

    }else if(data.data.error=="Category Already User"){
      toast.error("Category Already User")

    }
   
   


    }
    
    
    
   

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
  return (
    <div>
         <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Category"
      name="category"
      rules={[{ required: true, message: 'Please input your Category!' }]}
    >
      <Input />
    </Form.Item>
   

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Create
      </Button>
    </Form.Item>
   
     <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="light"
            
          />
  </Form>
      
    </div>
  )
}

export default AddCategory
