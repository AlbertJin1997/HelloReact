import React from 'react';
import { Form, Input, Button, Select, DatePicker, Space, Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;
const { Option } = Select;

// 基础表单示例组件
const BasicForm = ({ form }) => {
  if (!form) {
    form = Form.useForm()[0];
  }

  const onFinish = (values) => {
    console.log('表单提交的值:', values);
  };

  return (
    <div style={{ padding: '24px' }}>
      <Card>
        <Typography>
          <Title level={3}>基础表单示例</Title>
          <Paragraph>
            这个示例展示了Ant Design中常用的表单组件和布局方式。包含了输入框、选择器、日期选择等基础表单元素。
          </Paragraph>
        </Typography>

        <Form
          form={form}
          name="basic-form"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名！' }]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>

          <Form.Item
            label="职业"
            name="occupation"
            rules={[{ required: true, message: '请选择职业！' }]}
          >
            <Select placeholder="请选择职业">
              <Option value="developer">开发工程师</Option>
              <Option value="designer">设计师</Option>
              <Option value="product">产品经理</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="入职日期"
            name="joinDate"
            rules={[{ required: true, message: '请选择入职日期！' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            label="个人简介"
            name="description"
          >
            <Input.TextArea rows={4} placeholder="请输入个人简介" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Space>
              {/* htmlType="submit" will trigger onFinish event */}
              <Button type="primary" htmlType="submit">
                提交
              </Button>
              <Button onClick={() => form.resetFields()}>
                重置
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default BasicForm;