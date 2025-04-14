import React from 'react';
import { ProTable } from '@ant-design/pro-components';
import { Tag, Space, Button, Card } from 'antd';
import request from '../../utils/request';
import projects from '../../mock/projects.json';

const ProTableExample = () => {
  const columns = [
    {
      title: '项目名称',
      dataIndex: 'name',
      ellipsis: true,
      width: 100,
      tip: '项目名称过长会自动收缩',
      fieldProps: {
        placeholder: '请输入项目名称',
      },
    },
    {
      title: '描述',
      dataIndex: 'description',
      search: false,
      ellipsis: true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueEnum: {
        'active': { text: '进行中', status: 'Processing' },
        'completed': { text: '已完成', status: 'Success' },
        'pending': { text: '待处理', status: 'Warning' },
        'cancelled': { text: '已取消', status: 'Error' },
      },
      fieldProps: {
        placeholder: '请选择状态',
      },
    },
    {
      title: '标签',
      dataIndex: 'tags',
      search: false,
      render: (tags) => (
        <Space>
          {tags.map((tag) => (
            <Tag key={tag} color="blue">{tag}</Tag>
          ))}
        </Space>
      ),
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      valueType: 'dateTime',
      sorter: true,
    },
    {
      title: '操作',
      valueType: 'option',
      render: (_, record) => [
        <Button key="edit" type="link">编辑</Button>,
        <Button key="delete" type="link" danger>删除</Button>,
      ],
    },
  ];

  return (
    <Card>
      <ProTable
        columns={columns}
        request={async (params) => {
          const { current, pageSize, name, status } = params;

          let filteredData = projects.projects
            .filter(project => {
              const nameMatch = !name || project.name.toLowerCase().includes(name.toLowerCase());
              const statusMatch = !status || (
                (status === 'active' && project.status === '进行中') ||
                (status === 'completed' && project.status === '已完成') ||
                (status === 'pending' && project.status === '计划中') ||
                (status === 'cancelled' && project.status === '已取消')
              );
              return nameMatch && statusMatch;
            })
            .map(project => ({
              ...project,
              name: project.name.length > 10 ? project.name.substring(0, 10) + '...' : project.name,
              status: project.status === '进行中' ? 'active' :
                project.status === '已完成' ? 'completed' :
                  project.status === '计划中' ? 'pending' : 'cancelled',
              tags: [project.priority],
              createdAt: project.startDate
            }));

          return {
            data: filteredData.slice((current - 1) * pageSize, current * pageSize),
            success: true,
            total: filteredData.length,
          };
        }}
        rowKey="id"
        pagination={{
          showQuickJumper: true,
          pageSize: 10,          // 设置每页显示数量
          showSizeChanger: true, // 允许修改每页显示数量
        }}
        search={{
          labelWidth: 'auto',
          defaultCollapsed: false, // 默认展开搜索栏
        }}
        dateFormatter="string"
        headerTitle="项目列表"
        toolBarRender={() => [
          <Button key="new" type="primary">
            新建项目
          </Button>,
        ]}
        cardBordered    // 添加表格边框
        scroll={{ x: true }} // 支持横向滚动
        style={{
          background: '#fff',
          padding: '24px',
        }}
      />
    </Card>
  );
};

export default ProTableExample;