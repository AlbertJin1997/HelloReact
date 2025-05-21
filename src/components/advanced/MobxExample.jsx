import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';
import { Button, Space, Typography } from 'antd';

// 创建Store
class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }
}

// 创建store实例
const counterStore = new CounterStore();

// 创建观察者组件
const MobxExample = observer(() => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography.Title level={2}>MobX 示例 - 计数器</Typography.Title>
      <Typography.Paragraph>
        这是一个使用MobX状态管理的简单计数器示例。MobX通过{' '}
        <Typography.Text code>makeAutoObservable</Typography.Text>{' '}
        自动追踪状态变化，通过{' '}
        <Typography.Text code>observer</Typography.Text>{' '}
        包装组件使其响应状态更新。
      </Typography.Paragraph>

      <Space direction="vertical" size="large">
        <Typography.Title level={3}>
          当前计数: {counterStore.count}
        </Typography.Title>

        <Space>
          <Button type="primary" onClick={() => counterStore.increment()}>
            增加
          </Button>
          <Button danger onClick={() => counterStore.decrement()}>
            减少
          </Button>
          <Button onClick={() => counterStore.reset()}>重置</Button>
        </Space>
      </Space>
    </div>
  );
});

export default MobxExample;