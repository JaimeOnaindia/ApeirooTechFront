import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

interface EditDutyFormProps {
  dutyId: number;
  dutyName: string;
  onSave: () => void;
}

const EditDutyForm: React.FC<EditDutyFormProps> = ({ dutyId, dutyName, onSave}) => {
  const [name, setName] = useState(dutyName);

  useEffect(() => {
    setName(dutyName);
  }, [dutyName]);

  const handleSave = () => {
    axios.put(`http://localhost:3000/duties/${dutyId}`, { name })
      .then(response => {
        console.log('Duty updated:', response.data);
        onSave();
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
      </Form.Item>
    </Form>
  );
};

export default EditDutyForm;
