import React, { useState } from 'react';
import { Space, Card, Typography, Spin, Button, Alert } from 'antd';
import { LoadingOutlined, SyncOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const BasicLoading = () => {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const toggleLoading1 = () => {
    setLoading1(true);
    setTimeout(() => setLoading1(false), 3000);
  };

  const toggleLoading2 = () => {
    setLoading2(true);
    setTimeout(() => setLoading2(false), 3000);
  };

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Typography>
        <Title level={2}>加载组件示例</Title>
        <Paragraph>
          展示了Ant Design的Spin组件的基本用法，包括不同大小、自定义图标和包装容器等功能。
        </Paragraph>
      </Typography>

      <Card title="基础加载动画">
        <Space size="large">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
        </Space>
      </Card>

      <Card title="自定义加载图标">
        <Space size="large">
          <Spin indicator={antIcon} />
          <Spin indicator={<SyncOutlined spin style={{ fontSize: 24 }} />} />
        </Space>
      </Card>

      <Card title="包装容器">
        <Space direction="vertical" style={{ width: '100%' }}>
          <div style={{ marginBottom: 16 }}>
            <Button type="primary" onClick={toggleLoading1}>
              切换加载状态
            </Button>
          </div>
          <Spin spinning={loading1}>
            <Alert
              message="Alert 消息标题"
              description="这是一个被Spin组件包装的Alert组件，可以展示加载中的效果。"
              type="info"
            />
          </Spin>
        </Space>
      </Card>

      <Card title="自定义描述文案">
        <Space direction="vertical" style={{ width: '100%' }}>
          <div style={{ marginBottom: 16 }}>
            <Button type="primary" onClick={toggleLoading2}>
              显示加载
            </Button>
          </div>
          <Spin
            spinning={loading2}
            indicator={antIcon}
            tip="加载中..."
          >
            <Alert
              message="带有自定义描述的加载"
              description="这个示例展示了如何添加自定义的加载提示文案。"
              type="info"
            />
          </Spin>
        </Space>
      </Card>
    </Space>
  );
};

export default BasicLoading;