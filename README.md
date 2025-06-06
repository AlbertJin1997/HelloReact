# React 学习项目

这是一个专门为React初学者设计的学习项目，包含了React的核心概念和常用功能的示例代码。每个示例都配有详细的注释说明，帮助你更好地理解React的工作原理。

## 项目结构

```
src/
  components/         # React组件示例
    ui/              # UI组件示例
      BasicForm      # 基础表单示例
      BasicTable     # 基础表格示例
      Modal          # Modal对话框示例
      Popconfirm     # 气泡确认框示例
      Drawer         # 抽屉组件示例
      Image          # 图片组件示例
      Loading        # 加载组件示例
      Button         # 按钮组件示例
      Charts/        # 图表组件示例
        LineChart    # 折线图示例
        BarChart     # 柱状图示例
        PieChart     # 饼图示例
    basics/           # 基础概念
      ClassComponent  # 类组件示例
      FunctionComponent  # 函数组件示例
      PropsExample   # Props使用示例
    hooks/           # React Hooks示例
      UseState      # useState使用示例
      UseEffect     # useEffect使用示例
      UseContext    # useContext使用示例
    advanced/        # 高级特性
      Lifecycle     # 生命周期示例
      EventHandling # 事件处理示例
      StateManagement # 状态管理示例
      ImmerExample  # Immer状态管理示例
      NetworkDemo   # 网络请求示例
    antd-pro/        # Ant Design Pro组件示例
      ProTableDemo  # ProTable示例
      ProFormDemo   # ProForm示例
  pages/             # 页面组件
    Home            # 首页，包含导航和说明
```

## 学习路径

1. **UI示例**
   - 基础表单的使用和布局
   - 基础表格的功能和用法
   - Modal对话框的使用场景
   - Popconfirm气泡确认框的应用
   - Drawer抽屉组件的实现
   - 图片组件的基本功能
   - 加载组件的使用方法
   - 按钮组件的样式和用法
   - 图表组件（折线图、柱状图、饼图）的实现和数据展示
   - Ant Design Pro组件（ProTable、ProForm）的高级用法

2. **基础概念**
   - 组件的基本写法（类组件和函数组件）
   - Props的使用和数据传递
   - State的概念和使用

3. **React Hooks**
   - useState的使用（状态管理示例：计数器、表单、待办事项）
   - useEffect的生命周期管理
   - useContext的上下文管理（主题切换、用户信息共享）
   - useRef的引用管理（DOM引用、可变值存储、定时器管理）

4. **高级特性**
   - 组件生命周期
   - 事件处理机制
   - 状态管理和数据流
   - Immer不可变状态管理
   - 网络请求和API调用（天气API示例）

## 如何使用

1. 克隆项目到本地
2. 安装依赖：`npm install`
3. 启动项目：`npm run dev`
4. 按照学习路径逐个查看示例

每个示例组件都包含详细的中文注释，解释了代码的功能和实现原理。建议按照学习路径的顺序逐步学习，这样可以循序渐进地掌握React的核心概念。

## 注意事项

- 本项目使用Vite作为构建工具
- 推荐使用最新版本的Node.js
- 建议配合React官方文档一起学习
