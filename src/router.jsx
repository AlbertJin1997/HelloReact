// 导入React Router相关依赖
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

// 导入根页面组件和错误边界组件
import Home from './pages/Home';
import ErrorBoundary from './components/ErrorBoundary';

// 导入基础概念示例组件
// 包含类组件、函数组件和Props传递的基本示例
import ClassComponent from './components/basics/ClassComponent';
import FunctionComponent from './components/basics/FunctionComponent';
import PropsExample from './components/basics/PropsExample';

// 导入React Hooks示例组件
// 展示了常用Hooks（useState, useEffect, useContext, useRef）的使用方法
import UseStateExample from './components/hooks/UseState';
import UseEffectExample from './components/hooks/UseEffect';
import UseContextExample from './components/hooks/UseContext';
import UseRefExample from './components/hooks/UseRef';

// 导入React高级特性示例组件
// 包含生命周期、事件处理、状态管理和Immer不可变数据的示例
import LifecycleExample from './components/advanced/Lifecycle';
import EventHandlingExample from './components/advanced/EventHandling';
import StateManagementExample from './components/advanced/StateManagement';
import ImmerExample from './components/advanced/ImmerExample';

// 导入UI组件示例
// 展示了常用的Ant Design组件使用方法和自定义UI组件
import BasicForm from './components/ui/BasicForm';
import BasicTable from './components/ui/BasicTable';
import BasicModal from './components/ui/BasicModal';
import PopconfirmExample from './components/ui/PopconfirmExample';
import DrawerExample from './components/ui/DrawerExample';
import ChartExample from './components/ui/ChartExample';
import BasicImage from './components/ui/BasicImage';
import BasicLoading from './components/ui/BasicLoading';
import BasicButton from './components/ui/BasicButton';
import MockRequestExample from './components/ui/MockRequestExample';
import WeatherExample from './components/ui/WeatherExample';

// 导入Ant Design Pro组件示例
// 展示了Pro组件库中的高级表单和表格组件
import ProFormExample from './components/antd-pro/ProFormExample';
import ProTableExample from './components/antd-pro/ProTableExample';
import LessDemo from './components/ui/LessDemo';

// 路由配置
const router = createBrowserRouter([
  {
    path: '/', // 根路径
    element: <App />, // 根组件
    errorElement: <ErrorBoundary />, // 错误边界组件，用于处理路由错误
    children: [ // 子路由配置
      {
        index: true, // 默认子路由
        element: <Home />, // 首页组件
      },
      {
        path: 'basics', // 基础概念路由组
        children: [
          {
            path: 'class-component', // 类组件示例
            element: <ClassComponent />,
          },
          {
            path: 'function-component', // 函数组件示例
            element: <FunctionComponent />,
          },
          {
            path: 'props-example', // Props使用示例
            element: <PropsExample />,
          },
        ],
      },
      {
        path: 'hooks', // React Hooks路由组
        children: [
          {
            path: 'use-state', // useState Hook示例
            element: <UseStateExample />,
          },
          {
            path: 'use-effect', // useEffect Hook示例
            element: <UseEffectExample />,
          },
          {
            path: 'use-context', // useContext Hook示例
            element: <UseContextExample />,
          },
          {
            path: 'use-ref', // useRef Hook示例
            element: <UseRefExample />,
          }
        ],
      },
      {
        path: 'advanced', // 高级特性路由组
        children: [
          {
            path: 'lifecycle', // 生命周期示例
            element: <LifecycleExample />,
          },
          {
            path: 'event-handling', // 事件处理示例
            element: <EventHandlingExample />,
          },
          {
            path: 'state-management', // 状态管理示例
            element: <StateManagementExample />,
          },
          {
            path: 'immer-example', // Immer示例
            element: <ImmerExample />,
          },
        ],
      },
      {
        path: 'ui', // UI组件路由组
        children: [
          {
            path: 'basic-form', // 基础表单示例
            element: <BasicForm />,
          },
          {
            path: 'basic-table', // 基础表格示例
            element: <BasicTable />,
          },
          {
            path: 'modal', // 模态框示例
            element: <BasicModal />,
          },
          {
            path: 'popconfirm', // 气泡确认框示例
            element: <PopconfirmExample />,
          },
          {
            path: 'drawer', // 抽屉组件示例
            element: <DrawerExample />,
          },
          {
            path: 'chart', // 图表示例
            element: <ChartExample />,
          },
          {
            path: 'image', // 图片组件示例
            element: <BasicImage />,
          },
          {
            path: 'loading', // 加载组件示例
            element: <BasicLoading />,
          },
          {
            path: 'button', // 按钮组件示例
            element: <BasicButton />,
          },
          {
            path: 'mock-request', // 模拟请求示例
            element: <MockRequestExample />,
          },
          {
            path: 'weather', // 天气API示例
            element: <WeatherExample />,
          },
          {
            path: 'less-demo', // LESS样式演示
            element: <LessDemo />
          }
        ],
      },
      {
        path: 'antd-pro', // Ant Design Pro组件路由组
        children: [
          {
            path: 'table', // Pro Table示例
            element: <ProTableExample />,
          },
          {
            path: 'form', // Pro Form示例
            element: <ProFormExample />
          }
        ],
      }
    ],
  },
]);

export default router;