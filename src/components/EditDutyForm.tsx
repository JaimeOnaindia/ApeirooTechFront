// EditDutyForm.tsx
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

interface EditDutyFormProps {
  dutyId: number;
  dutyName: string;
  onSave: () => void;
  onClose: () => void;
}

const EditDutyForm: React.FC<EditDutyFormProps> = ({ dutyId, dutyName, onSave, onClose }) => {
  const [name, setName] = useState(dutyName);

  const handleSave = () => {
    axios.put(`http://localhost:3000/duties/${dutyId}`, { name })
      .then(response => {
        console.log('Duty updated:', response.data);
        onSave(); // Llama a la función onSave para indicar que se ha guardado el deber
      })
      .catch(error => {
        console.error('Error updating duty:', error);
      });
  };

  return (
    <Form>
      <Form.Item label="ID">
        <Input disabled value={dutyId} />
      </Form.Item>
      <Form.Item label="Name">
        <Input value={name} onChange={e => setName(e.target.value)} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={handleSave}>Save</Button>
        <Button onClick={onClose}>Close</Button>
      </Form.Item>
    </Form>
  );
};

export default EditDutyForm;
