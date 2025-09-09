import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import Icon from '../../../components/AppIcon';

const PerformanceChart = ({ data, title, type = 'line' }) => {
  const [timeRange, setTimeRange] = useState('7d');

  const timeRangeOptions = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' }
  ];

  const getFilteredData = () => {
    // Mock filtering based on time range
    switch (timeRange) {
      case '7d':
        return data?.slice(-7);
      case '30d':
        return data?.slice(-30);
      case '90d':
        return data?.slice(-90);
      default:
        return data;
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="text-sm font-medium text-text-primary mb-2">{label}</p>
          {payload?.map((entry, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: entry?.color }}
              />
              <span className="text-sm text-text-secondary">{entry?.name}:</span>
              <span className="text-sm font-semibold text-text-primary">
                {typeof entry?.value === 'number' ? entry?.value?.toLocaleString() : entry?.value}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  const filteredData = getFilteredData();

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
        <div className="flex items-center space-x-2">
          {timeRangeOptions?.map((option) => (
            <button
              key={option?.value}
              onClick={() => setTimeRange(option?.value)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 ${
                timeRange === option?.value
                  ? 'bg-accent/10 text-accent' :'text-text-secondary hover:text-text-primary hover:bg-muted'
              }`}
            >
              {option?.label}
            </button>
          ))}
        </div>
      </div>
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {type === 'line' ? (
            <LineChart data={filteredData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="name" 
                stroke="var(--color-text-secondary)"
                fontSize={12}
              />
              <YAxis 
                stroke="var(--color-text-secondary)"
                fontSize={12}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="var(--color-accent)" 
                strokeWidth={2}
                dot={{ fill: 'var(--color-accent)', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: 'var(--color-accent)', strokeWidth: 2 }}
              />
              {data?.[0]?.target && (
                <Line 
                  type="monotone" 
                  dataKey="target" 
                  stroke="var(--color-success)" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                />
              )}
            </LineChart>
          ) : (
            <BarChart data={filteredData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="name" 
                stroke="var(--color-text-secondary)"
                fontSize={12}
              />
              <YAxis 
                stroke="var(--color-text-secondary)"
                fontSize={12}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="value" 
                fill="var(--color-accent)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-sm text-text-secondary">Current Performance</span>
          </div>
          {data?.[0]?.target && (
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-success" />
              <span className="text-sm text-text-secondary">Target</span>
            </div>
          )}
        </div>
        <button className="flex items-center space-x-1 text-sm text-accent hover:text-accent/80 transition-colors duration-200">
          <Icon name="Download" size={16} />
          <span>Export Data</span>
        </button>
      </div>
    </div>
  );
};

export default PerformanceChart;