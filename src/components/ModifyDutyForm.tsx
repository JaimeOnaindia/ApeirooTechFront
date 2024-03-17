// ModifyDutyForm.tsx
import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// Se elimina la interfaz ModifyDutyFormProps porque ya no se pasará dutyId como prop

const ModifyDutyForm: React.FC = () => {
  const { dutyId } = useParams<{ dutyId: string }>(); // Obtener el dutyId de los parámetros de la ruta

  const onFinish = (values: any) => {
    axios.put(`/api/duties/${dutyId}`, values)
      .then(response => {
        console.log('Duty updated:', response.data);
      })
      .catch(error => {
        console.error('Error updating duty:', error);
      });
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter duty name' }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Update</Button>
      </Form.Item>
    </Form>
  );
};

export default ModifyDutyForm;
