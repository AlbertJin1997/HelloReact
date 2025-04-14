import React from 'react';
import { Layout, Menu } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  BookOutlined,
  ExperimentOutlined,
  ToolOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import { icons } from 'antd/es/image/PreviewGroup';

const { Header, Content, Sider } = Layout;

// 导航菜单配置
const menuItems = [
  {
    key: 'ui',
    icon: <AppstoreOutlined />,
    label: 'UI示例',
    children: [
      { key: 'ui/basic-form', label: '基础表单' },
      { key: 'ui/basic-table', label: '基础表格' },
      { key: 'ui/modal', label: 'Modal对话框' },
      { key: 'ui/popconfirm', label: 'Popconfirm气泡确认框' },
      { key: 'ui/drawer', label: 'Drawer抽屉' },
      { key: 'ui/image', label: '图片组件' },
      { key: 'ui/chart', label: 'echarts组件' },
      { key: 'ui/loading', label: '加载组件' },
      { key: 'ui/button', label: '按钮组件' },
      { key: 'ui/mock-request', label: '模拟网络请求' },
      { key: 'ui/error123', label: 'ErrorBoundary' }, //随便新增一个不存在的path，测试一下404页面是否正确跳转
      { key: 'ui/weather', label: 'axios请求天气' },
    ],
  },
  {
    key: 'basics',
    icon: <BookOutlined />,
    label: '基础概念',
    children: [
      { key: 'basics/class-component', label: '类组件示例' },
      { key: 'basics/function-component', label: '函数组件示例' },
      { key: 'basics/props-example', label: 'Props使用示例' },
    ],
  },
  {
    key: 'hooks',
    icon: <ExperimentOutlined />,
    label: 'React Hooks',
    children: [
      { key: 'hooks/use-state', label: 'useState示例' },
      { key: 'hooks/use-effect', label: 'useEffect示例' },
      { key: 'hooks/use-context', label: 'useContext示例' },
      { key: 'hooks/use-ref', label: 'useRef示例' },
    ],
  },
  {
    key: 'advanced',
    icon: <ToolOutlined />,
    label: '高级特性',
    children: [
      { key: 'advanced/lifecycle', label: '生命周期示例' },
      { key: 'advanced/event-handling', label: '事件处理示例' },
      { key: 'advanced/state-management', label: '状态管理示例' },
      { key: 'advanced/immer-example', label: 'Immer示例' },
    ],
  },
  {
    key: 'antd-pro',
    icon: <ToolOutlined />,
    label: 'pro组件',
    children: [
      { key: 'antd-pro/form', label: 'form示例' },
      { key: 'antd-pro/table', label: 'table示例' }
    ]
  }
];

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 处理菜单点击事件
  const handleMenuClick = ({ key }) => {
    navigate(key === 'home' ? '/' : `/${key}`);
  };

  // 获取当前选中的菜单项
  const getSelectedKeys = () => {
    const path = location.pathname.substring(1); // 移除开头的 '/'
    return path ? [path] : ['home'];
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{
        padding: '0 24px',
        background: '#fff',
        borderBottom: '1px solid #f0f0f0',
        display: 'flex',
        alignItems: 'center'
      }}>
        <h1 style={{ margin: 0, fontSize: '20px', cursor: 'pointer' }} onClick={() => navigate('/')}>
          React学习项目
        </h1>
      </Header>
      <Layout>
        <Sider width={250} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            selectedKeys={getSelectedKeys()}
            style={{ height: '100%', borderRight: 0 }}
            items={[
              { key: 'home', label: '首页', icon: <BookOutlined /> },
              ...menuItems
            ]}
            onClick={handleMenuClick}
          />
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
