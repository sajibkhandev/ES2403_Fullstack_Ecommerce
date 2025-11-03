import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import {useParams} from 'react-router-dom'
import axios from 'axios';

const Otp = () => {
  let params=useParams()
  // console.log(params.email);

  const onFinish = async values => {
     let data= await axios.post("http://localhost:3000/api/v1/authentication/otp",{
      email:params.email,
      otp:values.otp

     })
     console.log(data);
    
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
      <Form.Item
        label="Otp"
        name="otp"
        rules={[{ required: true, message: 'Please input your Otp!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Otp