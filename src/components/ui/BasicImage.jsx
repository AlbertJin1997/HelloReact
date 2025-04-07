import React, { useState } from 'react';
import { Image, Space, Card, Typography, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const BasicImage = () => {
  const [loading, setLoading] = useState(true);

  const demoImages = [
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
    'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
  ];

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Typography>
        <Title level={2}>图片组件示例</Title>
        <Paragraph>
          展示了Ant Design的Image组件的基本用法，包括图片预览、懒加载和加载状态等功能。
        </Paragraph>
      </Typography>

      <Card title="基础图片展示">
        <Space>
          <Image
            width={200}
            src={demoImages[0]}
            placeholder={
              <div style={{
                width: 200,
                height: 200,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#f5f5f5'
              }}>
                <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
              </div>
            }
          />
        </Space>
      </Card>

      <Card title="图片预览功能">
        <Image.PreviewGroup>
          <Space>
            {demoImages.map((image, index) => (
              <Image
                key={index}
                width={150}
                src={image}
                alt={`Demo image ${index + 1}`}
              />
            ))}
          </Space>
        </Image.PreviewGroup>
      </Card>

      <Card title="懒加载示例">
        <Space direction="vertical">
          {demoImages.map((image, index) => (
            <Image
              key={index}
              width={200}
              src={image}
              alt={`Lazy load demo ${index + 1}`}
              loading="lazy"
              placeholder={
                <div style={{
                  width: 200,
                  height: 200,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: '#f5f5f5'
                }}>
                  <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
                </div>
              }
            />
          ))}
        </Space>
      </Card>
    </Space>
  );
};

export default BasicImage;