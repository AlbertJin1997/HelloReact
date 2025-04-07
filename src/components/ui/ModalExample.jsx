import React, { useState } from 'react';
import { Card, Button, Modal, Form, Input, Typography, Space } from 'antd';

const { Title, Paragraph } = Typography;

/**
 * Modal对话框示例
 * 这个组件展示了Ant Design Modal组件的多种使用场景，包括：
 * 1. 基本对话框
 * 2. 表单对话框
 * 3. 自定义页脚
 * 4. 确认对话框
 */
const ModalExample = () => {
  // 基本对话框状态
  const [basicVisible, setBasicVisible] = useState(false);

  // 表单对话框状态
  const [formVisible, setFormVisible] = useState(false);
  const [form] = Form.useForm();

  // 自定义页脚对话框状态
  const [customVisible, setCustomVisible] = useState(false);

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

  // 显示确认对话框
  const showConfirm = () => {
    Modal.confirm({
      title: '确认操作',
      content: '您确定要执行此操作吗？',
      onOk() {
        console.log('用户点击了确认');
      },
      onCancel() {
        console.log('用户点击了取消');
      },
    });
  };

  return (
    <div>
      <Title level={2}>Modal对话框示例</Title>
      <Paragraph>
        这个示例展示了Ant Design Modal组件的多种使用场景，包括基本对话框、
        表单对话框、自定义页脚对话框和确认对话框等。
      </Paragraph>

      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card title="基本对话框">
          <Button type="primary" onClick={() => setBasicVisible(true)}>
            打开基本对话框
          </Button>
          <Modal
            title="基本对话框"
            open={basicVisible}
            onOk={() => setBasicVisible(false)}
            onCancel={() => setBasicVisible(false)}
          >
            <p>这是一个基本的对话框示例。</p>
            <p>你可以在这里放置任何内容。</p>
          </Modal>
        </Card>

        <Card title="表单对话框">
          <Button type="primary" onClick={() => setFormVisible(true)}>
            打开表单对话框
          </Button>
          <Modal
            title="表单对话框"
            open={formVisible}
            onOk={handleFormSubmit}
            onCancel={() => {
              setFormVisible(false);
              form.resetFields();
            }}
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
            </Form>
          </Modal>
        </Card>

        <Card title="自定义页脚对话框">
          <Button type="primary" onClick={() => setCustomVisible(true)}>
            打开自定义页脚对话框
          </Button>
          <Modal
            title="自定义页脚对话框"
            open={customVisible}
            footer={[
              <Button key="back" onClick={() => setCustomVisible(false)}>
                返回
              </Button>,
              <Button key="submit" type="primary" onClick={() => setCustomVisible(false)}>
                提交
              </Button>,
              <Button
                key="link"
                type="link"
                onClick={() => window.alert('点击了链接按钮')}
              >
                链接按钮
              </Button>,
            ]}
            onCancel={() => setCustomVisible(false)}
          >
            <p>这是一个自定义页脚的对话框示例。</p>
            <p>你可以自定义页脚按钮的数量、类型和行为。</p>
          </Modal>
        </Card>

        <Card title="确认对话框">
          <Button type="primary" onClick={showConfirm}>
            显示确认对话框
          </Button>
        </Card>

        <Card title="代码说明">
          <Paragraph>
            <ul>
              <li>使用useState管理对话框的显示状态</li>
              <li>结合Form组件实现表单对话框</li>
              <li>通过footer属性自定义对话框页脚</li>
              <li>使用Modal.confirm()显示确认对话框</li>
            </ul>
          </Paragraph>
        </Card>
      </Space>
    </div>
  );
};

export default ModalExample;