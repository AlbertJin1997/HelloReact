import React from 'react';
import { Typography, Card, List } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

// 学习路径配置
const learningPath = [
  {
    title: 'UI示例',
    items: [
      { title: '基础表单示例', path: '/ui/basic-form', description: '展示Ant Design表单组件的基本用法和布局' },
      { title: '基础表格示例', path: '/ui/basic-table', description: '展示Ant Design表格组件的基本用法和功能' },
      { title: 'Modal对话框示例', path: '/ui/modal', description: '展示Modal对话框的基本用法和常见场景' },
      { title: 'Popconfirm气泡确认框示例', path: '/ui/popconfirm', description: '展示Popconfirm气泡确认框的使用方法' },
      { title: 'Drawer抽屉示例', path: '/ui/drawer', description: '展示Drawer抽屉组件的多种使用场景' },
      { title: '图表示例', path: '/ui/chart', description: '展示使用ECharts实现的常见图表类型' },
      { title: '图片示例', path: '/ui/image', description: '展示图片组件的基本用法和功能' },
      { title: '加载组件示例', path: '/ui/loading', description: '展示加载组件的使用方法' },
      { title: '按钮组件示例', path: '/ui/button', description: '展示按钮组件的基本用法和样式' },
      { title: '模拟网络请求示例', path: '/ui/mock-request', description: '展示如何使用Mock数据模拟API请求' },
      { title: '天气数据示例', path: '/ui/weather', description: '展示如何调用实际的天气API获取数据' },
      { title: '错误页面示例', path: '/ui/error123', description: '展示错误页面的设计和实现' },
    ],
  },
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
      { title: 'useRef示例', path: '/hooks/use-ref', description: '掌握DOM元素引用和状态共享' },
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