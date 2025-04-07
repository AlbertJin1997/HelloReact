import React from 'react';
import { Card, Button, Input, Typography, Space } from 'antd';

const { Title, Paragraph } = Typography;

/**
 * 类组件示例
 * 这个组件展示了React类组件的基本用法，包括：
 * 1. 组件的基本结构
 * 2. state的使用
 * 3. 事件处理
 * 4. 生命周期方法
 */
class ClassComponent extends React.Component {
  // 构造函数，用于初始化state
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      inputValue: '',
    };
  }

  // 组件挂载完成后调用
  componentDidMount() {
    console.log('组件已挂载');
  }

  // 组件更新前调用
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('计数器值已更新：', this.state.count);
    }
    if (prevState.inputValue !== this.state.inputValue) {
      console.log('输入的值已更新：', this.state.inputValue);
    }
  }

  // 组件卸载前调用
  componentWillUnmount() {
    console.log('组件即将卸载');
  }

  // 处理计数器增加
  handleIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  // 处理输入变化
  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  };

  render() {
    const { count, inputValue } = this.state;

    return (
      <div>
        <Title level={2}>类组件示例</Title>
        <Paragraph>
          这个示例展示了React类组件的基本用法，包括state管理、事件处理和生命周期方法。
          你可以在控制台中查看生命周期方法的调用情况。
        </Paragraph>

        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Card title="State和事件处理示例">
            <Space direction="vertical">
              <div>
                <Button type="primary" onClick={this.handleIncrement}>
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
                  onChange={this.handleInputChange}
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
                <li>使用constructor初始化state</li>
                <li>通过this.setState()更新状态</li>
                <li>使用箭头函数定义方法以绑定this</li>
                <li>在生命周期方法中添加日志以便观察</li>
              </ul>
            </Paragraph>
          </Card>
        </Space>
      </div>
    );
  }
}

export default ClassComponent;