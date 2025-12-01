import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import slugify from 'react-slugify';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Essentials, Paragraph, Bold, Italic } from 'ckeditor5';
import { FormatPainter } from 'ckeditor5-premium-features';

const AddProduct = () => {
  let [slug,setSlug]=useState("")
  console.log(slug);
  
const onFinish = values => {
  console.log('Success:', values);
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
      name="productname"
      rules={[{ required: true, message: 'Please input your Product Name!' }]}
    >
      <Input onChange={(e)=>setSlug(e.target.value)}/>
    </Form.Item>
    <Form.Item
      label="Product Des"
      name="productdes"
      rules={[{ required: true, message: 'Please input your Product Product Des!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Image"
      name="image"
      rules={[{ required: true, message: 'Please input your Product Image!' }]}
    >
      <Input type='file'/>
    </Form.Item>


    <Form.Item
      label="Regular Pirce"
      name="regular"
      rules={[{ required: true, message: 'Please input your Regular Pirce!' }]}
    >
      <Input />

    </Form.Item>
    <Form.Item
      label="Sale Price"
      name="sale"
      rules={[{ required: true, message: 'Please input your Sale Price!' }]}
    >
      <Input />
    </Form.Item>


    {/* <Form.Item
      label="Slug"
      name="slug"
      rules={[{ required: true, message: 'Please input your Slug!' }]}
    >
      <Input defaultValue={slugify(slug)}/>
    </Form.Item> */}
    <label className='ml-32' htmlFor="slug"> Slug: 
    <input className='border border-[#afadad] rounded-md ml-10 py-1 px-3 w-[66%] mb-10' id="slug" defaultValue={slugify(slug)} type="text"  disabled/>
    </label>

  

  

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
}

export default AddProduct