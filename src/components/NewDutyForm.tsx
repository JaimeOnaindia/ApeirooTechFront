// NewDutyForm.tsx
import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const NewDutyForm: React.FC = () => {
  const onFinish = (values: any) => {
    axios.post('/api/duties', values)
      .then(response => {
        console.log('Duty created:', response.data);
      })
      .catch(error => {
        console.error('Error creating duty:', error);
      });
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter duty name' }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Create</Button>
      </Form.Item>
    </Form>
  );
};

export default NewDutyForm;