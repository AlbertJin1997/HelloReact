import React, { useRef, useState, useEffect } from 'react';
import { Card, Button, Input, Typography, Space } from 'antd';

const { Title, Paragraph } = Typography;

/**
 * useRef Hook示例
 * 这个组件展示了React useRef Hook的多种使用场景，包括：
 * 1. 获取DOM元素引用
 * 2. 存储可变值（不会触发重新渲染）
 * 3. 在定时器中访问最新状态
 */
const UseRefExample = () => {
  // DOM引用
  const inputRef = useRef(null);

  // 计数器状态
  const [count, setCount] = useState(0);
  // 使用ref存储上一次的count值
  const prevCountRef = useRef(count);

  // 定时器引用
  const timerRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  // 在组件更新后更新prevCountRef
  useEffect(() => {
    console.log('prevCountRef.current:', prevCountRef.current);
    prevCountRef.current = count;
  }, [count]);

  // 聚焦输入框
  const handleFocus = () => {
    inputRef.current?.focus();
  };

  // 开始自动计数
  const startCounter = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setCount(c => c + 1);
      }, 1000);
    }
  };

  // 停止自动计数
  const stopCounter = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(timerRef.current);
    }
  };

  // 组件卸载时清理定时器
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Title level={2}>useRef Hook示例</Title>
      <Paragraph>
        这个示例展示了React useRef Hook的多种使用场景，包括获取DOM元素引用、
        存储可变值以及在定时器中访问最新状态。
      </Paragraph>

      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card title="DOM引用示例">
          <Space direction="vertical">
            <Space>
              <Input
                ref={inputRef}
                placeholder="点击按钮聚焦此输入框"
                style={{ width: '200px' }}
              />
              <Button type="primary" onClick={handleFocus}>
                聚焦输入框
              </Button>
            </Space>
            <Paragraph type="secondary">
              使用useRef获取Input组件的DOM引用，实现编程式聚焦
            </Paragraph>
          </Space>
        </Card>

        <Card title="存储可变值示例">
          <Space direction="vertical">
            <Button onClick={() => setCount(count + 1)}>
              点击增加 (当前值: {count})
            </Button>
            <div>上一次的值: {prevCountRef.current}</div>
            <Paragraph type="secondary">
              使用useRef存储前一个状态值，不会触发组件重新渲染
            </Paragraph>
          </Space>
        </Card>

        <Card title="定时器示例">
          <Space direction="vertical">
            <Space>
              <Button
                type="primary"
                onClick={startCounter}
                disabled={isRunning}
              >
                开始自动计数
              </Button>
              <Button
                danger
                onClick={stopCounter}
                disabled={!isRunning}
              >
                停止
              </Button>
            </Space>
            <div>计数值: {count}</div>
            <Paragraph type="secondary">
              使用useRef存储定时器ID，确保可以正确清理定时器
            </Paragraph>
          </Space>
        </Card>

        <Card title="代码说明">
          <Paragraph>
            <ul>
              <li>useRef返回一个可变的ref对象，其.current属性被初始化为传入的参数</li>
              <li>ref对象在组件的整个生命周期内保持不变</li>
              <li>修改ref的.current属性不会导致组件重新渲染</li>
              <li>useRef常用于存储DOM引用、定时器ID等需要在重渲染之间保持的值</li>
            </ul>
          </Paragraph>
        </Card>
      </Space>
    </div>
  );
};

export default UseRefExample;