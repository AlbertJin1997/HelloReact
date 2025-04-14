import React, { useEffect, useRef } from 'react';
import { Card, Space, Typography } from 'antd';
import * as echarts from 'echarts';

const { Title, Paragraph } = Typography;

const ChartExample = () => {
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);
  const stackedChartRef = useRef(null);

  useEffect(() => {
    // 初始化折线图
    const lineChart = echarts.init(lineChartRef.current);
    const lineOption = {
      title: {
        text: '月度销售趋势'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: '销售额',
        data: [150, 230, 224, 218, 135, 147],
        type: 'line',
        smooth: true
      }]
    };
    lineChart.setOption(lineOption);

    // 初始化柱状图
    const barChart = echarts.init(barChartRef.current);
    const barOption = {
      title: {
        text: '产品销量对比'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: ['产品A', '产品B', '产品C', '产品D', '产品E']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: '销量',
        data: [120, 200, 150, 80, 70],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }]
    };
    barChart.setOption(barOption);

    // 初始化堆叠图
    const stackedChart = echarts.init(stackedChartRef.current);
    const stackedOption = {
      title: {
        text: '各区域销售构成'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['线上', '线下']
      },
      xAxis: {
        type: 'category',
        data: ['华东', '华南', '华北', '西部']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '线上',
          type: 'bar',
          stack: 'total',
          data: [320, 302, 301, 334]
        },
        {
          name: '线下',
          type: 'bar',
          stack: 'total',
          data: [120, 132, 101, 134]
        }
      ]
    };
    stackedChart.setOption(stackedOption);

    // 处理窗口大小变化
    const handleResize = () => {
      lineChart.resize();
      barChart.resize();
      stackedChart.resize();
    };
    window.addEventListener('resize', handleResize);

    // 清理函数
    return () => {
      window.removeEventListener('resize', handleResize);
      lineChart.dispose();
      barChart.dispose();
      stackedChart.dispose();
    };
  }, []);

  return (
    <div>
      <Title level={2}>图表示例</Title>
      <Paragraph>
        这个示例展示了使用ECharts实现的常见图表类型，包括折线图、柱状图和堆叠图表。
        图表都支持响应式布局和交互功能。
      </Paragraph>

      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card title="基础折线图">
          <div ref={lineChartRef} style={{ height: '300px' }} />
        </Card>

        <Card title="基础柱状图">
          <div ref={barChartRef} style={{ height: '300px' }} />
        </Card>

        <Card title="堆叠柱状图">
          <div ref={stackedChartRef} style={{ height: '300px' }} />
        </Card>

        <Card title="代码说明">
          <Paragraph>
            <ul>
              <li>使用useRef获取图表容器DOM节点</li>
              <li>在useEffect中初始化和配置图表</li>
              <li>添加窗口resize事件监听实现响应式</li>
              <li>在组件卸载时正确清理资源</li>
            </ul>
          </Paragraph>
        </Card>
      </Space>
    </div>
  );
};

export default ChartExample;