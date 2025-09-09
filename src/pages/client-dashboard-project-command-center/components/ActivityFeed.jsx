import React from 'react';
import Icon from '../../../components/AppIcon';

const ActivityFeed = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'milestone':
        return 'CheckCircle';
      case 'update':
        return 'MessageSquare';
      case 'alert':
        return 'AlertTriangle';
      case 'deployment':
        return 'Rocket';
      case 'meeting':
        return 'Video';
      default:
        return 'Bell';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'milestone':
        return 'text-success bg-success/10';
      case 'update':
        return 'text-accent bg-accent/10';
      case 'alert':
        return 'text-warning bg-warning/10';
      case 'deployment':
        return 'text-secondary bg-secondary/10';
      case 'meeting':
        return 'text-primary bg-primary/10';
      default:
        return 'text-text-secondary bg-muted';
    }
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInMinutes = Math.floor((now - time) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}h ago`;
    } else {
      return `${Math.floor(diffInMinutes / 1440)}d ago`;
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-text-primary">Recent Activity</h3>
        <Icon name="MoreHorizontal" size={20} className="text-text-secondary cursor-pointer hover:text-text-primary" />
      </div>
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {activities?.map((activity, index) => (
          <div key={activity?.id} className="flex items-start space-x-3">
            <div className={`p-2 rounded-full ${getActivityColor(activity?.type)}`}>
              <Icon name={getActivityIcon(activity?.type)} size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-text-primary font-medium">{activity?.title}</p>
              <p className="text-xs text-text-secondary mt-1">{activity?.description}</p>
              <div className="flex items-center space-x-4 mt-2">
                <span className="text-xs text-text-secondary">{formatTimeAgo(activity?.timestamp)}</span>
                {activity?.project && (
                  <span className="text-xs text-accent font-medium">{activity?.project}</span>
                )}
              </div>
            </div>
            {activity?.priority && (
              <div className="flex-shrink-0">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  activity?.priority === 'high' ? 'bg-error/10 text-error' :
                  activity?.priority === 'medium'? 'bg-warning/10 text-warning' : 'bg-muted text-text-secondary'
                }`}>
                  {activity?.priority}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;