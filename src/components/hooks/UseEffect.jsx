import React, { useState, useEffect } from 'react';
import { Card, Button, Input, Typography, Space, List, Spin } from 'antd';

const { Title, Paragraph } = Typography;

/**
 * useEffect Hook示例
 * 这个组件展示了React useEffect Hook的多种使用场景，包括：
 * 1. 基本的副作用处理
 * 2. 依赖项的使用
 * 3. 清理函数的使用
 * 4. 数据获取示例
 */
const UseEffectExample = () => {
  // 计数器状态
  const [count, setCount] = useState(0);

  // 窗口大小状态
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // 模拟的用户数据状态
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // 示例1：无依赖项的useEffect
  useEffect(() => {
    console.log('组件每次渲染都会执行这个effect');
  });

  // 示例2：空依赖数组的useEffect
  useEffect(() => {
    console.log('组件只在挂载时执行这个effect');
  }, []);

  // 示例3：带依赖项的useEffect
  useEffect(() => {
    console.log('count发生变化时执行这个effect:', count);
    // 设置文档标题
    document.title = `点击了 ${count} 次`;
  }, [count]);

  // 示例4：带清理函数的useEffect
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // 添加事件监听器
    window.addEventListener('resize', handleResize);

    // 返回清理函数
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 空依赖数组，只在挂载和卸载时执行

  // 示例5：模拟数据获取
  useEffect(() => {
    // 定义异步函数
    const fetchUsers = async () => {
      setLoading(true);
      try {
        // 模拟API调用
        await new Promise(resolve => setTimeout(resolve, 1000));
        const mockUsers = [
          { id: 1, name: '张三', email: 'zhangsan@example.com' },
          { id: 2, name: '李四', email: 'lisi@example.com' },
          { id: 3, name: '王五', email: 'wangwu@example.com' },
        ].filter(user =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setUsers(mockUsers);
      } catch (error) {
        console.error('获取用户数据失败:', error);
      } finally {
        setLoading(false);
      }
    };

    // 执行数据获取
    fetchUsers();
  }, [searchTerm]); // 当搜索词变化时重新获取数据

  return (
    <div>
      <Title level={2}>useEffect Hook示例</Title>
      <Paragraph>
        这个示例展示了React useEffect Hook的多种使用场景，包括基本的副作用处理、
        依赖项的使用、清理函数的使用以及数据获取示例。
      </Paragraph>

      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card title="计数器示例（更新文档标题）">
          <Space>
            <Button
              type="primary"
              onClick={() => setCount(c => c + 1)}
            >
              点击增加 ({count})
            </Button>
            <span>查看浏览器标签页的变化</span>
          </Space>
        </Card>

        <Card title="窗口大小监听示例（清理函数）">
          <div>当前窗口大小：</div>
          <div>宽度: {windowSize.width}px</div>
          <div>高度: {windowSize.height}px</div>
          <Paragraph type="secondary">
            尝试调整浏览器窗口大小来查看效果
          </Paragraph>
        </Card>

        <Card title="数据获取示例">
          <Space direction="vertical" style={{ width: '100%' }}>
            <Input
              placeholder="搜索用户"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '200px' }}
            />

            <Spin spinning={loading}>
              <List
                bordered
                dataSource={users}
                renderItem={user => (
                  <List.Item>
                    <List.Item.Meta
                      title={user.name}
                      description={user.email}
                    />
                  </List.Item>
                )}
              />
            </Spin>
          </Space>
        </Card>

        <Card title="代码说明">
          <Paragraph>
            <ul>
              <li>useEffect可以处理组件的副作用操作</li>
              <li>依赖数组决定了effect的执行时机</li>
              <li>返回清理函数可以防止内存泄漏</li>
              <li>异步数据获取时要注意处理加载状态和错误情况</li>
            </ul>
          </Paragraph>
        </Card>
      </Space>
    </div>
  );
};

export default UseEffectExample;