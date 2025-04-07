import React, { useState } from 'react';
import { Card, Button, Drawer, Form, Input, Select, Space, Typography, Radio } from 'antd';

const { Title, Paragraph } = Typography;
const { Option } = Select;

/**
 * Drawer抽屉示例
 * 这个组件展示了Ant Design Drawer组件的多种使用场景，包括：
 * 1. 基本抽屉
 * 2. 不同位置的抽屉
 * 3. 自定义尺寸
 * 4. 表单抽屉
 */
const DrawerExample = () => {
  // 基本抽屉状态
  const [basicVisible, setBasicVisible] = useState(false);

  // 位置抽屉状态
  const [placementVisible, setPlacementVisible] = useState(false);
  const [placement, setPlacement] = useState('right');

  // 自定义尺寸抽屉状态
  const [sizeVisible, setSizeVisible] = useState(false);
  const [size, setSize] = useState('default');

  // 表单抽屉状态
  const [formVisible, setFormVisible] = useState(false);
  const [form] = Form.useForm();

  // 处理表单提交
  const handleFormSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log('表单值:', values);
      setFormVisible(false);
      form.resetFields();
    } catch (error) {
      console.error('表单验证失败:', error);
    }
  };

  return (
    <div>
      <Title level={2}>Drawer抽屉示例</Title>
      <Paragraph>
        这个示例展示了Ant Design Drawer组件的多种使用场景，包括基本抽屉、
        不同位置的抽屉、自定义尺寸和表单抽屉等。
      </Paragraph>

      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card title="基本抽屉">
          <Button type="primary" onClick={() => setBasicVisible(true)}>
            打开基本抽屉
          </Button>
          <Drawer
            title="基本抽屉"
            open={basicVisible}
            onClose={() => setBasicVisible(false)}
          >
            <p>这是一个基本的抽屉示例。</p>
            <p>你可以在这里放置任何内容。</p>
          </Drawer>
        </Card>

        <Card title="不同位置的抽屉">
          <Space>
            <Select
              value={placement}
              onChange={setPlacement}
              style={{ width: 120 }}
            >
              <Option value="top">顶部</Option>
              <Option value="right">右侧</Option>
              <Option value="bottom">底部</Option>
              <Option value="left">左侧</Option>
            </Select>
            <Button type="primary" onClick={() => setPlacementVisible(true)}>
              打开抽屉
            </Button>
          </Space>
          <Drawer
            title="自定义位置"
            placement={placement}
            open={placementVisible}
            onClose={() => setPlacementVisible(false)}
          >
            <p>这个抽屉可以从不同位置打开。</p>
            <p>当前位置：{placement}</p>
          </Drawer>
        </Card>

        <Card title="自定义尺寸">
          <Space>
            <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
              <Radio.Button value="default">默认</Radio.Button>
              <Radio.Button value="large">大</Radio.Button>
            </Radio.Group>
            <Button type="primary" onClick={() => setSizeVisible(true)}>
              打开抽屉
            </Button>
          </Space>
          <Drawer
            title="自定义尺寸"
            open={sizeVisible}
            size={size}
            onClose={() => setSizeVisible(false)}
          >
            <p>这个抽屉可以设置不同的尺寸。</p>
            <p>当前尺寸：{size}</p>
          </Drawer>
        </Card>

        <Card title="表单抽屉">
          <Button type="primary" onClick={() => setFormVisible(true)}>
            打开表单抽屉
          </Button>
          <Drawer
            title="表单抽屉"
            open={formVisible}
            onClose={() => {
              setFormVisible(false);
              form.resetFields();
            }}
            extra={
              <Space>
                <Button onClick={() => {
                  setFormVisible(false);
                  form.resetFields();
                }}>取消</Button>
                <Button type="primary" onClick={handleFormSubmit}>
                  提交
                </Button>
              </Space>
            }
          >
            <Form form={form} layout="vertical">
              <Form.Item
                name="name"
                label="姓名"
                rules={[{ required: true, message: '请输入姓名' }]}
              >
                <Input placeholder="请输入姓名" />
              </Form.Item>
              <Form.Item
                name="email"
                label="邮箱"
                rules={[
                  { required: true, message: '请输入邮箱' },
                  { type: 'email', message: '请输入有效的邮箱地址' }
                ]}
              >
                <Input placeholder="请输入邮箱" />
              </Form.Item>
              <Form.Item
                name="description"
                label="描述"
              >
                <Input.TextArea rows={4} placeholder="请输入描述" />
              </Form.Item>
            </Form>
          </Drawer>
        </Card>

        <Card title="代码说明">
          <Paragraph>
            <ul>
              <li>使用placement属性控制抽屉弹出位置</li>
              <li>使用size属性控制抽屉尺寸</li>
              <li>可以在抽屉中放置表单等复杂内容</li>
              <li>使用extra属性自定义操作按钮</li>
            </ul>
          </Paragraph>
        </Card>
      </Space>
    </div>
  );
};

export default DrawerExample;