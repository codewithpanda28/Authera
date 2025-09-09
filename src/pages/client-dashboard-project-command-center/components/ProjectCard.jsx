import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return 'bg-success/10 text-success border-success/20';
      case 'in progress':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'planning':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'on hold':
        return 'bg-error/10 text-error border-error/20';
      default:
        return 'bg-muted text-text-secondary border-border';
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-success';
    if (progress >= 50) return 'bg-accent';
    if (progress >= 25) return 'bg-warning';
    return 'bg-error';
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text-primary mb-2">{project?.name}</h3>
          <p className="text-sm text-text-secondary mb-3">{project?.description}</p>
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project?.status)}`}>
            <Icon name="Circle" size={8} className="mr-2 fill-current" />
            {project?.status}
          </div>
        </div>
        <div className="flex items-center space-x-2 ml-4">
          <Icon name="Calendar" size={16} className="text-text-secondary" />
          <span className="text-sm text-text-secondary">{project?.dueDate}</span>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-text-primary">Progress</span>
          <span className="text-sm font-semibold text-text-primary">{project?.progress}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(project?.progress)}`}
            style={{ width: `${project?.progress}%` }}
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Icon name="Users" size={16} className="text-text-secondary" />
            <span className="text-sm text-text-secondary">{project?.teamSize} members</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Clock" size={16} className="text-text-secondary" />
            <span className="text-sm text-text-secondary">{project?.timeRemaining}</span>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onViewDetails(project)}
          iconName="ArrowRight"
          iconPosition="right"
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;