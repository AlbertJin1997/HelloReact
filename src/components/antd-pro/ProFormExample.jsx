import React from 'react';
import {
  ProForm,
  ProFormText,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormTextArea,
  ProFormUploadButton,
} from '@ant-design/pro-components';
import { message } from 'antd';

const ProFormExample = () => {
  const handleSubmit = async (values) => {
    console.log(values);
    message.success('提交成功');
  };

  return (
    <ProForm
      onFinish={handleSubmit}
      submitter={{
        searchConfig: {
          submitText: '提交表单',
          resetText: '重置表单',
        },
      }}
    >
      <ProForm.Group title="基本信息">
        <ProFormText
          name="name"
          label="项目名称"
          tooltip="最长为 24 位"
          placeholder="请输入项目名称"
          rules={[{ required: true, message: '这是必填项' }]}
        />

        <ProFormText
          name="company"
          label="所属公司"
          placeholder="请输入公司名称"
        />
      </ProForm.Group>

      <ProForm.Group title="项目信息">
        <ProFormSelect
          name="type"
          label="项目类型"
          options={[
            { label: '研发项目', value: 'dev' },
            { label: '设计项目', value: 'design' },
            { label: '营销项目', value: 'marketing' },
          ]}
          rules={[{ required: true, message: '请选择项目类型' }]}
        />

        <ProFormDateRangePicker
          name="dateRange"
          label="项目周期"
          rules={[{ required: true, message: '请选择项目周期' }]}
        />
      </ProForm.Group>

      <ProFormTextArea
        name="description"
        label="项目描述"
        placeholder="请输入项目描述信息"
        rules={[{ required: true, message: '请输入项目描述' }]}
      />

      <ProFormUploadButton
        name="files"
        label="项目文档"
        max={2}
        fieldProps={{
          name: 'file',
        }}
        action="/upload.do"
        extra="支持扩展名：.doc .docx .pdf"
      />

      <ProFormSelect
        name="members"
        label="项目成员"
        mode="multiple"
        options={[
          { label: '张三', value: 'zhangsan' },
          { label: '李四', value: 'lisi' },
          { label: '王五', value: 'wangwu' },
        ]}
      />
    </ProForm>
  );
};

export default ProFormExample;