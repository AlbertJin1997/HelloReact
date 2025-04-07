import React, { useState } from 'react';
import { Space, Card, Typography, Button, Radio } from 'antd';
import {
  SearchOutlined,
  DownloadOutlined,
  PoweroffOutlined,
  PlusOutlined,
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const BasicButton = () => {
  const [size, setSize] = useState('middle');
  const [loading, setLoading] = useState(false);

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Typography>
        <Title level={2}>按钮组件示例</Title>
        <Paragraph>
          展示了Ant Design的Button组件的基本用法，包括不同类型、尺寸、状态和图标按钮等功能。
        </Paragraph>
      </Typography>

      <Card title="按钮类型">
        <Space wrap>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Space>
      </Card>

      <Card title="按钮尺寸">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="middle">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
          <Space wrap style={{ marginTop: 16 }}>
            <Button type="primary" size={size}>
              Primary
            </Button>
            <Button size={size}>Default</Button>
            <Button type="dashed" size={size}>
              Dashed
            </Button>
          </Space>
        </Space>
      </Card>

      <Card title="图标按钮">
        <Space wrap>
          <Button type="primary" icon={<SearchOutlined />}>
            Search
          </Button>
          <Button icon={<DownloadOutlined />}>Download</Button>
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          <Button type="primary" shape="round" icon={<DownloadOutlined />}>
            Download
          </Button>
          <Button icon={<PlusOutlined />}>Add</Button>
        </Space>
      </Card>

      <Card title="加载状态">
        <Space wrap>
          <Button type="primary" loading>
            Loading
          </Button>
          <Button type="primary" loading shape="circle" />
          <Button loading>Loading</Button>
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loading}
            onClick={handleLoadingClick}
          >
            Click me!
          </Button>
        </Space>
      </Card>

      <Card title="禁用状态">
        <Space wrap>
          <Button type="primary" disabled>
            Primary(disabled)
          </Button>
          <Button disabled>Default(disabled)</Button>
          <Button type="dashed" disabled>
            Dashed(disabled)
          </Button>
          <Button type="text" disabled>
            Text(disabled)
          </Button>
          <Button type="link" disabled>
            Link(disabled)
          </Button>
        </Space>
      </Card>

      <Card title="危险按钮">
        <Space wrap>
          <Button type="primary" danger>
            Primary
          </Button>
          <Button danger>Default</Button>
          <Button type="dashed" danger>
            Dashed
          </Button>
          <Button type="text" danger>
            Text
          </Button>
          <Button type="link" danger>
            Link
          </Button>
        </Space>
      </Card>
    </Space>
  );
};

export default BasicButton;