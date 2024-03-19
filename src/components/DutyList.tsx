import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import Duty from '../models/Duty';

const DutyList: React.FC = () => {
  const [duties, setDuties] = useState<Duty[]>([]);

  useEffect(() => {
    axios.get<Duty[]>('http://localhost:3000/duties')
      .then(response => {
        setDuties(response.data);
      })
      .catch(error => {
        console.error('Error fetching duties:', error);
      });
  }, []);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Button type="link" icon={<EditOutlined />} onClick={() => handleEdit(record.id)}>
          Edit
        </Button>
      ),
    },
  ];

  const handleEdit = (dutyId: number) => {
    // Aquí puedes manejar la lógica para la modificación de la fila
    console.log('Edit duty with ID:', dutyId);
  };

  return (
    <>
      <Button type="primary" style={{ marginBottom: '20px' }}>Create New Duty</Button>
      <Table dataSource={duties} columns={columns} rowKey="id" />
    </>
  );
};

export default DutyList;
