import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

interface DeleteDutyFormProps {
  dutyId: number;
  dutyName: string;
  onDeleted: () => void;
}

const DeleteDutyForm: React.FC<DeleteDutyFormProps> = ({ dutyId, dutyName, onDeleted }) => {
  
  const handleDelete = () => {
    axios.delete(`http://localhost:3000/duties/${dutyId}`)
        .then(response => {
        console.log('Duty deleted:', response.data);
        onDeleted();
        })
        .catch(error => {
        console.error('Error deleting duty:', error);
        });
  };

  return (
    <Form>
      <Form.Item label="ID">
        <Input disabled value={dutyId} />
      </Form.Item>
      <Form.Item label="Name">
        <Input disabled value={dutyName} />
      </Form.Item>
      <Form.Item>
        <Button type="dashed" onClick={handleDelete}>Delete</Button>
      </Form.Item>
    </Form>
  );
};

export default DeleteDutyForm;
