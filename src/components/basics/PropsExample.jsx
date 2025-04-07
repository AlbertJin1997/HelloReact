import React, { useState } from 'react';
import { Card, Button, Input, Typography, Space, Switch } from 'antd';

const { Title, Paragraph } = Typography;

/**
 * 子组件：展示用户信息
 * 演示如何接收和使用props
 */
const UserCard = ({ name, age, isOnline, onStatusChange }) => {
  return (
    <Card size="small" title="用户信息卡片">
      <p>姓名：{name}</p>
      <p>年龄：{age}</p>
      <div>
        <span>在线状态：</span>
        <Switch
          checked={isOnline}
          onChange={onStatusChange}
          checkedChildren="在线"
          unCheckedChildren="离线"
        />
      </div>
    </Card>
  );
};

/**
 * 子组件：消息展示
 * 演示如何使用children prop
 */
const MessageBox = ({ children, type = 'info' }) => {
  const colors = {
    info: '#1890ff',
    success: '#52c41a',
    warning: '#faad14',
  };

  return (
    <div style={{
      padding: '8px 16px',
      border: `1px solid ${colors[type]}`,
      borderRadius: '4px',
      color: colors[type],
      marginBottom: '16px'
    }}>
      {children}
    </div>
  );
};

/**
 * Props示例组件
 * 这个组件展示了React中Props的各种使用方式，包括：
 * 1. 基本数据类型的props传递
 * 2. 函数类型的props（回调函数）
 * 3. children prop的使用
 * 4. props的默认值
 */
const PropsExample = () => {
  // 状态管理
  const [userName, setUserName] = useState('张三');
  const [isOnline, setIsOnline] = useState(true);

  // 处理用户状态变化
  const handleStatusChange = (checked) => {
    setIsOnline(checked);
  };

  return (
    <div>
      <Title level={2}>Props使用示例</Title>
      <Paragraph>
        这个示例展示了React中Props的各种使用方式，包括基本数据类型的传递、
        函数props的使用、children prop的使用等。
      </Paragraph>

      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card title="Props传递示例">
          <Space direction="vertical" style={{ width: '100%' }}>
            <Input
              placeholder="请输入用户名"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              style={{ width: '200px' }}
            />

            <UserCard
              name={userName}
              age={25}
              isOnline={isOnline}
              onStatusChange={handleStatusChange}
            />
          </Space>
        </Card>

        <Card title="Children Props示例">
          <MessageBox>这是一个普通消息</MessageBox>
          <MessageBox type="success">这是一个成功消息</MessageBox>
          <MessageBox type="warning">这是一个警告消息</MessageBox>
        </Card>

        <Card title="代码说明">
          <Paragraph>
            <ul>
              <li>UserCard组件展示了如何接收和使用基本类型的props</li>
              <li>通过onStatusChange函数展示了如何使用回调函数类型的props</li>
              <li>MessageBox组件展示了如何使用children prop和默认prop值</li>
              <li>所有props的传递都是单向的，从父组件到子组件</li>
            </ul>
          </Paragraph>
        </Card>
      </Space>
    </div>
  );
};

export default PropsExample;