import React, { useState } from 'react';
import { Card, Button, Input, Typography, Space, List } from 'antd';

const { Title, Paragraph } = Typography;

/**
 * useState Hook示例
 * 这个组件展示了React useState Hook的多种使用场景，包括：
 * 1. 基本数据类型的状态管理
 * 2. 对象类型的状态管理
 * 3. 数组类型的状态管理
 * 4. 基于之前的状态更新
 */
const UseStateExample = () => {
  // 基本数据类型状态
  const [count, setCount] = useState(0);

  // 对象类型状态
  const [user, setUser] = useState({
    name: '',
    age: ''
  });

  // 数组类型状态
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // 处理计数器
  const handleIncrement = () => {
    // 使用函数式更新，基于之前的状态
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  // 处理用户信息更新
  const handleUserChange = (field, value) => {
    // 使用展开运算符更新对象状态
    setUser(prevUser => ({
      ...prevUser,
      [field]: value
    }));
  };

  // 处理待办事项
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      // 使用展开运算符更新数组状态
      setTodos(prevTodos => [...prevTodos, newTodo.trim()]);
      setNewTodo(''); // 清空输入框
    }
  };

  const handleRemoveTodo = (index) => {
    // 使用filter更新数组状态
    setTodos(prevTodos => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Title level={2}>useState Hook示例</Title>
      <Paragraph>
        这个示例展示了React useState Hook的多种使用场景，包括管理不同类型的状态（数字、对象、数组等）
        以及不同的状态更新方式。
      </Paragraph>

      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card title="基本数据类型状态示例">
          <Space>
            <Button onClick={handleDecrement}>减少</Button>
            <span style={{ margin: '0 16px' }}>计数器：{count}</span>
            <Button type="primary" onClick={handleIncrement}>增加</Button>
          </Space>
        </Card>

        <Card title="对象类型状态示例">
          <Space direction="vertical">
            <Input
              placeholder="请输入姓名"
              value={user.name}
              onChange={(e) => handleUserChange('name', e.target.value)}
              style={{ width: '200px' }}
            />
            <Input
              placeholder="请输入年龄"
              value={user.age}
              onChange={(e) => handleUserChange('age', e.target.value)}
              style={{ width: '200px' }}
            />
            <div>
              当前用户信息：
              {user.name && user.age ? `${user.name}, ${user.age}岁` : '未填写完整'}
            </div>
          </Space>
        </Card>

        <Card title="数组类型状态示例">
          <Space direction="vertical" style={{ width: '100%' }}>
            <Space>
              <Input
                placeholder="请输入待办事项"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onPressEnter={handleAddTodo}
                style={{ width: '200px' }}
              />
              <Button type="primary" onClick={handleAddTodo}>添加</Button>
            </Space>

            <List
              size="small"
              bordered
              dataSource={todos}
              renderItem={(item, index) => (
                <List.Item
                  actions={[<Button type="link" onClick={() => handleRemoveTodo(index)}>删除</Button>]}
                >
                  {item}
                </List.Item>
              )}
            />
          </Space>
        </Card>

        <Card title="代码说明">
          <Paragraph>
            <ul>
              <li>使用useState声明状态变量，返回当前状态和更新函数</li>
              <li>更新函数可以接收新值或更新函数作为参数</li>
              <li>使用函数式更新可以保证获取到最新的状态值</li>
              <li>更新对象和数组时要注意不可变性原则</li>
            </ul>
          </Paragraph>
        </Card>
      </Space>
    </div>
  );
};

export default UseStateExample;