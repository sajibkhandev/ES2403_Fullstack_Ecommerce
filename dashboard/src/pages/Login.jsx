import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify';

const Login = () => {
  let navigate=useNavigate()
  const onFinish =async values => {


  let data = await axios.post("http://localhost:8000/api/v1/authentication/login", {
      email: values.email,
      password:values.password

    })
    console.log(data);
    localStorage.setItem("userInfo",JSON.stringify(data.data))

    if(data.data.error=="Creditial Inviled"){
      toast.error("Cradiatial Inviled");
      
    }else if(!data.data.emailVerification){
      toast.error("Very your account")

    }else if(data.data.role=='user'){
      toast.error("Become a Seller")

    }
    else{
      toast.success("Login Successful");
       setTimeout(() => {
        navigate("/dashboard")
        
      }, 2000)

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
        Login
      </Button>
    </Form.Item>
     <Link to='/forgetpassword'><p className='ml-32 cursor-pointer'>Forget Password</p></Link>
     <ToastContainer
            position="top-center"
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
  )
}

export default Login