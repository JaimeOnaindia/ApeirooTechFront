import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';

interface Duty {
  id: number;
  name: string;
}

const DutyList: React.FC = () => {
  const [duties, setDuties] = useState<Duty[]>([]);

  useEffect(() => {
    axios.get<Duty[]>('http://localhost:3000/duties/')
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
  ];

  return (
    <Table
      dataSource={duties}
      columns={columns}
      rowKey="id"
    />
  );
};

export default DutyList;
