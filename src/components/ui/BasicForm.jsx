import React from 'react';
import { Form, Input, Button, Select, DatePicker, Space, Card, Typography, InputNumber, Radio, Checkbox, Switch, Rate, Upload, Slider, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { Option } = Select;
const { TextArea } = Input;

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
            label="年龄"
            name="age"
            rules={[{ required: true, message: '请输入年龄！' }]}
          >
            <InputNumber min={1} max={120} style={{ width: '100%' }} />
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
              <Option value="manager">项目经理</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="性别"
            name="gender"
            rules={[{ required: true, message: '请选择性别！' }]}
          >
            <Radio.Group>
              <Radio value="male">男</Radio>
              <Radio value="female">女</Radio>
              <Radio value="other">其他</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="兴趣爱好"
            name="hobbies"
            rules={[{ required: true, message: '请选择兴趣爱好！' }]}
          >
            <Checkbox.Group>
              <Space direction="vertical">
                <Checkbox value="reading">阅读</Checkbox>
                <Checkbox value="sports">运动</Checkbox>
                <Checkbox value="music">音乐</Checkbox>
                <Checkbox value="travel">旅行</Checkbox>
              </Space>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item
            label="入职日期"
            name="joinDate"
            rules={[{ required: true, message: '请选择入职日期！' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            label="工作经验"
            name="experience"
            rules={[{ required: true, message: '请选择工作经验！' }]}
          >
            <Slider
              marks={{
                0: '0年',
                3: '3年',
                5: '5年',
                10: '10年',
                15: '15年+'
              }}
              max={15}
            />
          </Form.Item>

          <Form.Item
            label="是否接受加班"
            name="overtime"
            valuePropName="checked"
          >
            <Switch checkedChildren="是" unCheckedChildren="否" />
          </Form.Item>

          <Form.Item
            label="技能评级"
            name="skillLevel"
          >
            <Rate allowHalf count={3} />
          </Form.Item>

          <Form.Item
            label="简历上传"
            name="resume"
            rules={[{ required: true, message: '请上传PDF格式的简历！' }]}
          >
            <Upload
              action='upload链接'
              accept=".pdf"
              beforeUpload={(file) => {
                const isPDF = file.type === 'application/pdf';
                if (!isPDF) {
                  message.error('只能上传PDF格式的文件！');
                }
                return isPDF || Upload.LIST_IGNORE;
              }}
              maxCount={1}
              onPreview={(file) => {
                const url = URL.createObjectURL(file.originFileObj);
                window.open(url);
              }}
              style={{ cursor: 'pointer' }}
              className="upload-list-inline"
              showUploadList={{
                showPreviewIcon: true,
                showDownloadIcon: true,
                extra: ({ size = 0 }) => (
                  <span style={{ color: '#cccccc' }}>({(size / 1024 / 1024).toFixed(2)}MB)</span>
                )
              }}
            >
              <Button icon={<UploadOutlined />}>上传PDF简历</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            label="个人简介"
            name="description"
          >
            <TextArea rows={4} placeholder="请输入个人简介" />
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
    </div >
  );
};

export default BasicForm;