// NewDutyForm.tsx
import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

interface NewDutyFormProps {
  onFinish: () => void;
}

const NewDutyForm: React.FC<NewDutyFormProps> = ({ onFinish }) => {
  const handleSubmit = (values: any) => {
    axios.post('http://localhost:3000/duties', values)
      .then(response => {
        console.log('Duty created:', response.data);
        onFinish(); // Llama a la función onFinish para cerrar el modal
      })
      .catch(error => {
        console.error('Error creating duty:', error);
      });
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item name="id" label="ID">
        <Input type="number" />
      </Form.Item>
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
