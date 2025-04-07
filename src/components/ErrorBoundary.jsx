import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  let title = 'Unexpected Error';
  let subTitle = 'Sorry, something went wrong.';

  if (error?.status === 404) {
    title = '404 - Page Not Found';
    subTitle = 'Sorry, the page you visited does not exist.';
  }

  return (
    <Result
      status={error?.status === 404 ? '404' : 'error'}
      title={title}
      subTitle={subTitle}
      extra={[
        <Button type="primary" key="home" onClick={() => navigate('/')}>
          Back Home
        </Button>,
        <Button key="retry" onClick={() => window.location.reload()}>
          Try Again
        </Button>
      ]}
    />
  );
};

export default ErrorBoundary;