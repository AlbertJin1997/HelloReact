import React, { useState, useEffect } from 'react';
import { Card, Button, Input, Typography, Space } from 'antd';

const { Title, Paragraph } = Typography;

/**
 * 函数组件示例
 * 这个组件展示了React函数组件的基本用法，包括：
 * 1. 组件的基本结构
 * 2. useState Hook的使用
 * 3. useEffect Hook的使用
 * 4. 事件处理
 */
const FunctionComponent = () => {
  // 使用useState Hook管理状态
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  // 使用useEffect Hook处理副作用
  useEffect(() => {
    console.log('组件已挂载或更新');
    // 返回清理函数
    return () => {
      console.log('组件即将卸载或更新');
    };
  }, [count, inputValue]); // 依赖数组中包含count，表示count改变时执行

  // 处理计数器增加
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  // 处理输入变化
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <Title level={2}>函数组件示例</Title>
      <Paragraph>
        这个示例展示了React函数组件的基本用法，包括使用useState管理状态、
        使用useEffect处理副作用。你可以在控制台中查看effect的执行情况。
      </Paragraph>

      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card title="Hooks和事件处理示例">
          <Space direction="vertical">
            <div>
              <Button type="primary" onClick={handleIncrement}>
                点击增加
              </Button>
              <span style={{ marginLeft: '16px' }}>
                计数器：{count}
              </span>
            </div>

            <div>
              <Input
                placeholder="请输入内容"
                value={inputValue}
                onChange={handleInputChange}
                style={{ width: '200px' }}
              />
              <div style={{ marginTop: '8px' }}>
                输入的内容：{inputValue}
              </div>
            </div>
          </Space>
        </Card>

        <Card title="代码说明">
          <Paragraph>
            <ul>
              <li>使用useState Hook管理状态</li>
              <li>使用useEffect Hook处理副作用</li>
              <li>直接定义事件处理函数（不需要绑定this）</li>
              <li>组件代码更简洁，易于理解</li>
            </ul>
          </Paragraph>
        </Card>

        <Card title="与类组件的对比">
          <Paragraph>
            <ul>
              <li>不需要使用this关键字</li>
              <li>使用Hooks代替生命周期方法</li>
              <li>状态更新更直观</li>
              <li>代码量更少，逻辑更清晰</li>
            </ul>
          </Paragraph>
        </Card>
      </Space>
    </div>
  );
};

export default FunctionComponent;