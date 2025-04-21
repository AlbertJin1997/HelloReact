import React from 'react';
import './LessDemo.less';
import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const LessDemo = () => {
  return (
    <div className="less-demo-container">
      <Card>
        <Title level={3}>LESS样式演示</Title>
        <Paragraph>
          本示例展示了如何在React项目中使用LESS，包括自定义变量、嵌套规则和类选择器。
        </Paragraph>
        <div className="less-demo-box">
          <div className="less-demo-title">自定义LESS变量和嵌套样式</div>
          <button className="less-demo-btn">LESS按钮</button>
        </div>
      </Card>
    </div>
  );
};

export default LessDemo;