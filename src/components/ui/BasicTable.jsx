import React from 'react';
import { Table, Card, Typography, Tag, Space } from 'antd';

const { Title, Paragraph } = Typography;

const BasicTable = () => {
  // 示例数据
  const dataSource = [
    {
      key: '1',
      name: '张三',
      age: 32,
      address: '北京市朝阳区',
      tags: ['开发', '前端'],
    },
    {
      key: '2',
      name: '李四',
      age: 28,
      address: '上海市浦东新区',
      tags: ['设计', 'UI'],
    },
    {
      key: '3',
      name: '王五',
      age: 35,
      address: '广州市天河区',
      tags: ['产品', '运营'],
    },
  ];

  // 表格列配置
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
      filters: [
        { text: '北京', value: '北京' },
        { text: '上海', value: '上海' },
        { text: '广州', value: '广州' },
      ],
      onFilter: (value, record) => record.address.includes(value),
    },
    {
      title: '标签',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags) => (
        <Space>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      <Card>
        <Typography>
          <Title level={3}>基础表格示例</Title>
          <Paragraph>
            这个示例展示了Ant Design中表格组件的基本用法，包括排序、筛选、自定义渲染等功能。
            表格组件是企业级应用中最常用的数据展示形式之一。
          </Paragraph>
        </Typography>

        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      </Card>
    </div>
  );
};

export default BasicTable;