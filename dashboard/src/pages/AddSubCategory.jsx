import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, Select } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const AddSubCategory = () => {
  let [allcat,setAllcat]=useState([])
  let [categoryId,setCategoryId]=useState('')
  let userInfo = JSON.parse(localStorage.getItem("userInfo"))
  const onFinish = async values => {


    let data = await axios.post("http://localhost:8000/api/v1/product/addsubcategory", {

      name: values.subcategory,
      ownerId: userInfo.id,
      categoryId: categoryId

    })
    console.log(data);

    // if (data.data.success == "Category has been Created") {
    //   toast.success("Category has been Created")

    // } else if (data.data.error == "Category Already User") {
    //   toast.error("Category Already User")

    // }




  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onChange = value => {
    setCategoryId(value)
  };
  const onSearch = value => {
    console.log('search:', value);
  };



  useEffect(() => {
    async function allCat() {
      let data = await axios.get("http://localhost:8000/api/v1/product/viewcategory")
      let arr = []


      data.data.map(item => {

        arr.push(
          {
            value: item._id,
            label: item.name,
          },
        )

      })
      setAllcat(arr)



    }
    allCat()

  }, [])







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
          label="Sub Category"
          name="subcategory"
          rules={[{ required: true, message: 'Please input your Sub Category' }]}
        >
          <Input />
        </Form.Item>


        <label className='ml-28 ' htmlFor="category"> Category:
          <Select
            id="category"
            showSearch={{ optionFilterProp: 'label', onSearch }}
            placeholder="Select a person"
            onChange={onChange}
            options={allcat}
          />



        </label>
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

export default AddSubCategory
