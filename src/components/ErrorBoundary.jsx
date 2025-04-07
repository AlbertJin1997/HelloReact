import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate, useRouteError } from 'react-router-dom';

// ErrorBoundary组件：用于处理React应用中的路由错误
// 当路由匹配失败或组件渲染出错时，会自动渲染此组件
const ErrorBoundary = () => {
  // 使用useRouteError钩子获取路由错误信息
  const error = useRouteError();
  // 使用useNavigate钩子获取导航函数，用于页面跳转
  const navigate = useNavigate();

  // 默认错误提示信息
  let title = 'Unexpected Error';
  let subTitle = 'Sorry, something went wrong.';

  // 根据错误状态码判断错误类型
  // 如果是404错误，显示页面未找到的提示
  if (error?.status === 404) {
    title = '404 - Page Not Found';
    subTitle = 'Sorry, the page you visited does not exist.';
  }

  // 使用Ant Design的Result组件展示错误信息
  // status: 根据错误类型显示不同的状态图标
  // extra: 提供额外的操作按钮，包括返回首页和重试
  return (
    <Result
      status={error?.status === 404 ? '404' : 'error'}
      title={title}
      subTitle={subTitle}
      extra={[
        // 返回首页按钮：点击后导航到应用首页
        <Button type="primary" key="home" onClick={() => navigate('/')}>
          Back Home
        </Button>,
        // 重试按钮：点击后刷新当前页面
        <Button key="retry" onClick={() => window.location.reload()}>
          Try Again
        </Button>
      ]}
    />
  );
};

export default ErrorBoundary;