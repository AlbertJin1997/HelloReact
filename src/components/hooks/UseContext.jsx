import React, { createContext, useContext, useState } from 'react';
import { Card, Button, Switch, Typography, Space, theme } from 'antd';

const { Title, Paragraph } = Typography;

// 创建主题Context
const ThemeContext = createContext();

// 创建用户信息Context
const UserContext = createContext();

/**
 * 使用主题的子组件
 */
const ThemedButton = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const buttonStyle = {
    backgroundColor: isDarkMode ? '#001529' : '#1890ff',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <button style={buttonStyle} onClick={toggleTheme}>
      切换主题
    </button>
  );
};

/**
 * 使用用户信息的子组件
 */
const UserInfo = () => {
  const { user, updateUser } = useContext(UserContext);
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <Card
      size="small"
      style={{
        backgroundColor: isDarkMode ? '#001529' : '#ffffff',
        color: isDarkMode ? '#ffffff' : '#000000'
      }}
    >
      <p>当前用户：{user.name}</p>
      <p>角色：{user.role}</p>
      <Button
        size="small"
        onClick={() => updateUser({
          name: user.name === '管理员' ? '访客' : '管理员',
          role: user.name === '管理员' ? '普通用户' : '超级管理员'
        })}
        style={{
          backgroundColor: isDarkMode ? '#1890ff' : '#ffffff',
          color: isDarkMode ? '#ffffff' : '#000000',
          borderColor: isDarkMode ? '#1890ff' : '#d9d9d9'
        }}
      >
        切换用户
      </Button>
    </Card>
  );
};

/**
 * 主题容器组件
 */
const ThemedContainer = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const containerStyle = {
    padding: '20px',
    backgroundColor: isDarkMode ? '#001529' : '#ffffff',
    color: isDarkMode ? '#ffffff' : '#000000',
    borderRadius: '4px',
    transition: 'all 0.3s'
  };

  return (
    <div style={containerStyle}>
      <p>当前主题：{isDarkMode ? '深色' : '浅色'}</p>
      <ThemedButton />
    </div>
  );
};

/**
 * useContext Hook示例
 * 这个组件展示了React useContext Hook的使用方式，包括：
 * 1. 创建和提供Context
 * 2. 在子组件中消费Context
 * 3. 多个Context的组合使用
 * 4. Context值的动态更新
 */
const UseContextExample = () => {
  // 主题状态
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(prev => !prev);

  // 用户信息状态
  const [user, setUser] = useState({
    name: '访客',
    role: '普通用户'
  });

  return (
    <div>
      <Title level={2}>useContext Hook示例</Title>
      <Paragraph>
        这个示例展示了React useContext Hook的使用方式，通过Context实现跨组件的状态共享，
        包括主题切换和用户信息共享的场景。
      </Paragraph>

      <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
        <UserContext.Provider value={{ user, updateUser: setUser }}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Card title="主题切换示例">
              <Space direction="vertical">
                <Space>
                  <span>使用Switch切换主题：</span>
                  <Switch
                    checked={isDarkMode}
                    onChange={toggleTheme}
                    checkedChildren="深色"
                    unCheckedChildren="浅色"
                  />
                </Space>
                <ThemedContainer />
              </Space>
            </Card>

            <Card title="用户信息共享示例">
              <Space direction="vertical">
                <UserInfo />
                <Paragraph type="secondary">
                  点击"切换用户"按钮来更改用户信息
                </Paragraph>
              </Space>
            </Card>

            <Card title="代码说明">
              <Paragraph>
                <ul>
                  <li>使用createContext创建Context对象</li>
                  <li>使用Context.Provider提供值</li>
                  <li>使用useContext Hook消费Context值</li>
                  <li>可以嵌套多个Context.Provider</li>
                  <li>Context值变化时，所有消费该Context的组件都会重新渲染</li>
                </ul>
              </Paragraph>
            </Card>
          </Space>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
};

export default UseContextExample;