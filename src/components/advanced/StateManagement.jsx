import React, { useState, createContext, useContext } from 'react';
import { Card, Button, Input, Typography, Space, List, Switch } from 'antd';
import ImmerExample from './ImmerExample';

const { Title, Paragraph } = Typography;

// 创建一个Context用于主题共享
const ThemeContext = createContext();

/**
 * 子组件A：展示props传递方式
 */
const ComponentA = ({ count, onIncrement }) => (
  <Card size="small" title="组件A（Props传递）">
    <p>从父组件接收的计数：{count}</p>
    <Button onClick={onIncrement}>增加计数</Button>
  </Card>
);

/**
 * 子组件B：展示props逐层传递
 */
const ComponentB = ({ count }) => (
  <Card size="small" title="组件B（Props逐层传递）">
    <ComponentB1 count={count} />
  </Card>
);

const ComponentB1 = ({ count }) => (
  <div>
    <p>从组件B接收的计数：{count}</p>
    <ComponentB2 count={count} />
  </div>
);

const ComponentB2 = ({ count }) => (
  <div style={{ padding: '8px', backgroundColor: '#f5f5f5', marginTop: '8px' }}>
    最深层组件显示的计数：{count}
  </div>
);

/**
 * 子组件C：展示Context使用
 */
const ComponentC = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Card
      size="small"
      title="组件C（Context使用）"
      style={{
        backgroundColor: isDarkMode ? '#001529' : '#ffffff',
        color: isDarkMode ? '#ffffff' : '#000000'
      }}
    >
      <p>当前主题：{isDarkMode ? '深色' : '浅色'}</p>
      <Button onClick={toggleTheme}>切换主题</Button>
    </Card>
  );
};

/**
 * 状态管理示例组件
 * 这个组件展示了React中不同的状态管理方式，包括：
 * 1. 通过props传递状态
 * 2. 状态提升
 * 3. Context API的使用
 * 4. 组件组合
 */
const StateManagementExample = () => {
  // 共享状态
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // 处理计数器
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  // 处理主题切换
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  // 处理待办事项
  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos(prevTodos => [...prevTodos, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleRemoveTodo = (index) => {
    setTodos(prevTodos => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Title level={2}>状态管理示例</Title>
      <Paragraph>
        这个示例展示了React中不同的状态管理方式，包括props传递、状态提升和Context API的使用。
        通过这些例子，你可以理解React中的数据流动方式。
      </Paragraph>

      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card title="Props传递示例">
          <Space direction="vertical" style={{ width: '100%' }}>
            <ComponentA count={count} onIncrement={handleIncrement} />
            <ComponentB count={count} />
          </Space>
        </Card>

        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
          <Card title="Context示例">
            <Space direction="vertical" style={{ width: '100%' }}>
              <div>
                <span>使用Switch切换主题：</span>
                <Switch
                  checked={isDarkMode}
                  onChange={toggleTheme}
                  checkedChildren="深色"
                  unCheckedChildren="浅色"
                />
              </div>
              <ComponentC />
            </Space>
          </Card>
        </ThemeContext.Provider>

        <Card title="状态提升示例">
          <Space direction="vertical" style={{ width: '100%' }}>
            <Space>
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="输入待办事项"
                onPressEnter={handleAddTodo}
              />
              <Button type="primary" onClick={handleAddTodo}>
                添加
              </Button>
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

        <ImmerExample />

        <Card title="代码说明">
          <Paragraph>
            <ul>
              <li>Props传递：适用于父子组件间的数据传递</li>
              <li>状态提升：将共享状态提升到最近的共同父组件</li>
              <li>Context：适用于跨多层级的数据共享</li>
              <li>注意避免props逐层传递（props drilling）</li>
              <li>Immer：简化复杂状态的不可变更新操作</li>
            </ul>
          </Paragraph>
        </Card>
      </Space>
    </div>
  );
};

export default StateManagementExample;