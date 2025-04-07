import React, { useState, useRef } from 'react';
import { Card, Button, Input, Typography, Space, message } from 'antd';

const { Title, Paragraph } = Typography;

/**
 * 事件处理示例组件
 * 这个组件展示了React中事件处理的各种场景，包括：
 * 1. 基本事件处理
 * 2. 事件对象的使用
 * 3. 事件冒泡和捕获
 * 4. 事件委托
 * 5. 自定义事件处理
 */
const EventHandlingExample = () => {
  const [clickCount, setClickCount] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [inputValue, setInputValue] = useState('');
  const buttonRef = useRef(null);

  // 基本点击事件处理
  const handleClick = (e) => {
    setClickCount(prev => prev + 1);
    // 使用key属性确保每次显示不同的消息实例
    message.info({
      content: `按钮被点击了 ${clickCount + 1} 次`,
      duration: 2,
      style: { marginTop: '50px' },
      key: Date.now()
    });
  };

  // 带参数的事件处理
  const handleClickWithParam = (text) => {
    message.success({
      content: `收到参数：${text}`,
      duration: 2,
      style: { marginTop: '50px' }
    });
  };

  // 鼠标事件处理
  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY
    });
  };

  // 表单事件处理
  const handleSubmit = (e) => {
    e.preventDefault(); // 阻止表单默认提交行为
    message.success(`表单提交的值：${inputValue}`);
  };

  // 事件冒泡示例
  const handleParentClick = (e) => {
    message.info({
      content: '父元素被点击',
      duration: 2,
      style: { marginTop: '50px' }
    });
  };

  const handleChildClick = (e) => {
    e.stopPropagation(); // 阻止事件冒泡
    message.info({
      content: '子元素被点击（事件不会冒泡）',
      duration: 2,
      style: { marginTop: '50px' }
    });
  };

  // 键盘事件处理
  const handleKeyPress = (e) => {
    message.info({
      content: `按下的键：${e.key}`,
      duration: 2,
      style: { marginTop: '50px' }
    });
  };

  // 双击事件处理
  const handleDoubleClick = () => {
    message.warning({
      content: '检测到双击事件！',
      duration: 2,
      style: {
        marginTop: '50px'
      }
    });
  };

  return (
    <div>
      <Title level={2}>事件处理示例</Title>
      <Paragraph>
        这个示例展示了React中各种事件处理的方式，包括基本事件、事件对象的使用、
        事件冒泡和阻止默认行为等。
      </Paragraph>

      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card title="基本事件处理">
          <Space size="middle">
            <Button type="primary" onClick={handleClick}>
              点击我
            </Button>
            <Button onClick={() => handleClickWithParam('Hello!')}>
              带参数的点击
            </Button>
          </Space>
        </Card>

        <Card title="鼠标事件">
          <div
            style={{
              padding: '20px',
              backgroundColor: '#f5f5f5',
              border: '1px solid #d9d9d9',
              borderRadius: '4px',
              cursor: 'default'
            }}
            onMouseMove={handleMouseMove}
          >
            <Space direction="vertical" size="small">
              <span>在此区域移动鼠标</span>
              <span>鼠标位置：x: {mousePosition.x}, y: {mousePosition.y}</span>
            </Space>
          </div>
        </Card>

        <Card title="表单事件">
          <form onSubmit={handleSubmit}>
            <Space size="middle">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="输入一些内容"
                onKeyPress={handleKeyPress}
                style={{ width: '200px' }}
              />
              <Button htmlType="submit" type="primary">
                提交
              </Button>
            </Space>
          </form>
        </Card>

        <Card title="事件冒泡示例">
          <div
            onClick={handleParentClick}
            style={{
              padding: '20px',
              backgroundColor: '#f0f0f0',
              border: '1px solid #d9d9d9',
              borderRadius: '4px'
            }}
          >
            <div style={{ marginBottom: '16px' }}>父元素 (点击我)</div>
            <div
              onClick={handleChildClick}
              style={{
                padding: '10px',
                backgroundColor: '#fff',
                border: '1px solid #d9d9d9',
                borderRadius: '4px',
                textAlign: 'center'
              }}
            >
              子元素 (点击我，事件不会冒泡)
            </div>
          </div>
        </Card>

        <Card title="DOM事件监听">
          <Button onDoubleClick={handleDoubleClick}>
            双击我试试
          </Button>
        </Card>

        <Card title="代码说明">
          <Paragraph>
            <ul>
              <li>React事件是合成事件，封装了原生DOM事件</li>
              <li>使用驼峰命名法命名事件处理器</li>
              <li>可以通过e.preventDefault()阻止默认行为</li>
              <li>可以通过e.stopPropagation()阻止事件冒泡</li>
              <li>可以使用useRef和useEffect处理原生DOM事件</li>
            </ul>
          </Paragraph>
        </Card>
      </Space>
    </div>
  );
};

export default EventHandlingExample;