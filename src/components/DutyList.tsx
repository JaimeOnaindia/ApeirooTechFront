import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Modal } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import Duty from '../models/Duty';
import NewDutyForm from './NewDutyForm';

const DutyList: React.FC = () => {
  const [duties, setDuties] = useState<Duty[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleEdit = (dutyId: number) => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

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

  return (
    <>
      <Button type="primary" style={{ marginBottom: '20px' }} onClick={() => setIsModalVisible(true)}>Create New Duty</Button>
      <Table
        dataSource={duties}
        columns={columns}
        rowKey="id"
      />
      <Modal
        title="Create New Duty"
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
      >
        <NewDutyForm onFinish={handleModalClose} />
      </Modal>
    </>
  );
};

export default DutyList;
