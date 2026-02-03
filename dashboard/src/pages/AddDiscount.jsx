import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { Select, Space } from 'antd';
import axios from 'axios'

const AddDiscount = () => {
    let [discounttype,setDiscountType]=useState("")
    const onFinish =async values => {

        
  let data = await axios.post("http://localhost:8000/api/v1/product/adddiscount", {
      discountname:values.discountname,
      discountamount:values.discoutamount,
      discounttype:discounttype,
      discountrange:values.discountrange,

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
                label="Discount Name"
                name="discountname"
                rules={[{ required: true, message: 'Please input your Discount Name!' }]}
            >
                <Input />
            </Form.Item>



            <Form.Item
                label="Discount Amount"
                name="discoutamount"
                rules={[{ required: true, message: 'Please input your Discount Amount!' }]}
            >
                <Input />
            </Form.Item>

            <label className='ml-20' htmlFor="type">
                Discount Type:
                <Select
                    defaultValue="fixed"
                    id='type'
                    style={{ width: 120 }}
                      onChange={(e)=>setDiscountType(e)}
                    options={[
                        { value: 'fixed', label: 'Fixed' },
                        { value: 'percentage', label: 'Percentage' },
                        { value: 'delivery', label: 'Delivery' },
                    ]}
                />
            </label>
             <Form.Item
                label="Discount Range"
                name="discountrange"
                rules={[{ required: true, message: 'Please input your Discount Range!' }]}
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

export default AddDiscount