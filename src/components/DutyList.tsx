import React, { useState, useEffect } from 'react';
import { Table, Button, Modal } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';
import NewDutyForm from './NewDutyForm';
import EditDutyForm from './EditDutyForm';
import DeleteDutyForm from './DeleteDutyForm';
import Duty from '../models/Duty';

const DutyList: React.FC = () => {
  const [duties, setDuties] = useState<Duty[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDuty, setSelectedDuty] = useState({ id: 0, name: '' });
  const [isNewDutyModalVisible, setIsNewDutyModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const fetchDuties = () => {
    axios.get<Duty[]>('http://localhost:3000/duties')
      .then(response => {
        setDuties(response.data);
      })
      .catch(error => {
        console.error('Error fetching duties:', error);
      });
  };

  useEffect(() => {
    fetchDuties();
  }, []);

  const handleEditModal = (record: Duty) => {
    setSelectedDuty(record);
    setIsModalVisible(true);
  };

  const handleDeleteModal = (record: Duty) => {
    setSelectedDuty(record);
    setIsDeleteModalVisible(true);
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModalVisible(false);
    fetchDuties();
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    fetchDuties();
  };

  const handleNewDutyModalClose = () => {
    setIsNewDutyModalVisible(false);
    fetchDuties();
  };

  return (
    <>
      <Button type="primary" style={{ marginBottom: '20px' }} onClick={() => setIsNewDutyModalVisible(true)}>Create New Duty</Button>
      <Table
        dataSource={duties}
        columns={[
          { title: 'ID', dataIndex: 'id', key: 'id' },
          { title: 'Name', dataIndex: 'name', key: 'name' },
          {
            title: 'Action',
            key: 'action',
            render: (text: any, record: any) => (
              <>
                <Button type="link" icon={<EditOutlined />} onClick={() => handleEditModal(record)}>
                  Edit
                </Button>
                <Button type="link" icon={<DeleteOutlined />} onClick={() => handleDeleteModal(record)}>
                  Delete
                </Button>
              </>
            ),
          },
        ]}
        rowKey="id"
      />
      <Modal title="Edit Duty" open={isModalVisible} onCancel={handleModalClose} footer={null}>
        <EditDutyForm dutyId={selectedDuty.id} dutyName={selectedDuty.name} onSave={handleModalClose}/>
      </Modal>
      <Modal title="Eliminar Duty" open={isDeleteModalVisible} onCancel={handleDeleteModalClose} footer={null}>
        <DeleteDutyForm dutyId={selectedDuty.id} dutyName={selectedDuty.name} onDeleted={handleDeleteModalClose} />
      </Modal>
      <Modal title="Create New Duty" open={isNewDutyModalVisible} onCancel={handleNewDutyModalClose} footer={null}>
        <NewDutyForm onFinish={handleNewDutyModalClose}/>
      </Modal>
    </>
  );
};

export default DutyList;
