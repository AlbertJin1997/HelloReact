import React, { useState, useEffect } from 'react';
import { Card, Table, Button, message, Space, Typography, Spin, Alert, Tag } from 'antd';
import { ReloadOutlined, UserOutlined, ProjectOutlined, OrderedListOutlined } from '@ant-design/icons';
import usersData from '../../mock/users.json';
import projectsData from '../../mock/projects.json';
import tasksData from '../../mock/tasks.json';

const { Title, Paragraph } = Typography;

const MockRequestExample = () => {
  const [dataType, setDataType] = useState('users');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  // 定义不同数据类型的表格列配置
  const columns = {
    users: [
      { title: 'ID', dataIndex: 'id', key: 'id' },
      { title: '姓名', dataIndex: 'name', key: 'name' },
      { title: '邮箱', dataIndex: 'email', key: 'email' },
      { title: '角色', dataIndex: 'role', key: 'role' },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: (status) => (
          <Tag color={status === 'active' ? 'green' : 'red'}>
            {status === 'active' ? '活跃' : '停用'}
          </Tag>
        )
      },
    ],
    projects: [
      { title: 'ID', dataIndex: 'id', key: 'id' },
      { title: '项目名称', dataIndex: 'name', key: 'name' },
      { title: '描述', dataIndex: 'description', key: 'description' },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: (status) => {
          const colorMap = {
            '进行中': 'processing',
            '计划中': 'warning',
            '已完成': 'success'
          };
          return <Tag color={colorMap[status]}>{status}</Tag>;
        }
      },
      {
        title: '优先级',
        dataIndex: 'priority',
        key: 'priority',
        render: (priority) => {
          const colorMap = { '高': 'red', '中': 'orange', '低': 'blue' };
          return <Tag color={colorMap[priority]}>{priority}</Tag>;
        }
      },
    ],
    tasks: [
      { title: 'ID', dataIndex: 'id', key: 'id' },
      { title: '任务标题', dataIndex: 'title', key: 'title' },
      { title: '描述', dataIndex: 'description', key: 'description' },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: (status) => {
          const colorMap = {
            '进行中': 'processing',
            '待处理': 'warning',
            '已完成': 'success'
          };
          return <Tag color={colorMap[status]}>{status}</Tag>;
        }
      },
      {
        title: '优先级',
        dataIndex: 'priority',
        key: 'priority',
        render: (priority) => {
          const colorMap = { '高': 'red', '中': 'orange', '低': 'blue' };
          return <Tag color={colorMap[priority]}>{priority}</Tag>;
        }
      },
    ],
  };

  // JSON数据源映射
  const mockDataMap = {
    users: usersData.users,
    projects: projectsData.projects,
    tasks: tasksData.tasks,
  };

  // 模拟API请求
  const fetchData = async (shouldError = false) => {
    setLoading(true);
    setError(null);

    try {
      // 模拟网络延迟
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (shouldError) {
        throw new Error('模拟请求失败，请重试');
      }

      setData(mockDataMap[dataType]);
      message.success('数据加载成功');
    } catch (err) {
      setError(err.message);
      message.error('数据加载失败');
    } finally {
      setLoading(false);
    }
  };

  // 首次加载数据
  useEffect(() => {
    fetchData();
  }, [dataType]);

  return (
    <div style={{ padding: '24px' }}>
      <Card>
        <Typography>
          <Title level={3}>模拟网络请求示例</Title>
          <Paragraph>
            这个示例展示了如何使用Mock数据模拟网络请求，包括加载状态、错误处理和数据展示。
            你可以切换不同的数据类型，模拟请求成功和失败的场景。
          </Paragraph>
        </Typography>

        <Space style={{ marginBottom: 16 }}>
          <Button
            type={dataType === 'users' ? 'primary' : 'default'}
            icon={<UserOutlined />}
            onClick={() => setDataType('users')}
          >
            用户数据
          </Button>
          <Button
            type={dataType === 'projects' ? 'primary' : 'default'}
            icon={<ProjectOutlined />}
            onClick={() => setDataType('projects')}
          >
            项目数据
          </Button>
          <Button
            type={dataType === 'tasks' ? 'primary' : 'default'}
            icon={<OrderedListOutlined />}
            onClick={() => setDataType('tasks')}
          >
            任务数据
          </Button>
          <Button
            icon={<ReloadOutlined />}
            onClick={() => fetchData()}
          >
            刷新数据
          </Button>
          <Button
            danger
            onClick={() => fetchData(true)}
          >
            模拟请求失败
          </Button>
        </Space>

        {error ? (
          <Alert
            message="错误"
            description={error}
            type="error"
            style={{ marginBottom: 16 }}
          />
        ) : null}

        <Spin spinning={loading}>
          <Table
            columns={columns[dataType]}
            dataSource={data}
            rowKey="id"
            pagination={false}
          />
        </Spin>
      </Card>
    </div>
  );
};

export default MockRequestExample;