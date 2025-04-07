import React from 'react';
import { Typography, Card, List } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

// 学习路径配置
const learningPath = [
  {
    title: '基础概念',
    items: [
      { title: '类组件示例', path: '/basics/class-component', description: '学习React类组件的基本用法和特性' },
      { title: '函数组件示例', path: '/basics/function-component', description: '了解React函数组件的写法和优势' },
      { title: 'Props使用示例', path: '/basics/props-example', description: '掌握组件间数据传递的方法' },
    ],
  },
  {
    title: 'React Hooks',
    items: [
      { title: 'useState示例', path: '/hooks/use-state', description: '学习状态管理的基本用法' },
      { title: 'useEffect示例', path: '/hooks/use-effect', description: '理解副作用处理和生命周期管理' },
      { title: 'useContext示例', path: '/hooks/use-context', description: '掌握跨组件状态共享' },
    ],
  },
  {
    title: '高级特性',
    items: [
      { title: '生命周期示例', path: '/advanced/lifecycle', description: '深入理解组件的生命周期' },
      { title: '事件处理示例', path: '/advanced/event-handling', description: '学习React中的事件处理机制' },
      { title: '状态管理示例', path: '/advanced/state-management', description: '掌握复杂应用的状态管理方案' },
      { title: 'Immer示例', path: '/advanced/immer-example', description: '学习使用Immer简化不可变状态更新' },
    ],
  },
];

const Home = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Typography>
        <Title level={2}>React学习项目</Title>
        <Paragraph>
          欢迎来到React学习项目！这个项目包含了React的核心概念和常用功能的示例代码。
          每个示例都配有详细的注释说明，帮助你更好地理解React的工作原理。
          建议按照下面的学习路径逐步学习，这样可以循序渐进地掌握React的核心概念。
        </Paragraph>
      </Typography>

      {learningPath.map((section, index) => (
        <Card
          key={index}
          title={section.title}
          style={{ marginBottom: '24px' }}
        >
          <List
            itemLayout="horizontal"
            dataSource={section.items}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={<Link to={item.path}>{item.title}</Link>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </Card>
      ))}
    </div>
  );
};

export default Home;