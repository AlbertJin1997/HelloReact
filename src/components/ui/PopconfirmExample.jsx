import React, { useState } from 'react';
import { Card, Button, Popconfirm, Typography, Space, message, Switch } from 'antd';

const { Title, Paragraph } = Typography;

/**
 * Popconfirm气泡确认框示例
 * 这个组件展示了Ant Design Popconfirm组件的多种使用场景，包括：
 * 1. 基本确认框
 * 2. 自定义按钮文字
 * 3. 异步确认
 * 4. 条件触发
 */
const PopconfirmExample = () => {
  // 模拟删除操作的加载状态
  const [loading, setLoading] = useState(false);
  // 控制是否显示确认框
  const [visible, setVisible] = useState(false);
  // 控制Popconfirm是否可用
  const [disabled, setDisabled] = useState(false);

  // 模拟异步操作
  const handleAsyncConfirm = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      message.success('操作成功');
    } catch (error) {
      message.error('操作失败');
    } finally {
      setLoading(false);
    }
  };

  // 处理Popconfirm显示状态变化
  const handleVisibleChange = (newVisible) => {
    if (!disabled) {
      setVisible(newVisible);
    }
  };

  return (
    <div>
      <Title level={2}>Popconfirm气泡确认框示例</Title>
      <Paragraph>
        这个示例展示了Ant Design Popconfirm组件的多种使用场景，包括基本确认框、
        自定义按钮文字、异步确认和条件触发等。
      </Paragraph>

      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card title="基本确认框">
          <Popconfirm
            title="删除确认"
            description="确定要删除这条记录吗？"
            onConfirm={() => message.success('删除成功')}
            onCancel={() => message.info('取消删除')}
          >
            <Button danger>删除</Button>
          </Popconfirm>
        </Card>

        <Card title="自定义按钮文字">
          <Popconfirm
            title="操作确认"
            description="确定要执行此操作吗？"
            okText="确定执行"
            cancelText="暂不执行"
            onConfirm={() => message.success('执行成功')}
          >
            <Button type="primary">执行操作</Button>
          </Popconfirm>
        </Card>

        <Card title="异步确认">
          <Popconfirm
            title="异步操作确认"
            description="这个操作需要一些时间完成"
            onConfirm={handleAsyncConfirm}
            okButtonProps={{ loading: loading }}
          >
            <Button type="primary">异步操作</Button>
          </Popconfirm>
        </Card>

        <Card title="条件触发">
          <Space>
            <Popconfirm
              title="操作确认"
              description="确定要执行此操作吗？"
              open={visible}
              onOpenChange={handleVisibleChange}
              onConfirm={() => {
                message.success('操作成功');
                setVisible(false);
              }}
              onCancel={() => {
                message.info('取消操作');
                setVisible(false);
              }}
            >
              <Button type="primary">条件触发</Button>
            </Popconfirm>
            <Switch
              checked={!disabled}
              onChange={(checked) => setDisabled(!checked)}
              checkedChildren="启用"
              unCheckedChildren="禁用"
            />
          </Space>
        </Card>

        <Card title="代码说明">
          <Paragraph>
            <ul>
              <li>基本用法：直接包裹需要确认的元素</li>
              <li>自定义按钮文字：使用okText和cancelText属性</li>
              <li>异步操作：在onConfirm中处理异步逻辑</li>
              <li>条件触发：通过open和onOpenChange控制显示状态</li>
            </ul>
          </Paragraph>
        </Card>
      </Space>
    </div>
  );
};

export default PopconfirmExample;