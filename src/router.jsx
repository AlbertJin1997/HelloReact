import { createBrowserRouter } from 'react-router-dom';
import App from './App';

// 页面组件
import Home from './pages/Home';

// 基础概念示例
import ClassComponent from './components/basics/ClassComponent';
import FunctionComponent from './components/basics/FunctionComponent';
import PropsExample from './components/basics/PropsExample';

// Hooks示例
import UseStateExample from './components/hooks/UseState';
import UseEffectExample from './components/hooks/UseEffect';
import UseContextExample from './components/hooks/UseContext';

// 高级特性示例
import LifecycleExample from './components/advanced/Lifecycle';
import EventHandlingExample from './components/advanced/EventHandling';
import StateManagementExample from './components/advanced/StateManagement';
import ImmerExample from './components/advanced/ImmerExample';

// 路由配置
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
    ],
  },
]);

export default router;