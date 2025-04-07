import React, { useState } from 'react';
import { Button, Modal, Drawer, Card, Typography, Space, Form, Input } from 'antd';

const { Title, Paragraph } = Typography;

const BasicModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [form] = Form.useForm();

  const handleModalOk = () => {
    form.validateFields().then((values) => {
      console.log('表单数据:', values);
      setModalVisible(false);
      form.resetFields();
    });
  };

  const handleDrawerSubmit = () => {
    setDrawerVisible(false);
  };

  return (
    <div style={{ padding: '24px' }}>
      <Card>
        <Typography>
          <Title level={3}>弹窗组件示例</Title>
          <Paragraph>
            这个示例展示了Ant Design中常用的弹窗组件，包括模态对话框（Modal）和抽屉（Drawer）。
            这些组件常用于需要用户注意力或输入的场景。
          </Paragraph>
        </Typography>

        <Space>
          <Button type="primary" onClick={() => setModalVisible(true)}>
            打开对话框
          </Button>
          <Button onClick={() => setDrawerVisible(true)}>
            打开抽屉
          </Button>
        </Space>

        {/* 模态对话框 */}
        <Modal
          title="用户信息"
          open={modalVisible}
          onOk={handleModalOk}
          onCancel={() => setModalVisible(false)}
        >
          <Form form={form} layout="vertical">
            <Form.Item
              name="name"
              label="姓名"
              rules={[{ required: true, message: '请输入姓名！' }]}
            >
              <Input placeholder="请输入姓名" />
            </Form.Item>
            <Form.Item
              name="email"
              label="邮箱"
              rules={[{ required: true, message: '请输入邮箱！' }]}
            >
              <Input placeholder="请输入邮箱" />
            </Form.Item>
          </Form>
        </Modal>

        {/* 抽屉 */}
        <Drawer
          title="详细信息"
          placement="right"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          extra={
            <Space>
              <Button onClick={() => setDrawerVisible(false)}>取消</Button>
              <Button type="primary" onClick={handleDrawerSubmit}>
                确定
              </Button>
            </Space>
          }
        >
          <p>这是一个抽屉示例，通常用于展示详细信息或进行复杂的表单操作。</p>
          <p>抽屉可以从不同方向滑出，并且可以自定义宽度和内容。</p>
        </Drawer>
      </Card>
    </div>
  );
};

export default BasicModal;