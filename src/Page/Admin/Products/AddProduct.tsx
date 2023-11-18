import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';

const AddProduct = (props) => {
    
const onFinish = (values: any) => {
   props.addProduct(values)
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  
  type FieldType = {
    name?: string;
    price?: string;
    image?: string;
    description?:string,
    categoryId?:number

  };
  const validateProductName = (_, value) => {
    if (!value) {
      return Promise.reject('Product Name is required');
    } else if (value.length < 6) {
      return Promise.reject('Product Name should be at least 6 characters long');
    }
    return Promise.resolve();
  };
  const validatePrice = (_, value) => {
    if (!value) {
      return Promise.reject('Product Price is required');
    } else if (value < 0) {
      return Promise.reject('Product Price should be at least 6 characters long');
    }
    return Promise.resolve();
  };
  const validateDescription = (_, value) => {
    if (!value) {
      return Promise.reject('Description is required');
    } else if (value.lenght < 6) {
      return Promise.reject('Description should be at least 6 characters long');
    }
    return Promise.resolve();
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
    <Form.Item<FieldType>
      label="Product Name"
      name="name"
      rules={[{ required: true, message: 'Please input your name!',validator:validateProductName }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Product Price"
      name="price"
      rules={[{ required: true, message: 'Please input your price!',validator:validatePrice }]}
    >
      <Input />
    </Form.Item>
    
    <Form.Item<FieldType>
      label="Product Image"
      name="image"
      rules={[{ required: true, message: 'Please input your image' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Description"
      name="description"
      rules={[{ required: true, message: 'Please input your descrition',validator:validateDescription }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Category ID"
      name="categoryId"
      rules={[{ required: true, message: 'Please input your category' }]}
    >
      <Input />
    </Form.Item>
    

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Add
      </Button>
    </Form.Item>
  </Form>
    </div>
  )
}

export default AddProduct