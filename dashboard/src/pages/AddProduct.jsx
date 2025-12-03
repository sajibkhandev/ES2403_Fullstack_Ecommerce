import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import slugify from 'react-slugify';
import { ToastContainer,toast } from 'react-toastify';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import axios from 'axios'

const AddProduct = () => {
  let [slug,setSlug]=useState("")
  let [des,setDes]=useState("")
  const { quill, quillRef } = useQuill();

  // console.log(quill);    
  // console.log(quillRef)

 
    useEffect(()=>{
      if(quill){
        quill.on('text-change',function(){
          setDes(quill.root.innerHTML);
        })
      }
    },[quill])


  
  const onFinish =async values => {
     let data = await axios.post("http://localhost:8000/api/v1/product/addproduct", {
        name:values.name,
        des:des,
        image:values.image,
        regularprice:values.regularprice,
        saleprice:values.saleprice,
        slug:slug


    })
    console.log(data);
    if(data.data.success=="Product Created"){
      toast.success("Product Created")

    }else if(data.data.error=="Product existed"){
      toast.error("Product existed")

    }
  
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
}
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
      label="Product Name"
      name="name"
      rules={[{ required: true, message: 'Please input your Product Name!' }]}
    >
      <Input onChange={(e)=>setSlug(e.target.value)}/>
    </Form.Item>
    

    <label className='ml-32' htmlFor="">Description:
          <div style={{ width: 500, height: 150, marginLeft:200 ,marginBottom:100 }}>
          <div ref={quillRef} />
      </div>
    </label>



    <Form.Item
      label="Image"
      name="image"
      rules={[{ required: true, message: 'Please input your Product Image!' }]}
    >
      <Input type='file'/>
    </Form.Item>


    <Form.Item
      label="Regular Pirce"
      name="regularprice"
      rules={[{ required: true, message: 'Please input your Regular Pirce!' }]}
    >
      <Input />

    </Form.Item>
    <Form.Item
      label="Sale Price"
      name="saleprice"
      rules={[{ required: true, message: 'Please input your Sale Price!' }]}
    >
      <Input />
    </Form.Item>
    
    <label className='ml-32' htmlFor="slug"> Slug: 
    <input className='border border-[#afadad] rounded-md ml-10 py-1 px-3 w-[66%] mb-10' id="slug" defaultValue={slugify(slug)} type="text"  disabled/>
    </label>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
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
  )
}

export default AddProduct