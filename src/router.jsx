import { createBrowserRouter } from 'react-router-dom';
import App from './App';

// 页面组件
import Home from './pages/Home';
import ErrorBoundary from './components/ErrorBoundary';

// 基础概念示例
import ClassComponent from './components/basics/ClassComponent';
import FunctionComponent from './components/basics/FunctionComponent';
import PropsExample from './components/basics/PropsExample';

// Hooks示例
import UseStateExample from './components/hooks/UseState';
import UseEffectExample from './components/hooks/UseEffect';
import UseContextExample from './components/hooks/UseContext';
import UseRefExample from './components/hooks/UseRef';

// 高级特性示例
import LifecycleExample from './components/advanced/Lifecycle';
import EventHandlingExample from './components/advanced/EventHandling';
import StateManagementExample from './components/advanced/StateManagement';
import ImmerExample from './components/advanced/ImmerExample';

// UI示例
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

// Ant Design Pro
import ProFormExample from './components/antd-pro/ProFormExample';
import ProTableExample from './components/antd-pro/ProTableExample';

// 路由配置
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'basics',
        children: [
          {
            path: 'class-component',
            element: <ClassComponent />,
          },
          {
            path: 'function-component',
            element: <FunctionComponent />,
          },
          {
            path: 'props-example',
            element: <PropsExample />,
          },
        ],
      },
      {
        path: 'hooks',
        children: [
          {
            path: 'use-state',
            element: <UseStateExample />,
          },
          {
            path: 'use-effect',
            element: <UseEffectExample />,
          },
          {
            path: 'use-context',
            element: <UseContextExample />,
          },
          {
            path: 'use-ref',
            element: <UseRefExample />,
          }
        ],
      },
      {
        path: 'advanced',
        children: [
          {
            path: 'lifecycle',
            element: <LifecycleExample />,
          },
          {
            path: 'event-handling',
            element: <EventHandlingExample />,
          },
          {
            path: 'state-management',
            element: <StateManagementExample />,
          },
          {
            path: 'immer-example',
            element: <ImmerExample />,
          },
        ],
      },
      {
        path: 'ui',
        children: [
          {
            path: 'basic-form',
            element: <BasicForm />,
          },
          {
            path: 'basic-table',
            element: <BasicTable />,
          },
          {
            path: 'modal',
            element: <BasicModal />,
          },
          {
            path: 'popconfirm',
            element: <PopconfirmExample />,
          },
          {
            path: 'drawer',
            element: <DrawerExample />,
          },
          {
            path: 'chart',
            element: <ChartExample />,
          },
          {
            path: 'image',
            element: <BasicImage />,
          },
          {
            path: 'loading',
            element: <BasicLoading />,
          },
          {
            path: 'button',
            element: <BasicButton />,
          },
          {
            path: 'mock-request',
            element: <MockRequestExample />,
          },
          {
            path: 'weather',
            element: <WeatherExample />,
          },
        ],
      },
      {
        path: 'antd-pro',
        children: [
          {
            path: 'table',
            element: <ProTableExample />,
          },
          {
            path: 'form',
            element: <ProFormExample />
          }
        ],
      }
    ],
  },
]);

export default router;