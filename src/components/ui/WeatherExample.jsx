import React, { useState, useEffect } from 'react';
import { Card, Button, message, Space, Typography, Spin, Alert, Select } from 'antd';
import { ReloadOutlined, EnvironmentOutlined } from '@ant-design/icons';
import request from '../../utils/request';

// 城市列表数据
const cities = [
  { label: '北京', value: '110000' },
  { label: '上海', value: '310000' },
  { label: '广州', value: '440100' },
  { label: '深圳', value: '440300' },
  { label: '杭州', value: '330100' },
];

const { Title, Paragraph } = Typography;

const WeatherExample = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [selectedCity, setSelectedCity] = useState('110000'); // 默认选择北京

  // 获取天气数据
  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);

    try {
      // 使用高德天气API
      const response = await request({
        url: 'https://restapi.amap.com/v3/weather/weatherInfo',
        method: 'GET',
        params: {
          key: 'a1396a49f40227848301307bb96a1946', // 请替换为您的高德API Key
          city: selectedCity, // 选中的城市编码
          extensions: 'base', // 返回实况天气
          output: 'JSON'
        }
      });
      if (response.status === '1' && response.lives?.length > 0) {
        const live = response.lives[0];
        const weatherInfo = {
          city: live.city,
          weather: live.weather,
          temperature: parseInt(live.temperature),
          humidity: parseInt(live.humidity),
          windpower: live.windpower,
          winddirection: live.winddirection,
          reporttime: live.reporttime
        };
        setWeatherData(weatherInfo);
        message.success('天气数据加载成功');
      } else {
        throw new Error('获取天气数据失败');
      }
    } catch (err) {
      setError(err.message);
      message.error('天气数据加载失败' + response.message);
    } finally {
      setLoading(false);
    }
  };

  // 首次加载数据 和 城市切换时重新加载数据
  useEffect(() => {
    fetchWeatherData();
  }, [selectedCity]);

  return (
    <div style={{ padding: '24px' }}>
      <Card>
        <Typography>
          <Title level={3}>实时天气数据示例</Title>
          <Paragraph>
            这个示例展示了如何使用高德地图天气API获取实时天气数据。
            你可以点击刷新按钮更新天气信息。
          </Paragraph>
        </Typography>

        <Space style={{ marginBottom: 16 }} size="middle">
          <Select
            value={selectedCity}
            onChange={(value) => setSelectedCity(value)}
            options={cities}
            style={{ width: 120 }}
          />
          <Button
            icon={<ReloadOutlined />}
            onClick={fetchWeatherData}
          >
            刷新天气
          </Button>
        </Space>

        {error ? (
          <Alert
            message="错误"
            description={error}
            type="error"
            style={{ marginBottom: 16 }}
          />
        ) : null}

        <Spin spinning={loading}>
          {weatherData && (
            <Card
              title={
                <Space>
                  <EnvironmentOutlined />
                  {weatherData.city}
                </Space>
              }
              style={{ marginTop: 16 }}
            >
              <p>天气：{weatherData.weather}</p>
              <p>温度：{weatherData.temperature}℃</p>
              <p>风向：{weatherData.winddirection}</p>
              <p>风力：{weatherData.windpower}级</p>
              <p>湿度：{weatherData.humidity}%</p>
              <p>发布时间：{weatherData.reporttime}</p>
            </Card>
          )}
        </Spin>
      </Card>
    </div>
  );
};

export default WeatherExample;