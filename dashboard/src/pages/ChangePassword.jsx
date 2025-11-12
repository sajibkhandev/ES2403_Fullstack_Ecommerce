import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios'
import {useParams ,useNavigate} from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify';

const ChangePassword = () => {
  let params=useParams()
  let navigate=useNavigate()
  // console.log(params.email);
  
      const onFinish =async values => {
        let data = await axios.post("http://localhost:8000/api/v1/authentication/changepassword", {
      email: params.email,
      newpassword:values.passward

    })
    
    
     if(data.data.success=="Reset Password"){
      toast.success("Reset Password");
      
      setTimeout(() => {
        navigate("/login")
        
      }, 2000);

     }else{
      toast.error("Cradiatial Inviled");
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
    <Form.Item
      label="New Password"
      name="passward"
      rules={[{ required: true, message: 'Please input your Password!' }]}
    >
      <Input.Password/>
    </Form.Item>

    
    

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Send
      </Button>
    </Form.Item>

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
  </Form>
  )
}

export default ChangePassword