import React, { useState, useReducer } from 'react';
import { Card, Button, Typography, Space, List, Collapse } from 'antd';
import { produce } from 'immer';

// 定义action类型
const ActionTypes = {
  UPDATE_ADDRESS: 'UPDATE_ADDRESS',
  ADD_HOBBY: 'ADD_HOBBY',
  UPDATE_FRIEND_AGE: 'UPDATE_FRIEND_AGE'
};

// 使用Immer的produce函数来简化reducer逻辑
// produce函数接收一个函数作为参数，该函数可以直接修改draft状态
// Immer会根据对draft的修改自动生成新的不可变状态
const userReducer = produce((draft, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_ADDRESS:
      // 直接修改嵌套对象的属性，无需手动展开
      draft.address.street = '海淀区';
      break;
    case ActionTypes.ADD_HOBBY:
      // 直接使用数组的push方法，无需创建新数组
      draft.hobbies.push('打篮球');
      break;
    case ActionTypes.UPDATE_FRIEND_AGE:
      // 直接修改数组中对象的属性
      const friend = draft.friends.find(f => f.id === action.payload);
      if (friend) {
        friend.age += 1;
      }
      break;
    default:
      break;
  }
});

// 初始状态：包含嵌套对象和数组，展示了复杂状态的结构
const initialState = {
  name: '张三',
  age: 25,
  address: {
    city: '北京',
    street: '朝阳区'
  },
  hobbies: ['读书', '游泳'],
  friends: [
    { id: 1, name: '李四', age: 24 },
    { id: 2, name: '王五', age: 26 }
  ]
};

const { Title, Paragraph } = Typography;

/**
 * Immer使用示例组件
 * 展示了三种不同的状态更新方式：
 * 1. 传统方式：手动处理不可变更新，需要使用展开运算符
 * 2. Immer方式：使用produce函数，可以直接修改状态
 * 3. Reducer方式：结合useReducer和Immer，集中管理状态更新逻辑
 */
const ImmerExample = () => {
  // 使用传统useState方式管理状态
  // 这种方式需要手动处理状态的不可变性
  const [user, setUser] = useState({
    name: '张三',
    age: 25,
    address: {
      city: '北京',
      street: '朝阳区'
    },
    hobbies: ['读书', '游泳'],
    friends: [
      { id: 1, name: '李四', age: 24 },
      { id: 2, name: '王五', age: 26 }
    ]
  });

  // 传统方式更新嵌套对象
  // 需要手动使用展开运算符保持不可变性
  const updateAddressTraditional = () => {
    setUser({
      ...user,
      address: {
        ...user.address,
        street: '海淀区'
      }
    });
  };

  // 使用Immer的produce函数更新嵌套对象
  // 可以直接修改状态，Immer负责处理不可变性
  const updateAddressImmer = () => {
    setUser(produce(draft => {
      draft.address.street = '海淀区';
    }));
  };

  // 传统方式添加数组元素
  // 需要使用展开运算符创建新数组
  const addHobbyTraditional = () => {
    setUser({
      ...user,
      hobbies: [...user.hobbies, '打篮球']
    });
  };

  // 使用Immer添加数组元素
  // 可以直接使用数组的push方法
  const addHobbyImmer = () => {
    setUser(produce(draft => {
      draft.hobbies.push('打篮球');
    }));
  };

  // 传统方式更新数组中的对象
  // 需要使用map方法创建新数组，并手动处理对象的不可变性
  const updateFriendAgeTraditional = (id) => {
    setUser({
      ...user,
      friends: user.friends.map(friend =>
        friend.id === id
          ? { ...friend, age: friend.age + 1 }
          : friend
      )
    });
  };

  // 使用Immer更新数组中的对象
  // 可以直接修改找到的对象
  const updateFriendAgeImmer = (id) => {
    setUser(produce(draft => {
      const friend = draft.friends.find(f => f.id === id);
      if (friend) {
        friend.age += 1;
      }
    }));
  };

  // 使用useReducer结合Immer的方式
  // 将状态更新逻辑集中到reducer中，便于管理
  const [userState, dispatch] = useReducer(userReducer, initialState);

  // Reducer方式更新地址
  const updateAddressReducer = () => {
    dispatch({ type: ActionTypes.UPDATE_ADDRESS });
  };

  // Reducer方式添加爱好
  const addHobbyReducer = () => {
    dispatch({ type: ActionTypes.ADD_HOBBY });
  };

  // Reducer方式更新朋友年龄
  const updateFriendAgeReducer = (id) => {
    dispatch({ type: ActionTypes.UPDATE_FRIEND_AGE, payload: id });
  };

  return (
    <div>
      <Title level={2}>Immer使用示例</Title>
      <Paragraph>
        这个示例展示了如何使用Immer来简化React中不可变状态的更新操作。
        通过对比传统方式和Immer方式，可以看到Immer如何让复杂状态的更新变得更简单。
      </Paragraph>

      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Collapse>
          <Card title="用户信息展示">
            <Space direction="vertical" style={{ width: '100%' }}>
              <Collapse>
                <Collapse.Panel header="useState管理的用户信息">
                  <pre>{JSON.stringify(user, null, 2)}</pre>
                </Collapse.Panel>
                <Collapse.Panel header="useReducer管理的用户信息">
                  <pre>{JSON.stringify(userState, null, 2)}</pre>
                </Collapse.Panel>
              </Collapse>
            </Space>
          </Card>
        </Collapse>

        <Card title="更新嵌套对象示例">
          <Space>
            <Button onClick={updateAddressTraditional}>传统方式更新地址</Button>
            <Button onClick={updateAddressImmer}>Immer方式更新地址</Button>
            <Button type="primary" onClick={updateAddressReducer}>Reducer方式更新地址</Button>
          </Space>
        </Card>

        <Card title="数组操作示例">
          <Space direction="vertical">
            <Space>
              <Button onClick={addHobbyTraditional}>传统方式添加爱好</Button>
              <Button onClick={addHobbyImmer}>Immer方式添加爱好</Button>
              <Button type="primary" onClick={addHobbyReducer}>Reducer方式添加爱好</Button>
            </Space>

            <List
              header={<div>朋友列表（点击增加年龄）</div>}
              bordered
              dataSource={user.friends}
              renderItem={friend => (
                <List.Item>
                  <Space>
                    {friend.name} - {friend.age}岁
                    <Button size="small" onClick={() => updateFriendAgeTraditional(friend.id)}>
                      传统方式+1岁
                    </Button>
                    <Button size="small" onClick={() => updateFriendAgeImmer(friend.id)}>
                      Immer方式+1岁
                    </Button>
                    <Button size="small" type="primary" onClick={() => updateFriendAgeReducer(friend.id)}>
                      Reducer方式+1岁
                    </Button>
                  </Space>
                </List.Item>
              )}
            />
          </Space>
        </Card>

        <Card title="代码说明">
          <Paragraph>
            <ul>
              <li>Immer让我们能够以可变的方式编写不可变的更新逻辑</li>
              <li>使用produce函数创建一个草稿状态(draft)，可以直接修改它</li>
              <li>Immer会自动处理不可变更新，生成新的状态</li>
              <li>特别适合处理嵌套对象和数组的更新操作</li>
              <li>结合useReducer使用可以更好地管理复杂状态更新逻辑</li>
              <li>Reducer方式让状态更新逻辑更集中、更易维护</li>
            </ul>
          </Paragraph>
        </Card>
      </Space>
    </div>
  );
};

export default ImmerExample;