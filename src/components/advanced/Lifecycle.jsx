import React, { Component } from 'react';
import { Card, Button, Input, Typography, Space, Timeline } from 'antd';

const { Title, Paragraph } = Typography;

/**
 * 子组件：用于演示组件卸载
 */
class ChildComponent extends Component {
  componentDidMount() {
    console.log('子组件 - componentDidMount');
    this.props.onLifecycleEvent('子组件已挂载 (componentDidMount)');
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      console.log('子组件 - componentDidUpdate');
      this.props.onLifecycleEvent('子组件已更新 (componentDidUpdate)');
    }
  }

  componentWillUnmount() {
    console.log('子组件 - componentWillUnmount');
    this.props.onLifecycleEvent('子组件即将卸载 (componentWillUnmount)');
  }

  render() {
    return (
      <Card size="small" title="子组件">
        <p>接收到的数据：{this.props.data}</p>
      </Card>
    );
  }
}

/**
 * 生命周期示例组件
 * 这个组件展示了React类组件的完整生命周期，包括：
 * 1. 挂载阶段：constructor -> render -> componentDidMount
 * 2. 更新阶段：render -> componentDidUpdate
 * 3. 卸载阶段：componentWillUnmount
 */
class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      inputValue: '',
      showChild: true,
      lifecycleEvents: []
    };
    console.log('父组件 - constructor');
    this.addLifecycleEvent('组件初始化 (constructor)');
  }

  componentDidMount() {
    console.log('父组件 - componentDidMount');
    this.addLifecycleEvent('组件已挂载 (componentDidMount)');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('父组件 - componentDidUpdate (count changed)');
      this.addLifecycleEvent('组件已更新 - 计数器变化 (componentDidUpdate)');
    }
    if (prevState.inputValue !== this.state.inputValue) {
      console.log('父组件 - componentDidUpdate (input changed)');
      this.addLifecycleEvent('组件已更新 - 输入值变化 (componentDidUpdate)');
    }
  }

  componentWillUnmount() {
    console.log('父组件 - componentWillUnmount');
    this.addLifecycleEvent('组件即将卸载 (componentWillUnmount)');
  }

  // 添加生命周期事件到时间线
  addLifecycleEvent = (event) => {
    this.setState(prevState => ({
      lifecycleEvents: [
        {
          time: new Date().toLocaleTimeString(),
          event: event
        },
        ...prevState.lifecycleEvents
      ].slice(0, 10) // 只保留最近的10条记录
    }));
  };

  // 更新计数器
  handleIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  // 更新输入值
  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  };

  // 切换子组件显示状态
  toggleChild = () => {
    this.setState(prevState => ({
      showChild: !prevState.showChild
    }));
  };

  render() {
    console.log('父组件 - render');
    const { count, inputValue, showChild, lifecycleEvents } = this.state;

    return (
      <div>
        <Title level={2}>生命周期示例</Title>
        <Paragraph>
          这个示例展示了React类组件的完整生命周期，包括挂载、更新和卸载阶段。
          你可以通过不同的操作触发生命周期方法，并在时间线中查看执行顺序。
        </Paragraph>

        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Card title="交互区域">
            <Space direction="vertical">
              <Space>
                <Button type="primary" onClick={this.handleIncrement}>
                  增加计数 ({count})
                </Button>
                <Input
                  placeholder="输入一些内容"
                  value={inputValue}
                  onChange={this.handleInputChange}
                  style={{ width: '200px' }}
                />
                <Button onClick={this.toggleChild}>
                  {showChild ? '卸载' : '挂载'}子组件
                </Button>
              </Space>

              {showChild && (
                <ChildComponent
                  data={`计数：${count}，输入：${inputValue}`}
                  onLifecycleEvent={this.addLifecycleEvent}
                />
              )}
            </Space>
          </Card>

          <Card title="生命周期事件时间线">
            <Timeline
              items={lifecycleEvents.map((event, index) => ({
                children: (
                  <>
                    <p style={{ margin: 0 }}>{event.event}</p>
                    <p style={{ margin: 0, fontSize: '12px', color: '#999' }}>
                      {event.time}
                    </p>
                  </>
                )
              }))}
            />
          </Card>

          <Card title="代码说明">
            <Paragraph>
              <ul>
                <li>constructor：组件初始化时调用</li>
                <li>componentDidMount：组件挂载后调用</li>
                <li>componentDidUpdate：组件更新后调用</li>
                <li>componentWillUnmount：组件卸载前调用</li>
                <li>render：组件渲染时调用</li>
              </ul>
            </Paragraph>
          </Card>
        </Space>
      </div>
    );
  }
}

export default LifecycleExample;