import React from 'react';
import Icon from '../../../components/AppIcon';

const MetricsCard = ({ metric }) => {
  const getIconColor = (trend) => {
    switch (trend) {
      case 'up':
        return 'text-success';
      case 'down':
        return 'text-error';
      default:
        return 'text-text-secondary';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return 'TrendingUp';
      case 'down':
        return 'TrendingDown';
      default:
        return 'Minus';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${metric?.bgColor}`}>
          <Icon name={metric?.icon} size={24} className={metric?.iconColor} />
        </div>
        <div className={`flex items-center space-x-1 ${getIconColor(metric?.trend)}`}>
          <Icon name={getTrendIcon(metric?.trend)} size={16} />
          <span className="text-sm font-medium">{metric?.change}</span>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-text-primary">{metric?.value}</h3>
        <p className="text-sm text-text-secondary">{metric?.label}</p>
        <p className="text-xs text-text-secondary">{metric?.description}</p>
      </div>
    </div>
  );
};

export default MetricsCard;