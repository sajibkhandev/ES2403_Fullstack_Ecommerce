import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom'

const Registration = () => {
  let navigate=useNavigate()
     const onFinish = async values => {

    let data = await axios.post('http://localhost:8000/api/v1/authentication/registration', {
      username: values.username,
      email: values.email,
      password: values.password

    },
      {
        headers: {
          Authorization: "ertegdfbrtyrd2345"
        }
      }

    )
    if (data.data.error) {
      toast.error("This email is used")
    } else {
      toast.success("Registration done")
      
      
    }



  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        
      />
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>



      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input />
      </Form.Item>





      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>



      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <Link to='/forgetpassword'><p className='ml-32 cursor-pointer'>Forget Password</p></Link>
    </Form>
  )
}

export default Registration